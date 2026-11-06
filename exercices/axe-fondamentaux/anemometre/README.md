# Les Fondations

## Relancer l'anémomètre

Du haut des falaises nord, les Fondations surveillent tout ce qui se passe autour de l'île.

Ada vous conduit jusqu'à la station météo. Son anémomètre mesure toujours la vitesse du vent, mais les calculs qui exploitent ces mesures ont été effacés.

Ada vous explique :

> « Le vent annonce les tempêtes bien avant qu'elles n'atteignent Nexus. Encore faut-il savoir lire les chiffres. »

Votre mission est de restaurer les calculs de la station météo.

Vous allez notamment utiliser :

- des constantes ;
- des opérations arithmétiques ;
- la priorité des opérateurs ;
- des comparaisons ;
- des chaînes de caractères.

# Instructions

L'anémomètre mesure la vitesse du vent en **kilomètres par heure** (km/h).

Complétez les fonctions du fichier `anemometre.js`.

## 1. Convertir en mètres par seconde

Les marins de Nexus préfèrent les mètres par seconde (m/s).

Pour convertir une vitesse de km/h en m/s, il faut la **diviser par 3.6**.

Déclarez une constante pour cette valeur, puis implémentez :

```javascript
kmhToMs(speedKmh)
```

```javascript
kmhToMs(36);
// => 10
```

## 2. Calculer l'écart d'une rafale

Une rafale est un coup de vent plus fort que le vent moyen.

Implémentez :

```javascript
gustGap(gustKmh, averageKmh)
```

La fonction retourne de combien la rafale dépasse le vent moyen.

```javascript
gustGap(85, 60);
// => 25
```

## 3. Calculer la moyenne de trois mesures

L'anémomètre effectue trois mesures successives.

Implémentez :

```javascript
averageOfThree(speed1, speed2, speed3)
```

```javascript
averageOfThree(20, 30, 40);
// => 30
```

Attention à l'ordre dans lequel JavaScript effectue les opérations.

## 4. Déclencher l'alerte tempête

L'alerte tempête est déclenchée lorsque le vent atteint **au moins 75 km/h**.

Implémentez :

```javascript
isStormAlert(speedKmh)
```

```javascript
isStormAlert(80);
// => true

isStormAlert(40);
// => false
```

## 5. Construire le bulletin météo

Implémentez :

```javascript
windReport(station, speedKmh)
```

La fonction retourne une chaîne au format suivant :

```javascript
windReport("Falaise Nord", 36);
// => "Falaise Nord : vent de 36 km/h (10 m/s)."
```

Vous pouvez réutiliser la fonction `kmhToMs`.

---

### À rechercher si nécessaire

- `JavaScript const`
- `JavaScript operator precedence`
- `JavaScript comparison operators`
- `JavaScript template literals`

<details>
<summary>Aides</summary>

## Déclarer une constante

Une valeur qui ne change jamais peut être déclarée en dehors des fonctions :

```javascript
const MA_CONSTANTE = ...;
```

## Priorité des opérateurs

En JavaScript, comme en mathématiques, la division est effectuée avant l'addition.

Testez dans la console :

```javascript
20 + 30 + 40 / 3
```

puis :

```javascript
(20 + 30 + 40) / 3
```

## Réutiliser une fonction

Une fonction peut appeler une autre fonction du même fichier :

```javascript
const speedMs = kmhToMs(speedKmh);
```

</details>
