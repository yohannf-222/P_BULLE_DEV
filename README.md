# JS Nexus

Projet d'apprentissage JavaScript organisé par axes.

## Univers

- **Centre :** Node Zero
- **Nord :** Les Fondations — Ada, The Architect
- **Est :** Les Archives — Lin, The Keeper
- **Sud-Est :** La Forge — Lambda, The Alchemist
- **Sud-Ouest :** La Citadelle — Turing, The Warden
- **Ouest :** La Faille — Nyx, The Chronomancer

## Organisation

```text
exercices/
├── axe-fondamentaux/
├── axe-controle/
├── axe-fonctions/
├── axe-donnees/
└── axe-async/
```

Chaque axe contient plusieurs missions/exercices.

## Installation

```bash
npm install
```

## Lancer tous les tests automatiques

```
npm run test
```

## Lancer les tests d'une mission précise

Exemples :

```bash
npm run test -- exercices/axe-controle/portes-citadelle/
```

## Documentation

La documentation <a href="https://fr.javascript.info/">javascript.info</a> nous paraît pertinente pour ce projet. 

## Méthode de travail

Pour chaque mission :

1. lire l'énoncé (`README.md` dans le dossier) ;
2. compléter le fichier `.js` ;
3. rechercher la syntaxe JavaScript nécessaire ;
4. lancer les tests ;
5. corriger le code jusqu'à ce que **tous les tests passent** ;
6. **ne pas s'arrêter lorsque les tests sont verts** : relire, simplifier et améliorer le code tant que les tests continuent de réussir ;
7. effectuer un commit/push ;
8. être capable d'expliquer le code produit.
