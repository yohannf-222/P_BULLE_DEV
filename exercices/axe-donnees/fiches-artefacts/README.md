# Les Archives

## Classer les fiches d’artefacts

L'inventaire fonctionne à nouveau.

Lin souhaite maintenant conserver plusieurs informations pour chaque artefact.

> « Une donnée isolée est fragile. Une structure donne du sens à l'information. »

Vous allez utiliser :

- les objets littéraux ;
- la déstructuration ;
- le spread `...` ;
- JSON.

# Instructions

Complétez les fonctions du fichier `artefacts.js`.

## 1. Créer une fiche d'artefact

Implémentez :

```javascript
createArtifact(id, name, power)
```

La fonction retourne un objet contenant exactement :

```javascript
{
  id: ...,
  name: ...,
  power: ...
}
```

## 2. Construire un libellé avec la déstructuration

Implémentez :

```javascript
artifactLabel(artifact)
```

Utilisez la déstructuration pour récupérer `name` et `power`.

```javascript
artifactLabel({ id: 1, name: "Orbe", power: 75 })
// => "Orbe (75)"
```

## 3. Augmenter la puissance sans modifier l'original

Implémentez :

```javascript
upgradeArtifact(artifact, bonus)
```

Utilisez le spread `...` pour créer un **nouvel objet**.

```javascript
upgradeArtifact({ id: 1, name: "Orbe", power: 75 }, 10)
// => { id: 1, name: "Orbe", power: 85 }
```

L'objet original ne doit pas être modifié.

## 4. Archiver une fiche

Implémentez :

```javascript
archiveArtifact(artifact)
```

Retournez un nouvel objet contenant toutes les propriétés existantes et :

```javascript
archived: true
```

## 5. Convertir une fiche en JSON

Implémentez :

```javascript
toJson(artifact)
```

Utilisez `JSON.stringify()`.

## 6. Recréer une fiche depuis JSON

Implémentez :

```javascript
fromJson(text)
```

Utilisez `JSON.parse()`.

---

### À rechercher si nécessaire

- `JavaScript object literal`
- `JavaScript object destructuring`
- `JavaScript spread object`
- `JSON.stringify`
- `JSON.parse`

<details>
<summary>Aides</summary>

## Déstructuration

```javascript
const { property1, property2 } = object
```

## Spread

```javascript
const copy = {
  ...object,
  newProperty: value
}
```

## JSON

```javascript
JSON.stringify(...)
JSON.parse(...)
```

</details>
