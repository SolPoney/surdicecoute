import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
  ECOUTANT = 'ecoutant',
  ADMIN = 'admin',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({
    type: 'simple-enum',
    enum: UserRole,
    default: UserRole.ECOUTANT,
  })
  role: UserRole;

  @Column({ default: false })
  isValidated: boolean;

  @Column({ default: true })
  disponible: boolean;

  @Column('simple-array', { nullable: true })
  competences: string[];

  @Column({ default: 0 })
  nombreDemandesEnCours: number;

  @CreateDateColumn()
  dateInscription: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
