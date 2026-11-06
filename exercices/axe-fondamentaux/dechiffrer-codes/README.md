# Les Fondations

## Déchiffrer les codes d'accès

Le générateur est maintenant opérationnel.

Ada vous conduit devant l'ancienne console d'accès aux Fondations.

Un problème subsiste : certaines consoles transmettent les codes sous forme de texte, alors que d'autres utilisent des nombres.

Ada vous prévient :

> « Sur Nexus, deux valeurs qui se ressemblent ne sont pas toujours identiques. »

Votre mission est de restaurer le système de validation des codes.

Vous allez notamment découvrir :

- la conversion de type ;
- le modulo `%` ;
- les comparaisons ;
- la différence entre `==` et `===` ;
- la valeur spéciale `NaN`.

# Instructions

Complétez les fonctions du fichier `codes-acces.js`.

## 1. Convertir un code en nombre

Les anciennes consoles envoient parfois un code sous forme de chaîne :

```javascript
"42"
```

Implémentez :

```javascript
convertCode(value)
```

La fonction doit convertir la valeur reçue en nombre.

```javascript
convertCode("42");
// => 42
```

## 2. Tester l'égalité souple

Implémentez :

```javascript
sameCodeLoose(value1, value2)
```

Cette fonction doit utiliser l'opérateur `==`.

```javascript
sameCodeLoose("42", 42);
// => true
```

## 3. Tester l'égalité stricte

Implémentez :

```javascript
sameCodeStrict(value1, value2)
```

Cette fonction doit utiliser l'opérateur `===`.

```javascript
sameCodeStrict("42", 42);
// => false
```

L'objectif est d'observer la différence entre les deux opérateurs.

Dans votre propre code, on privilégiera généralement `===`.

## 4. Vérifier si un code est pair

Les codes pairs donnent accès au réseau principal.

Implémentez :

```javascript
isEvenCode(code)
```

```javascript
isEvenCode(42);
// => true

isEvenCode(17);
// => false
```

Recherchez l'opérateur modulo `%`.

## 5. Détecter un code invalide

La conversion suivante ne produit pas un nombre valide :

```javascript
Number("NEXUS");
```

JavaScript retourne alors la valeur spéciale `NaN`.

Implémentez :

```javascript
isInvalidCode(value)
```

La fonction retourne `true` si la conversion de `value` en nombre produit `NaN`.

```javascript
isInvalidCode("NEXUS");
// => true

isInvalidCode("42");
// => false
```

---

### À rechercher si nécessaire

- `JavaScript Number conversion`
- `JavaScript == vs ===`
- `JavaScript modulo`
- `JavaScript NaN`
- `JavaScript Number.isNaN`

<details>
<summary>Aides</summary>

## Conversion en nombre

Recherchez la fonction globale :

```javascript
Number(...)
```

## Modulo

L'opérateur `%` retourne le reste d'une division.

Par exemple :

```javascript
10 % 2
```

vaut `0`.

## `==` et `===`

Testez dans la console :

```javascript
"42" == 42
```

puis :

```javascript
"42" === 42
```

Observez la différence.

## Tester `NaN`

Attention : comparer directement une valeur avec `NaN` n'est pas la bonne méthode.

Recherchez :

```text
Number.isNaN JavaScript
```

</details>
