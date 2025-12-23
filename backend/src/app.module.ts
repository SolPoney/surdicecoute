import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DemandesModule } from './demandes/demandes.module';
import { User } from './users/entities/user.entity';
import { Demande } from './demandes/entities/demande.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'surdicecoute.db',
      entities: [User, Demande],
      synchronize: true, // À désactiver en production
    }),
    AuthModule,
    UsersModule,
    DemandesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
