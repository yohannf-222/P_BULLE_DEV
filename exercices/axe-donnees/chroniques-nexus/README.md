# Les Archives

## Archiver les chroniques du Nexus

Lin conserve également l'historique des découvertes réalisées sur l'île.

Chaque découverte possède un nom, une date et un niveau d'importance.

> « Les données ne sont pas figées. Elles ont une histoire. »

Vous allez utiliser :

- `Date` ;
- les classes ;
- les instances ;
- des tableaux d'objets.

# Instructions

Complétez le fichier `chroniques.js`.

## 1. Créer la classe `Discovery`

Créez une classe :

```javascript
Discovery
```

Son constructeur reçoit :

```javascript
name
date
importance
```

et crée trois propriétés du même nom.

```javascript
const discovery = new Discovery(
  "Faille temporelle",
  new Date("2026-10-01"),
  5
)
```

## 2. Ajouter une méthode `isImportant()`

La méthode retourne `true` si `importance` est supérieure ou égale à `4`.

## 3. Ajouter une méthode `year()`

La méthode retourne l'année de la date avec `getFullYear()`.

## 4. Calculer un intervalle entre deux dates

Implémentez :

```javascript
daysBetween(date1, date2)
```

La fonction retourne le nombre de jours entre les deux dates.

Vous pouvez utiliser :

```text
1 jour = 1000 × 60 × 60 × 24 millisecondes
```

Les tests utilisent des dates simples pour éviter les problèmes d'heures.

## 5. Rechercher une découverte

Implémentez :

```javascript
findDiscovery(discoveries, name)
```

Le tableau contient des instances de `Discovery`.

Utilisez `find()`.

## 6. Créer un résumé

Implémentez :

```javascript
discoverySummary(discovery)
```

Retournez :

```text
<nom> - <année>
```

```javascript
discoverySummary(
  new Discovery("Orbe ancien", new Date("2025-04-10"), 3)
)
// => "Orbe ancien - 2025"
```

---

### À rechercher si nécessaire

- `JavaScript class`
- `JavaScript constructor`
- `JavaScript class method`
- `JavaScript Date`
- `Date getFullYear`
- `Array find`

<details>
<summary>Aides</summary>

## Classe

```javascript
class Example {
  constructor(value) {
    this.value = value
  }

  method() {
    // ...
  }
}
```

## Date

```javascript
new Date("2026-10-01")
```

## Différence entre deux dates

Soustraire deux objets `Date` donne une différence en millisecondes.

## Recherche

```javascript
array.find((item) => item.property === value)
```

</details>
