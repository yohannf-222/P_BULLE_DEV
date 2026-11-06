# La Citadelle

## Programmer les patrouilles

Les portes fonctionnent à nouveau.

Turing vous emmène maintenant sur les remparts de la Citadelle.

Les drones de surveillance doivent répéter certaines actions selon des règles précises.

> « Décider ne suffit pas. Il faut parfois recommencer jusqu'à ce que le travail soit terminé. »

Vous allez utiliser :

- `for` ;
- `for...of` ;
- `while`.

# Instructions

Complétez les fonctions du fichier `patrouilles.js`.

## 1. Additionner les numéros de ronde

Implémentez :

```javascript
sumRounds(numberOfRounds)
```

La fonction additionne tous les numéros de ronde de `1` jusqu'à `numberOfRounds`.

Exemple :

```javascript
sumRounds(4);
```

calcule :

```text
1 + 2 + 3 + 4
```

et retourne :

```text
10
```

Vous devez utiliser une boucle `for`.

## 2. Compter les symboles d'un code

Implémentez :

```javascript
countSymbols(code)
```

La fonction parcourt la chaîne `code` avec `for...of` et compte le nombre de caractères.

Exemple :

```javascript
countSymbols("NEXUS");
// => 5
```

N'utilisez pas directement `.length` pour produire le résultat.

## 3. Compter les lettres X

Implémentez :

```javascript
countX(code)
```

Parcourez la chaîne avec `for...of`.

Exemple :

```javascript
countX("X-NEXUS-X");
// => 3
```

## 4. Calculer le nombre de tours avant épuisement

Un drone perd une quantité fixe d'énergie à chaque tour.

Implémentez :

```javascript
turnsBeforeEmpty(energy, consumption)
```

Utilisez une boucle `while`.

Exemple :

```javascript
turnsBeforeEmpty(100, 30);
// => 3
```

Explication :

- après le tour 1 : 70
- après le tour 2 : 40
- après le tour 3 : 10

Le drone ne peut pas effectuer un quatrième tour complet de 30 unités.

## 5. Trouver la première ronde dépassant une limite

Implémentez :

```javascript
firstRoundAbove(limit)
```

La fonction part de `1` et additionne successivement les numéros :

```text
1
1 + 2
1 + 2 + 3
...
```

Elle retourne le premier numéro de ronde pour lequel le total devient strictement supérieur à `limit`.

Exemple :

```javascript
firstRoundAbove(6);
// => 4
```

car :

```text
1 + 2 + 3 = 6
1 + 2 + 3 + 4 = 10
```

Utilisez `while`.

---

### À rechercher si nécessaire

- `JavaScript for loop`
- `JavaScript for of`
- `JavaScript while`

<details>
<summary>Aides</summary>

## Boucle `for`

Une boucle `for` est pratique lorsqu'on connaît le nombre de répétitions.

Recherchez :

```text
JavaScript for loop
```

## `for...of`

Cette boucle permet notamment de parcourir les caractères d'une chaîne :

```javascript
for (const character of text) {
  // ...
}
```

## `while`

Une boucle `while` continue tant qu'une condition est vraie.

Attention à toujours modifier une valeur dans la boucle afin qu'elle puisse s'arrêter.

</details>
