# Les Fondations

## Relevés des pluviomètres

L'anémomètre fonctionne de nouveau.

Ada vous confie maintenant les pluviomètres disposés autour de l'île. Ils mesurent la quantité de pluie tombée, en millimètres (mm).

Problème : les anciens pluviomètres transmettent leurs relevés sous forme de texte, les nouveaux sous forme de nombres, et certains envoient même des messages d'erreur.

Ada vous met en garde :

> « Un relevé qui ressemble à un nombre n'en est pas forcément un. »

Votre mission est de fiabiliser le traitement des relevés.

Vous allez notamment utiliser :

- la conversion de type ;
- l'opérateur `+` avec des nombres et des chaînes ;
- le modulo `%` ;
- la comparaison stricte `===` ;
- la valeur spéciale `NaN`.

# Instructions

Complétez les fonctions du fichier `pluviometres.js`.

## 1. Lire un relevé

Implémentez :

```javascript
readRainfall(value)
```

La fonction convertit le relevé reçu en nombre.

```javascript
readRainfall("12.5");
// => 12.5
```

## 2. Additionner deux relevés

Chaque pluviomètre envoie un relevé le matin et un relevé le soir.

Implémentez :

```javascript
totalRainfall(morning, evening)
```

Les relevés peuvent être des nombres ou des chaînes numériques.

```javascript
totalRainfall("12", "8");
// => 20
```

Testez dans la console `"12" + "8"` pour comprendre pourquoi une conversion est nécessaire.

## 3. Vérifier l'heure d'un relevé

Les relevés automatiques ont lieu **toutes les 3 heures** : à 0 h, 3 h, 6 h, 9 h, etc.

Implémentez :

```javascript
isScheduledHour(hour)
```

```javascript
isScheduledHour(9);
// => true

isScheduledHour(10);
// => false
```

## 4. Détecter un relevé défectueux

Un pluviomètre en panne envoie un message au lieu d'un nombre, par exemple `"ERR"`.

Implémentez :

```javascript
isFaultyReading(value)
```

La fonction retourne `true` si la conversion de `value` en nombre produit `NaN`.

```javascript
isFaultyReading("ERR");
// => true

isFaultyReading("12.5");
// => false
```

## 5. Confirmer un relevé

Un gardien vérifie chaque relevé automatique en lisant lui-même le pluviomètre.

Le relevé est confirmé si les deux valeurs représentent **le même nombre**.

Implémentez :

```javascript
isConfirmedReading(manual, automatic)
```

La comparaison doit être stricte, mais les deux valeurs doivent d'abord être converties en nombres.

```javascript
isConfirmedReading("12", 12);
// => true

isConfirmedReading("12.0", "12");
// => true

isConfirmedReading("12", 13);
// => false
```

---

### À rechercher si nécessaire

- `JavaScript Number conversion`
- `JavaScript string concatenation`
- `JavaScript modulo`
- `JavaScript Number.isNaN`
- `JavaScript strict equality`

<details>
<summary>Aides</summary>

## `+` avec des chaînes

Lorsqu'un des deux opérandes est une chaîne, `+` colle les deux valeurs au lieu de les additionner.

```javascript
"12" + "8"
// => "128"
```

Convertissez chaque valeur avec `Number(...)` avant de les additionner.

## Modulo

Une heure est un multiple de 3 si le reste de sa division par 3 vaut `0`.

## Tester `NaN`

Comparer une valeur avec `NaN` ne fonctionne jamais :

```javascript
NaN === NaN
// => false
```

Utilisez plutôt `Number.isNaN(...)`.

## Comparer après conversion

`"12.0" === "12"` vaut `false` : ce sont deux chaînes différentes.

En revanche, une fois converties, les deux valeurs donnent le même nombre.

</details>
