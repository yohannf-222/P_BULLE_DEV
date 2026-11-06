# Les Fondations

## L'observatoire côtier

Le vent et la pluie sont sous contrôle.

Il reste une dernière installation à remettre en service : l'observatoire côtier. Deux compteurs y recensent les oiseaux migrateurs qui survolent l'île, et une bouée mesure la hauteur des vagues.

Mais les données arrivent incomplètes : certains compteurs n'ont encore rien transmis, d'autres sont hors ligne, et la bouée envoie parfois des valeurs étranges.

Ada vous rappelle :

> « Zéro oiseau, ce n'est pas la même chose qu'aucune donnée. »

Cette mission vous fera manipuler :

- `undefined` ;
- `null` ;
- `NaN` ;
- `typeof` ;
- les opérateurs logiques ;
- les valeurs par défaut.

Vous réutiliserez également les notions des missions précédentes.

# Instructions

Complétez les fonctions du fichier `observatoire.js`.

## 1. Identifier le type d'une donnée

Implémentez :

```javascript
dataType(value)
```

La fonction retourne le résultat de l'opérateur `typeof`.

```javascript
dataType(128);
// => "number"

dataType("2.4");
// => "string"
```

## 2. Détecter un comptage non transmis

Un compteur qui n'a encore rien envoyé fournit la valeur `undefined`.

Implémentez :

```javascript
isNotTransmitted(count)
```

```javascript
isNotTransmitted(undefined);
// => true

isNotTransmitted(0);
// => false
```

## 3. Détecter un compteur hors ligne

Un compteur hors ligne envoie volontairement la valeur `null`.

Implémentez :

```javascript
isOffline(count)
```

```javascript
isOffline(null);
// => true

isOffline(undefined);
// => false
```

## 4. Vérifier qu'un comptage est disponible

Un comptage est disponible lorsqu'il n'est ni `undefined`, ni `null`.

Implémentez :

```javascript
hasBirdCount(count)
```

```javascript
hasBirdCount(0);
// => true

hasBirdCount(null);
// => false
```

Attention : `0` est un comptage valide. Il signifie qu'aucun oiseau n'est passé.

## 5. Additionner les deux compteurs

Implémentez :

```javascript
totalBirds(northCount, southCount)
```

Un compteur sans donnée (`undefined` ou `null`) compte pour `0`.

```javascript
totalBirds(120, 45);
// => 165

totalBirds(120, null);
// => 120

totalBirds(undefined, 30);
// => 30
```

## 6. Valider la hauteur des vagues

La bouée doit transmettre la hauteur des vagues sous forme de **nombre**.

Une hauteur est valide si :

- son type est `"number"` ;
- et ce n'est pas `NaN`.

Implémentez :

```javascript
isValidWaveHeight(height)
```

```javascript
isValidWaveHeight(2.4);
// => true

isValidWaveHeight("2.4");
// => false

isValidWaveHeight(NaN);
// => false
```

## Observation importante

Testez dans la console :

```javascript
typeof NaN
```

Le résultat peut vous surprendre : c'est pour cette raison que la dernière fonction a besoin de deux vérifications.

---

### À rechercher si nécessaire

- `JavaScript typeof`
- `JavaScript undefined vs null`
- `JavaScript nullish coalescing operator`
- `JavaScript logical AND`
- `JavaScript Number.isNaN`

<details>
<summary>Aides</summary>

## Vérifier qu'une valeur est disponible

Une valeur est indisponible si elle est `undefined` ou `null`.

Vous pouvez effectuer deux comparaisons strictes et les combiner avec `&&`.

## Valeur par défaut

L'opérateur `??` retourne la valeur de droite uniquement lorsque la valeur de gauche vaut `null` ou `undefined` :

```javascript
null ?? 0
// => 0

7 ?? 0
// => 7
```

## Combiner deux conditions

```javascript
condition1 && condition2
```

vaut `true` uniquement si les deux conditions sont vraies.

</details>
