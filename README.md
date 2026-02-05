# Frontend Mentor - Manage landing page

![Design preview for the Manage landing page coding challenge](preview.jpg)

## Présentation
Ce projet est une solution au challenge Manage Landing Page de Frontend Mentor. Il s'agit d'une page d'accueil responsive complète incluant des éléments interactifs complexes comme un carrousel de témoignages et un formulaire de newsletter avec validation.

**Démo en ligne :** [Manage Landing Page](https://marchandbaptiste.github.io/manage-landing-page-master/)

## Objectifs du projet
* Créer une mise en page responsive complexe (gestion des images d'arrière-plan décoratives).
* Développer un slider (carrousel) interactif pour la section témoignages.
* Implémenter une validation de formulaire côté client (email vide ou format incorrect).
* Gérer le menu de navigation mobile avec un overlay.

## Technologies utilisées
* **HTML5** : Structure sémantique.
* **CSS3** : Flexbox pour la mise en page générale, positionnement absolu pour les éléments décoratifs (SVG).
* **JavaScript** : Logique du slider, validation du formulaire et bascule du menu mobile.

## Analyse technique
### Points complexes
1. **Le Slider (Carrousel)** :
   La gestion du défilement des témoignages est le défi principal. Sur mobile, il doit afficher un seul élément, tandis que sur desktop, l'affichage change. J'ai dû gérer l'état actif des "dots" de navigation et la translation des éléments via CSS transform.

2. **Éléments décoratifs (Backgrounds)** :
   Le design inclut des formes SVG en arrière-plan qui doivent être positionnées précisément par rapport au flux du document, sans créer de barre de défilement horizontal indésirable (overflow-x hidden sur le body).

3. **Validation du formulaire** :
   Le champ email vérifie l'entrée utilisateur à l'aide d'une expression régulière (Regex). Si le format est invalide, la classe CSS du formulaire change pour afficher un message d'erreur rouge et changer la couleur de la bordure.

### Ce que j'ai appris
Ce projet m'a forcé à mieux organiser mon CSS pour gérer les nombreux états (menu ouvert/fermé, slider, erreurs formulaire). J'ai aussi approfondi ma compréhension du positionnement relatif/absolu pour placer les éléments graphiques exactement comme sur la maquette JPG.

## Sources
* Challenge & Assets : [Frontend Mentor](https://www.frontendmentor.io)
