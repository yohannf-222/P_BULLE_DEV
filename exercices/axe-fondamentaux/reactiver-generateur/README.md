# Les Fondations

## Réactiver le générateur de Node Zero

Vous venez d'arriver sur **JS Nexus**.

Au nord de l'île se trouvent **Les Fondations**, une zone conçue par **Ada, The Architect**.

Le générateur principal de Node Zero fonctionne encore, mais plusieurs calculs de contrôle ont été effacés.

Ada vous confie votre première mission :

> « Avant de bâtir quoi que ce soit, il faut comprendre les matériaux de base. »

Votre objectif est de restaurer les calculs du générateur.

Cette mission vous fera découvrir les premières briques de JavaScript :

- variables ;
- constantes ;
- nombres ;
- chaînes de caractères ;
- booléens ;
- opérations arithmétiques.

# Instructions

Le générateur possède une capacité maximale et une quantité d'énergie actuellement disponible.

Vous devez compléter les fonctions du fichier `generateur.js`.

## 1. Calculer l'énergie manquante

Implémentez la fonction :

```javascript
missingEnergy(maxEnergy, currentEnergy)
```

Elle retourne la quantité d'énergie nécessaire pour remplir complètement le générateur.

```javascript
missingEnergy(1000, 650);
// => 350
```

## 2. Calculer le pourcentage d'énergie

Implémentez :

```javascript
energyPercentage(maxEnergy, currentEnergy)
```

La fonction retourne le pourcentage d'énergie disponible.

```javascript
energyPercentage(1000, 650);
// => 65
```

Aucun arrondi n'est nécessaire.

## 3. Calculer l'énergie après recharge

Implémentez :

```javascript
energyAfterRecharge(currentEnergy, recharge)
```

```javascript
energyAfterRecharge(650, 100);
// => 750
```

## 4. Vérifier si le générateur est prêt

Le générateur peut démarrer s'il possède **au moins 500 unités d'énergie**.

Implémentez :

```javascript
isGeneratorReady(currentEnergy)
```

La fonction retourne un booléen.

```javascript
isGeneratorReady(650);
// => true

isGeneratorReady(300);
// => false
```

## 5. Construire le message d'état

Implémentez :

```javascript
generatorStatus(name, currentEnergy)
```

La fonction retourne une chaîne de caractères au format suivant :

```javascript
generatorStatus("NZ-01", 650);
// => "NZ-01 possède 650 unités d'énergie."
```

---

### À rechercher si nécessaire

Vous ne connaissez pas encore la syntaxe JavaScript ? C'est normal.

Recherchez notamment :

- comment déclarer une variable avec `let` ;
- comment déclarer une constante avec `const` ;
- comment retourner une valeur avec `return` ;
- comment comparer deux nombres ;
- comment créer une chaîne contenant des variables.

<details>
<summary>Aides</summary>

Utilisez ces aides uniquement si vous êtes bloqué.

## Déclarer une constante

Recherchez :

```text
JavaScript const
```

## Déclarer une variable modifiable

Recherchez :

```text
JavaScript let
```

## Retourner une valeur

Une fonction peut retourner un résultat avec :

```javascript
return ...;
```

## Comparer deux valeurs numériques

Les opérateurs de comparaison comprennent notamment :

```javascript
>
>=
<
<=
```

## Créer une chaîne avec des variables

Recherchez :

```text
JavaScript template literals
```

</details>
