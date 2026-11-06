# La Forge

## Le catalyseur

Vous arrivez dans **La Forge**, au sud-est de JS Nexus.

Lambda, The Alchemist, transforme l'énergie brute en formules réutilisables.

> « Une bonne formule reçoit ce dont elle a besoin, produit un résultat, puis disparaît sans laisser de désordre derrière elle. »

Votre première mission consiste à reconstruire plusieurs petites fonctions utilisées par le catalyseur.

Vous allez utiliser :

- déclaration de fonctions ;
- paramètres ;
- paramètres par défaut ;
- `return` ;
- portée locale des variables.

# Instructions

Complétez les fonctions du fichier `catalyseur.js`.

## 1. Doubler une charge

Implémentez :

```javascript
doubleCharge(charge)
```

La fonction retourne le double de la charge reçue.

```javascript
doubleCharge(12)
// => 24
```

## 2. Calculer une puissance

Implémentez :

```javascript
forgePower(base, multiplier)
```

La fonction retourne `base * multiplier`.

```javascript
forgePower(10, 3)
// => 30
```

## 3. Utiliser un paramètre par défaut

Implémentez :

```javascript
stabilizeEnergy(energy, factor = 2)
```

La fonction retourne `energy * factor`.

```javascript
stabilizeEnergy(10)
// => 20

stabilizeEnergy(10, 3)
// => 30
```

## 4. Construire un message

Implémentez :

```javascript
forgeMessage(element, prefix = "Forge")
```

```javascript
forgeMessage("Cristal")
// => "Forge : Cristal"

forgeMessage("Cristal", "Lambda")
// => "Lambda : Cristal"
```

## 5. Travailler avec une variable locale

Implémentez :

```javascript
calculateOutput(energy, loss)
```

Dans la fonction, créez une variable locale `remainingEnergy`.

```javascript
calculateOutput(100, 25)
// => 75
```

La variable `remainingEnergy` ne doit exister qu'à l'intérieur de la fonction.

## 6. Réutiliser une fonction

Implémentez :

```javascript
boostedOutput(energy, loss, factor = 2)
```

La fonction doit :

1. appeler `calculateOutput(energy, loss)` ;
2. transmettre le résultat à `stabilizeEnergy(...)` ;
3. retourner le résultat final.

```javascript
boostedOutput(100, 25)
// => 150
```

---

### À rechercher si nécessaire

- `JavaScript function declaration`
- `JavaScript function parameters`
- `JavaScript default parameters`
- `JavaScript return`
- `JavaScript variable scope function`

<details>
<summary>Aides</summary>

## Déclarer une fonction

```javascript
function nom(parametre) {
  // ...
}
```

Dans ce projet, les fonctions sont exportées afin que Jest puisse les tester :

```javascript
export function nom(parametre) {
  // ...
}
```

## Paramètre par défaut

Recherchez une syntaxe de la forme :

```javascript
function example(value = 10) {
  // ...
}
```

## Portée

Une variable déclarée **dans une fonction** n'est normalement accessible que dans cette fonction.

## Réutiliser une fonction

Vous pouvez appeler une fonction depuis une autre fonction :

```javascript
const result = firstFunction(value)
return secondFunction(result)
```

</details>
