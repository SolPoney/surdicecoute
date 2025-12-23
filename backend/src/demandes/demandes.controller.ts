import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { DemandesService } from './demandes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('demandes')
export class DemandesController {
  constructor(private readonly demandesService: DemandesService) {}

  @Post()
  create(@Body() demandeData: any) {
    return this.demandesService.create(demandeData);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.demandesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('en-attente')
  findEnAttente() {
    return this.demandesService.findEnAttente();
  }

  @UseGuards(JwtAuthGuard)
  @Get('mes-demandes')
  findMesDemandes(@Request() req) {
    return this.demandesService.findByEcoutant(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('statistiques')
  getStatistiques() {
    return this.demandesService.getStatistiques();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/prendre-en-charge')
  prendreEnCharge(@Param('id') id: string, @Request() req) {
    return this.demandesService.prendreEnCharge(+id, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/terminer')
  terminer(@Param('id') id: string, @Request() req) {
    return this.demandesService.terminer(+id, req.user.userId);
  }
}
