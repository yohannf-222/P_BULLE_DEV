# La Forge

## Les fragments d'énergie

Le catalyseur fonctionne, mais Lambda reçoit maintenant un nombre variable de fragments d'énergie.

Selon les expériences, il peut en recevoir deux, trois, cinq… parfois beaucoup plus.

> « Une formule rigide casse dès que la matière change. Apprends à accepter ce qui arrive. »

Cette mission est centrée sur les **paramètres rest** et la réutilisation de fonctions.

Vous allez utiliser :

- paramètres rest `...` ;
- `return` ;
- variables locales ;
- appels de fonctions.

# Instructions

Complétez les fonctions du fichier `fragments.js`.

## 1. Additionner des fragments

Implémentez :

```javascript
sumFragments(...fragments)
```

La fonction accepte un nombre variable de valeurs et retourne leur somme.

```javascript
sumFragments(10, 20)
// => 30

sumFragments(5, 10, 15, 20)
// => 50
```

Utilisez une boucle `for...of` pour parcourir `fragments`.

## 2. Compter les fragments

Implémentez :

```javascript
countFragments(...fragments)
```

```javascript
countFragments(10, 20, 30)
// => 3
```

## 3. Calculer une moyenne

Implémentez :

```javascript
averageFragments(...fragments)
```

La fonction doit réutiliser `sumFragments(...)`.

Vous pouvez utiliser `fragments.length` pour connaître le nombre de valeurs reçues.

```javascript
averageFragments(10, 20, 30)
// => 20
```

## 4. Ajouter une charge de base

Implémentez :

```javascript
totalWithBase(base, ...fragments)
```

Le premier paramètre est obligatoire. Tous les suivants sont regroupés dans `fragments`.

```javascript
totalWithBase(100, 10, 20, 30)
// => 160
```

Réutilisez `sumFragments(...)`.

## 5. Créer une formule lisible

Implémentez :

```javascript
formulaLabel(name, ...values)
```

La fonction retourne une chaîne au format :

```text
Nom : N valeurs
```

Exemple :

```javascript
formulaLabel('Fusion', 10, 20, 30)
// => "Fusion : 3 valeurs"
```

## 6. Vérifier la portée

Implémentez :

```javascript
prepareMixture(name, ...values)
```

Dans la fonction :

1. créez une variable locale `total` avec `sumFragments(...values)` ;
2. retournez :

```text
Nom = total
```

Exemple :

```javascript
prepareMixture('Nova', 10, 20, 5)
// => "Nova = 35"
```

La variable `total` doit rester locale à la fonction.

---

### À rechercher si nécessaire

- `JavaScript rest parameters`
- `JavaScript spread function call`
- `JavaScript function scope`
- `JavaScript for of`

<details>
<summary>Aides</summary>

## Paramètre rest

Recherchez une syntaxe de la forme :

```javascript
function example(...values) {
  // values contient toutes les valeurs reçues
}
```

## Réutiliser un tableau de paramètres

Si une fonction reçoit `...values`, vous pouvez transmettre ces valeurs à une autre fonction avec :

```javascript
otherFunction(...values)
```

## Variable locale

Une variable créée dans une fonction ne doit pas être utilisée directement en dehors de celle-ci.

</details>
