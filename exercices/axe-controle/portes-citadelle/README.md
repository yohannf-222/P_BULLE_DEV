# La Citadelle

## Garder les portes de la Citadelle

Vous arrivez au sud-ouest de JS Nexus.

La Citadelle contrôle les accès aux différentes zones de l'île. Son gardien, **Turing — The Warden**, vous confie les règles de sécurité.

> « Une machine doit savoir décider. Sinon, elle ne fait qu'exécuter aveuglément. »

Votre mission consiste à restaurer les décisions prises aux portes de la Citadelle.

Vous allez utiliser :

- `if` / `else` ;
- l'opérateur ternaire ;
- `switch`.

# Instructions

Complétez les fonctions du fichier `portes.js`.

## 1. Autoriser ou refuser l'accès

Implémentez :

```javascript
accessMessage(level)
```

Règles :

- si `level` est supérieur ou égal à `5`, retourner `"Accès autorisé"`;
- sinon retourner `"Accès refusé"`.

Vous devez utiliser `if` / `else`.

Exemples :

```javascript
accessMessage(7);
// => "Accès autorisé"

accessMessage(3);
// => "Accès refusé"
```

## 2. Indiquer l'état d'une porte

Implémentez :

```javascript
doorStatus(isOpen)
```

La fonction retourne :

- `"Ouverte"` si `isOpen` vaut `true`;
- `"Fermée"` sinon.

Cette fois, utilisez l'opérateur ternaire.

Exemples :

```javascript
doorStatus(true);
// => "Ouverte"

doorStatus(false);
// => "Fermée"
```

## 3. Choisir une zone

Chaque code correspond à une zone de Nexus :

- `"N"` → `"Les Fondations"`
- `"E"` → `"Les Archives"`
- `"SE"` → `"La Forge"`
- `"SO"` → `"La Citadelle"`
- `"O"` → `"La Faille"`

Implémentez :

```javascript
zoneName(code)
```

Utilisez `switch`.

Pour tout autre code, retournez :

```text
Zone inconnue
```

## 4. Évaluer un niveau d'alerte

Implémentez :

```javascript
alertLevel(energy)
```

Règles :

- moins de `20` → `"CRITIQUE"`
- de `20` à `49` → `"FAIBLE"`
- de `50` à `79` → `"STABLE"`
- `80` ou plus → `"OPTIMAL"`

Utilisez plusieurs conditions `if / else if / else`.

---

### À rechercher si nécessaire

- `JavaScript if else`
- `JavaScript ternary operator`
- `JavaScript switch`
- `JavaScript else if`

<details>
<summary>Aides</summary>

## `if / else`

La structure générale ressemble à :

```javascript
if (condition) {
  // ...
} else {
  // ...
}
```

## Ternaire

Recherchez :

```text
JavaScript ternary operator
```

Sa forme générale est :

```javascript
condition ? valeurSiVrai : valeurSiFaux
```

## `switch`

Un `switch` compare une valeur avec plusieurs possibilités.

N'oubliez pas de rechercher le rôle de :

```javascript
case
break
default
```

</details>
