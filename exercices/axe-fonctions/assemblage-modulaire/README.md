# La Forge

## L'assemblage modulaire

Les premières formules fonctionnent, mais tout le code de La Forge est encore mélangé dans un seul atelier.

Lambda veut maintenant séparer les responsabilités.

> « Une formule utile doit pouvoir voyager. Enferme chaque savoir dans le bon module, puis importe-le là où il est nécessaire. »

Cette mission introduit les **modules JavaScript**.

Vous allez utiliser :

- `export` ;
- `import` ;
- fonctions ;
- paramètres par défaut ;
- `return` ;
- réutilisation entre plusieurs fichiers.

# Organisation

L'exercice contient trois fichiers JavaScript :

```text
energie.js
messages.js
atelier.js
```

Vous devez compléter les fonctions et les imports demandés.

# Instructions

## 1. Module énergie

Dans `energie.js`, implémentez et exportez :

```javascript
calculateEnergy(base, bonus = 0)
```

La fonction retourne `base + bonus`.

```javascript
calculateEnergy(100)
// => 100

calculateEnergy(100, 25)
// => 125
```

Puis implémentez et exportez :

```javascript
multiplyEnergy(energy, factor = 2)
```

```javascript
multiplyEnergy(40)
// => 80
```

## 2. Module messages

Dans `messages.js`, implémentez et exportez :

```javascript
formatResult(name, value)
```

```javascript
formatResult('Fusion', 125)
// => "Fusion : 125"
```

## 3. Importer dans l'atelier

Dans `atelier.js`, importez :

```javascript
calculateEnergy
multiplyEnergy
```

depuis `energie.js`, puis :

```javascript
formatResult
```

depuis `messages.js`.

## 4. Créer une synthèse

Implémentez et exportez dans `atelier.js` :

```javascript
createSynthesis(name, base, bonus = 0)
```

La fonction doit :

1. calculer l'énergie avec `calculateEnergy(base, bonus)` ;
2. formater le résultat avec `formatResult(name, energy)` ;
3. retourner le message.

```javascript
createSynthesis('Fusion', 100, 25)
// => "Fusion : 125"
```

## 5. Créer une synthèse amplifiée

Implémentez :

```javascript
createBoostedSynthesis(name, base, factor = 2)
```

La fonction doit :

1. amplifier `base` avec `multiplyEnergy(base, factor)` ;
2. formater le résultat avec `formatResult(...)` ;
3. retourner le message.

```javascript
createBoostedSynthesis('Pulse', 40)
// => "Pulse : 80"
```

## 6. Comprendre le découpage

À la fin de l'exercice, soyez capable d'expliquer :

- pourquoi `calculateEnergy` se trouve dans `energie.js` ;
- pourquoi `formatResult` se trouve dans `messages.js` ;
- pourquoi `atelier.js` doit importer ces fonctions ;
- la différence entre `export` et `import`.

---

### À rechercher si nécessaire

- `JavaScript modules export import`
- `JavaScript named export`
- `JavaScript import relative path`
- `JavaScript default parameters`

<details>
<summary>Aides</summary>

## Exporter

Vous avez déjà rencontré cette syntaxe dans les exercices précédents :

```javascript
export function example() {
  // ...
}
```

## Importer

Pour importer une fonction exportée par un autre fichier :

```javascript
import { example } from './fichier.js'
```

Le chemin commence ici par `./` car le fichier se trouve dans le même dossier.

## Plusieurs imports

Vous pouvez importer plusieurs fonctions d'un même fichier :

```javascript
import { first, second } from './fichier.js'
```

</details>
