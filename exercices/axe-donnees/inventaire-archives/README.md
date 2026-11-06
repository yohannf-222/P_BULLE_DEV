# Les Archives

## Inventorier les artefacts

Vous arrivez à l'est de JS Nexus, dans **Les Archives**.

Lin, The Keeper, conserve les fragments de données découverts sur l'île.

> « Une donnée n'est utile que si l'on sait la retrouver, l'ajouter ou la retirer. »

Votre mission consiste à remettre en état l'inventaire des artefacts.

Vous allez utiliser :

- les tableaux ;
- `push()` ;
- `pop()` ;
- `splice()` ;
- `find()` ;
- quelques méthodes de `string`.

# Instructions

Complétez les fonctions du fichier `inventaire.js`.

## 1. Ajouter un artefact

Implémentez :

```javascript
addArtifact(inventory, artifact)
```

La fonction ajoute `artifact` à la fin du tableau avec `push()` puis retourne le tableau.

```javascript
addArtifact(["clé"], "cristal")
// => ["clé", "cristal"]
```

## 2. Retirer le dernier artefact

Implémentez :

```javascript
removeLastArtifact(inventory)
```

La fonction utilise `pop()` et retourne l'élément retiré.

```javascript
removeLastArtifact(["clé", "cristal"])
// => "cristal"
```

## 3. Remplacer un artefact

Implémentez :

```javascript
replaceArtifact(inventory, index, artifact)
```

Utilisez `splice()` pour remplacer exactement un élément à la position donnée.

La fonction retourne le tableau modifié.

```javascript
replaceArtifact(["clé", "pierre", "cristal"], 1, "orbe")
// => ["clé", "orbe", "cristal"]
```

## 4. Rechercher un artefact

Implémentez :

```javascript
findArtifact(inventory, name)
```

Utilisez `find()` pour retourner le premier élément strictement égal à `name`.

Si aucun élément n'est trouvé, JavaScript retourne naturellement `undefined`.

## 5. Normaliser un nom

Implémentez :

```javascript
normalizeArtifactName(name)
```

La fonction doit :

1. supprimer les espaces au début et à la fin ;
2. convertir le texte en minuscules.

```javascript
normalizeArtifactName("  CRISTAL  ")
// => "cristal"
```

## 6. Vérifier un code d'archive

Implémentez :

```javascript
isArchiveCode(code)
```

Retournez `true` si la chaîne commence par `"ARC-"`.

```javascript
isArchiveCode("ARC-42")
// => true
```

---

### À rechercher si nécessaire

- `JavaScript Array push`
- `JavaScript Array pop`
- `JavaScript Array splice`
- `JavaScript Array find`
- `JavaScript String trim`
- `JavaScript String toLowerCase`
- `JavaScript String startsWith`

<details>
<summary>Aides</summary>

## Ajouter et retirer

```javascript
array.push(value)
array.pop()
```

## Remplacer

Recherchez la syntaxe de :

```javascript
array.splice(...)
```

## Rechercher

`find()` attend une fonction de test :

```javascript
array.find((element) => ...)
```

## Chaînes

Méthodes utiles :

```javascript
trim()
toLowerCase()
startsWith()
```

</details>
