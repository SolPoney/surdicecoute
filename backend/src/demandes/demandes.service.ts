import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Demande, StatutDemande } from './entities/demande.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class DemandesService {
  constructor(
    @InjectRepository(Demande)
    private demandesRepository: Repository<Demande>,
    private usersService: UsersService,
  ) {}

  async create(demandeData: Partial<Demande>): Promise<Demande> {
    const demande = this.demandesRepository.create(demandeData);
    return this.demandesRepository.save(demande);
  }

  async findAll(): Promise<Demande[]> {
    return this.demandesRepository.find({
      relations: ['ecoutant'],
      order: { dateCreation: 'DESC' },
    });
  }

  async findEnAttente(): Promise<Demande[]> {
    return this.demandesRepository.find({
      where: { statut: StatutDemande.EN_ATTENTE },
      order: { dateCreation: 'ASC' },
    });
  }

  async findByEcoutant(ecoutantId: number): Promise<Demande[]> {
    return this.demandesRepository.find({
      where: { ecoutantId },
      relations: ['ecoutant'],
      order: { dateCreation: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Demande> {
    const demande = await this.demandesRepository.findOne({
      where: { id },
      relations: ['ecoutant'],
    });
    if (!demande) {
      throw new NotFoundException(`Demande with ID ${id} not found`);
    }
    return demande;
  }

  async prendreEnCharge(
    demandeId: number,
    ecoutantId: number,
  ): Promise<Demande> {
    const demande = await this.findOne(demandeId);
    const ecoutant = await this.usersService.findOne(ecoutantId);

    if (demande.statut !== StatutDemande.EN_ATTENTE) {
      throw new BadRequestException("Cette demande n'est plus en attente");
    }

    if (!ecoutant.disponible) {
      throw new BadRequestException(
        'Vous devez être disponible pour prendre en charge une demande',
      );
    }

    demande.statut = StatutDemande.PRISE_EN_CHARGE;
    demande.ecoutantId = ecoutantId;
    demande.ecoutant = ecoutant;

    await this.usersService.update(ecoutantId, {
      nombreDemandesEnCours: ecoutant.nombreDemandesEnCours + 1,
    });

    return this.demandesRepository.save(demande);
  }

  async terminer(demandeId: number, ecoutantId: number): Promise<Demande> {
    const demande = await this.findOne(demandeId);

    if (demande.ecoutantId !== ecoutantId) {
      throw new BadRequestException(
        'Vous ne pouvez terminer que vos propres demandes',
      );
    }

    if (demande.statut !== StatutDemande.PRISE_EN_CHARGE) {
      throw new BadRequestException("Cette demande n'est pas en cours");
    }

    demande.statut = StatutDemande.TERMINEE;

    const ecoutant = await this.usersService.findOne(ecoutantId);
    await this.usersService.update(ecoutantId, {
      nombreDemandesEnCours: Math.max(0, ecoutant.nombreDemandesEnCours - 1),
    });

    return this.demandesRepository.save(demande);
  }

  async getStatistiques() {
    const [total, enAttente, enCours, terminees] = await Promise.all([
      this.demandesRepository.count(),
      this.demandesRepository.count({
        where: { statut: StatutDemande.EN_ATTENTE },
      }),
      this.demandesRepository.count({
        where: { statut: StatutDemande.PRISE_EN_CHARGE },
      }),
      this.demandesRepository.count({
        where: { statut: StatutDemande.TERMINEE },
      }),
    ]);

    return {
      totalDemandes: total,
      demandesEnAttente: enAttente,
      demandesEnCours: enCours,
      demandesTerminees: terminees,
    };
  }
}
