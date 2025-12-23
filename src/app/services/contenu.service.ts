import { Injectable } from '@angular/core';
import { Contenu } from '../models/contenu.model';

@Injectable({
  providedIn: 'root'
})
export class ContenuService {
  private contenus: Contenu[] = [
    {
      id: 1,
      titre: "Témoignage de courage et d'espoir",
      description: "Un témoignage inspirant sur le parcours d'une personne qui a surmonté des moments difficiles grâce au soutien et à l'écoute.",
      duree: "5:00",
      dureeMinutes: "5 minutes",
      audioDisponible: true,
      texte: [
        "Je me souviens de cette période où tout semblait sombre autour de moi. Les journées se ressemblaient toutes, et j'avais l'impression d'être seul face à mes difficultés.",
        "Un jour, j'ai décidé de chercher de l'aide. Ce n'était pas facile de faire ce premier pas, mais c'était nécessaire. J'avais besoin qu'on m'écoute, sans me juger.",
        "Grâce à l'écoute bienveillante que j'ai trouvée, j'ai pu mettre des mots sur ce que je ressentais. Simplement parler, être entendu, cela m'a permis de retrouver un peu d'espoir.",
        "Aujourd'hui, je ne dis pas que tout est parfait. Mais je sais que je ne suis plus seul. Je sais qu'il existe des personnes prêtes à écouter, à comprendre, à accompagner.",
        "Si vous lisez ces mots et que vous traversez une période difficile, sachez qu'il n'y a pas de honte à demander de l'aide. Vous méritez d'être écouté. Vous méritez du soutien.",
        "Le courage, ce n'est pas de tout affronter seul. C'est d'accepter qu'on a besoin des autres, et de faire ce premier pas vers l'écoute."
      ]
    },
    {
      id: 2,
      titre: "La force de l'écoute bienveillante",
      description: "Réflexion sur l'importance d'être écouté sans jugement dans les moments de fragilité.",
      duree: "7:00",
      dureeMinutes: "7 minutes",
      audioDisponible: true,
      texte: [
        "L'écoute bienveillante n'est pas simplement entendre des mots. C'est accueillir l'autre dans sa vérité, sans chercher à juger ou à corriger.",
        "Dans notre société où tout va vite, prendre le temps d'écouter est devenu un acte rare et précieux.",
        "Chaque personne porte en elle une histoire unique, des joies et des peines qui méritent d'être entendues.",
        "Quand quelqu'un nous écoute vraiment, sans chercher à nous interrompre ou à nous conseiller immédiatement, quelque chose se passe.",
        "Nous nous sentons reconnus, validés dans notre humanité. Nos émotions deviennent légitimes.",
        "L'écoute bienveillante crée un espace de sécurité où il devient possible de déposer son fardeau.",
        "C'est cette écoute que nous souhaitons offrir ici, sans jugement, dans le respect absolu de chacun."
      ]
    },
    {
      id: 3,
      titre: "Sortir de l'isolement ensemble",
      description: "Témoignage sur l'importance de briser la solitude et de se sentir compris.",
      duree: "6:00",
      dureeMinutes: "6 minutes",
      audioDisponible: true,
      texte: [
        "L'isolement est une souffrance silencieuse qui touche plus de personnes qu'on ne l'imagine.",
        "Se sentir seul, même entouré, est une réalité pour beaucoup d'entre nous.",
        "Briser cet isolement commence souvent par un simple geste: tendre la main, chercher de l'aide.",
        "Il n'y a aucune honte à reconnaître qu'on a besoin de parler, d'être écouté.",
        "Ensemble, nous pouvons créer des ponts entre les solitudes, tisser des liens de compréhension.",
        "Chaque conversation, chaque moment d'écoute est une victoire contre l'isolement."
      ]
    },
    {
      id: 4,
      titre: "Accepter ses émotions",
      description: "Un message rassurant sur le droit de ressentir ses émotions sans culpabilité.",
      audioDisponible: false,
      texte: [
        "Nos émotions font partie de nous. Elles ne sont ni bonnes ni mauvaises, elles sont.",
        "La tristesse, la colère, la peur, la joie: toutes ces émotions ont leur place.",
        "Trop souvent, nous essayons de refouler ce que nous ressentons, par peur du jugement.",
        "Pourtant, accueillir ses émotions est le premier pas vers l'apaisement.",
        "Vous avez le droit de ressentir ce que vous ressentez. C'est légitime, c'est humain.",
        "Ne vous jugez pas pour vos émotions. Elles sont le reflet de votre expérience de vie.",
        "Ici, vous pouvez être vous-même, dans toute votre humanité."
      ]
    },
    {
      id: 5,
      titre: "Construire pas à pas",
      description: "Réflexion sur la reconstruction personnelle à travers de petites victoires quotidiennes.",
      duree: "4:00",
      dureeMinutes: "4 minutes",
      audioDisponible: true,
      texte: [
        "Reconstruire sa vie après une période difficile ne se fait pas en un jour.",
        "C'est un chemin fait de petits pas, de petites victoires quotidiennes.",
        "Certains jours seront plus faciles que d'autres, et c'est normal.",
        "Chaque petit progrès compte, même s'il semble insignifiant.",
        "Se lever le matin, prendre soin de soi, parler à quelqu'un: autant de victoires.",
        "Ne vous comparez pas aux autres. Votre chemin est unique.",
        "Avancez à votre rythme, avec bienveillance envers vous-même."
      ]
    }
  ];

  constructor() { }

  getAllContenus(): Contenu[] {
    return this.contenus;
  }

  getContenuById(id: number): Contenu | undefined {
    return this.contenus.find(c => c.id === id);
  }
}
