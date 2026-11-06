# La Citadelle

## Poser le drone

La tour de contrôle a validé l'espace aérien. Turing rappelle un drone de surveillance pour l'inspecter.

Le drone se trouve à **10 m** d'altitude, soit **1000 cm**. Il règle sa vitesse verticale à **-10 cm/s** pour descendre.

Mais au-dessus des remparts souffle un **vent ascensionnel** qui pousse le drone vers le haut. Sa force change à chaque seconde : entre **0 et 3 cm/s**.

> « On ne sait pas combien de temps cela prendra. On sait seulement quand ce sera terminé. »

Impossible de savoir à l'avance combien de secondes durera la descente : c'est le cas typique d'une boucle `while`.

Vous allez utiliser :

- `while` avec une ou plusieurs conditions ;
- `Math.random()` ;
- des compteurs.

# Instructions

Complétez les fonctions du fichier `atterrissage.js`.

Toutes les altitudes sont exprimées en **centimètres** et toutes les durées en **secondes**.

Le fichier définit déjà :

```javascript
export const DESCENT_SPEED = -10;
export const MAX_WIND = 3;
```

## 1. Calculer la vitesse verticale réelle

Implémentez :

```javascript
verticalSpeed(wind)
```

La vitesse réelle est la vitesse de descente à laquelle s'ajoute le vent ascensionnel.

```javascript
verticalSpeed(0);
// => -10

verticalSpeed(3);
// => -7
```

## 2. Calculer l'altitude après une seconde

Implémentez :

```javascript
nextAltitude(altitude, wind)
```

La fonction retourne l'altitude du drone une seconde plus tard.

Le drone ne peut pas passer sous le sol : si le résultat est négatif, retournez `0`.

```javascript
nextAltitude(1000, 0);
// => 990

nextAltitude(5, 0);
// => 0
```

## 3. Mesurer le vent

Implémentez :

```javascript
randomWind()
```

La fonction retourne une force de vent aléatoire, supérieure ou égale à `0` et strictement inférieure à `MAX_WIND`.

Recherchez `Math.random()`.

## 4. Poser le drone

Implémentez :

```javascript
landingDuration(startAltitude)
```

La fonction simule la descente seconde par seconde et retourne le nombre de secondes nécessaires pour que le drone touche le sol.

À chaque seconde :

1. mesurez le vent en appelant `randomWind()` ;
2. calculez la nouvelle altitude avec `nextAltitude` ;
3. comptez une seconde de plus.

Utilisez une boucle `while`.

```javascript
landingDuration(1000);
// => entre 100 et 143, selon le vent
```

> **Comment tester un résultat aléatoire ?**
>
> Pendant les tests, `Math.random()` est remplacé par une version prévisible : par exemple, un vent toujours nul.
>
> C'est pourquoi vous devez **toujours** obtenir le vent en appelant `randomWind()`, une fois par seconde de vol.

## 5. Atterrir avant la panne

Implémentez :

```javascript
hasGracefullyLanded(startAltitude, battery)
```

La batterie du drone lui permet de voler encore `battery` secondes.

Simulez la descente comme précédemment, mais arrêtez la boucle dès que :

- le drone est posé, **ou**
- la batterie est vide.

La fonction retourne `true` si le drone s'est posé, sinon `false`.

Le vent étant aléatoire, impossible de savoir à l'avance comment se terminera la descente : deux appels avec les mêmes paramètres peuvent donner des résultats différents. Il faut tenter l'atterrissage pour le savoir.

Utilisez **une seule boucle `while`** dont la condition combine les deux règles.

```javascript
hasGracefullyLanded(1000, 150);
// => true : même avec le vent maximal, 143 secondes suffisent

hasGracefullyLanded(1000, 50);
// => false : même sans vent, il faut 100 secondes
```

---

### À rechercher si nécessaire

- `JavaScript while loop`
- `JavaScript Math.random`
- `JavaScript logical AND`

<details>
<summary>Aides</summary>

## Vitesse et altitude

Pendant une seconde, l'altitude change d'une quantité égale à la vitesse verticale :

```text
nouvelle altitude = altitude + vitesse verticale
```

La vitesse étant négative, l'altitude diminue.

## Un nombre aléatoire dans un intervalle

`Math.random()` retourne un nombre entre `0` (inclus) et `1` (exclu).

Pour obtenir un nombre entre `0` et `MAX_WIND`, multipliez-le.

## Structure de la simulation

```javascript
let altitude = startAltitude;
let seconds = 0;

while (/* le drone est encore en l'air */) {
  // une seconde de vol
}
```

## Deux conditions pour une boucle

La boucle de `hasGracefullyLanded` continue tant que le drone est en l'air **et** que la batterie n'est pas vide.

À la sortie de la boucle, l'altitude vous indique laquelle des deux conditions l'a arrêtée.

</details>
