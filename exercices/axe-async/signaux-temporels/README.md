# La Faille

## Synchroniser les signaux

À l'ouest de JS Nexus se trouve **La Faille**, une zone où le temps ne s'écoule pas toujours dans l'ordre attendu.

Nyx, The Chronomancer, surveille les signaux qui traversent cette zone.

> « Une instruction peut être lancée maintenant et se terminer plus tard. »

Votre mission consiste à programmer des actions différées.

Vous allez utiliser :

- `setTimeout()` ;
- les callbacks.

# Instructions

Complétez les fonctions du fichier `signaux.js`.

## 1. Exécuter une action plus tard

Implémentez :

```javascript
runLater(callback, delay)
```

La fonction doit appeler `callback` après `delay` millisecondes à l'aide de `setTimeout()`.

Elle ne retourne pas de résultat particulier.

## 2. Transmettre un message après un délai

Implémentez :

```javascript
sendSignal(message, delay, callback)
```

Après le délai, la fonction doit appeler :

```javascript
callback(message)
```

Exemple d'utilisation :

```javascript
sendSignal("NEXUS", 1000, (message) => {
  console.log(message)
})
```

Le callback recevra `"NEXUS"` après environ une seconde.

## 3. Transformer une valeur avant de rappeler

Implémentez :

```javascript
doubleLater(value, delay, callback)
```

Après le délai, appelez le callback avec le double de `value`.

```javascript
doubleLater(5, 500, callback)
// callback reçoit 10
```

## 4. Construire un signal différé

Implémentez :

```javascript
delayedStatus(name, delay, callback)
```

Après le délai, le callback doit recevoir :

```text
<name> prêt
```

Exemple :

```javascript
delayedStatus("Portail", 200, callback)
// callback reçoit "Portail prêt"
```

---

### À rechercher si nécessaire

- `JavaScript setTimeout`
- `JavaScript callback`
- fonctions fléchées dans un `setTimeout`

<details>
<summary>Aides</summary>

`setTimeout` reçoit une fonction et un délai :

```javascript
setTimeout(() => {
  // code exécuté plus tard
}, delay)
```

Un callback est simplement une fonction reçue en paramètre et appelée lorsque le traitement est terminé.

</details>
