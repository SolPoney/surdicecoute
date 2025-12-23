import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';
import { UserRole } from './users/entities/user.entity';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  try {
    // Créer des écoutants de test
    const ecoutants = [
      {
        email: 'marie.dupont@lepharedouest.fr',
        password: 'password123',
        nom: 'Dupont',
        prenom: 'Marie',
        role: UserRole.ECOUTANT,
        isValidated: true,
        disponible: true,
        competences: ['Accompagnement surdicécité', 'Écoute active', 'Communication adaptée'],
      },
      {
        email: 'pierre.martin@lepharedouest.fr',
        password: 'password123',
        nom: 'Martin',
        prenom: 'Pierre',
        role: UserRole.ECOUTANT,
        isValidated: true,
        disponible: true,
        competences: ['Soutien psychologique', 'Accompagnement quotidien'],
      },
      {
        email: 'admin@lepharedouest.fr',
        password: 'admin123',
        nom: 'Admin',
        prenom: 'Super',
        role: UserRole.ADMIN,
        isValidated: true,
        disponible: false,
        competences: ['Administration'],
      },
    ];

    for (const userData of ecoutants) {
      const existing = await usersService.findByEmail(userData.email);
      if (!existing) {
        await usersService.create(userData);
        console.log(`✅ Utilisateur créé: ${userData.email}`);
      } else {
        console.log(`⏭️  Utilisateur existe déjà: ${userData.email}`);
      }
    }

    console.log('\n🎉 Seed terminé avec succès!');
    console.log('\nComptes de test:');
    console.log('- marie.dupont@lepharedouest.fr / password123');
    console.log('- pierre.martin@lepharedouest.fr / password123');
    console.log('- admin@lepharedouest.fr / admin123');
  } catch (error) {
    console.error('Erreur lors du seed:', error);
  }

  await app.close();
}

seed();
