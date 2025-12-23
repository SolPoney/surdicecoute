import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

export enum ModeContact {
  EMAIL = 'email',
  TELEPHONE = 'telephone',
  MESSAGERIE = 'messagerie',
}

export enum Urgence {
  FAIBLE = 'faible',
  MOYENNE = 'moyenne',
  ELEVEE = 'elevee',
}

export enum StatutDemande {
  EN_ATTENTE = 'en-attente',
  PRISE_EN_CHARGE = 'prise-en-charge',
  TERMINEE = 'terminee',
}

@Entity('demandes')
export class Demande {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  telephone: string;

  @Column({
    type: 'simple-enum',
    enum: ModeContact,
    default: ModeContact.MESSAGERIE,
  })
  modeContact: ModeContact;

  @Column()
  sujet: string;

  @Column('text')
  message: string;

  @Column({
    type: 'simple-enum',
    enum: Urgence,
    default: Urgence.MOYENNE,
  })
  urgence: Urgence;

  @Column({
    type: 'simple-enum',
    enum: StatutDemande,
    default: StatutDemande.EN_ATTENTE,
  })
  statut: StatutDemande;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'ecoutantId' })
  ecoutant: User;

  @Column({ nullable: true })
  ecoutantId: number;

  @CreateDateColumn()
  dateCreation: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
