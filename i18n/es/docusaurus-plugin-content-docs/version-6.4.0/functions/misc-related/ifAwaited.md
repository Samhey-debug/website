---
title: '$ifAwaited'
description: '$ifAwaited will check a condition and executed an awaited command depending on the condition being true or false.'
id: ifAwaited
---

`$ifAwaited` will check a condition and executed an awaited command depending on the condition being true or false.

## Modo de uso

```php
$ifAwaited[condition;true;false?]
```

## Parámetros

| Campo     | Tipo   | Descripción                             | Requerido |
| --------- | ------ | --------------------------------------- |:---------:|
| condition | string | Condition to check                      |    sí     |
| sí        | cadena | What to do when the condition is true.  |    sí     |
| false?    | cadena | What to do when the condition is false. |   falso   |

#### Valid Mathematical Operators

| Operator | Mathematical Expression  |
| -------- | ------------------------ |
| ==       | es igual a               |
| !=       | not equal to             |
| <=       | less than or equal to    |
| \>=     | greater than or equal to |
| \>      | greater than             |
| <        | less than                |
| \       | \|     | logical OR     |
| &&       | logical conjunction      |

## Ejemplo(s)

This will execute the `awaitedCommand` awaited command as the statement is true:

```javascript
bot.command({
    name: "ifAwaited",
    code: `
    $ifAwaited[1==1;{execute:awaitedCommand}]
    `
});

bot.awaitedCommand({
    name: "awaitedCommand",
    code: `
    $sendMessage[That's true!;false]
    `
});
```