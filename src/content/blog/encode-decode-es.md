---
title: 'Codifica-Decodifica'
slug: codifica-decofica
translationKey: encode-decode
description: 'Qué son codificar y decodificar, los formatos que usas a diario (UTF-8, Base64, codificación de URL) y cómo convertir entre ellos.'
publishDate: 2024-10-29
updatedDate: 2026-10-02
tags: ['Informática', 'Software']
heroImage: { src: './thumbnails/encode-decode.jpg', color: '#4891B2' }
language: es
---

## Qué significa codificar

**Codificar** es convertir información a un formato que se pueda guardar o transmitir, y **decodificar** es deshacer ese paso. La idea está en todas partes: el código Morse codifica letras, un código de barras codifica un número e incluso el ADN codifica proteínas en grupos de tres letras que las células decodifican. En informática todo acaba siendo bytes, y una codificación es simplemente el acuerdo sobre qué significan esos bytes.

## Codificar, cifrar y calcular un hash no es lo mismo

| Tipo | Para qué sirve | ¿Reversible? | ¿Necesita clave? | Ejemplos |
| --- | --- | --- | --- | --- |
| **Codificación** | Representar datos en un formato | Sí | No | UTF-8, Base64, codificación de URL |
| **Cifrado** | Mantener los datos en secreto | Sí, con la clave | Sí | AES, GPG (mira [Encripta fácil con un Gestor de Contraseñas](/es/post/encripta-facil)) |
| **Hash** | Huella de los datos, comprobar integridad | No | No | SHA-256 |

El error más común es tratar una codificación como si protegiera algo: **cualquiera puede decodificar Base64**, así que no oculta nada.

## Formatos con los que te cruzas a diario

- **UTF-8** es cómo el texto se convierte en bytes. Una letra ocupa de uno a cuatro bytes: `A` es `41`, `é` es `C3 A9`, `€` es `E2 82 AC` y `😀` es `F0 9F 98 80`. Si lees esos bytes con otra codificación aparece el típico texto roto: `café` se ve como `cafÃ©`.
- **Base64** lleva datos binarios dentro de texto plano (adjuntos de correo, URLs `data:`, JSON, tokens). Cada 3 bytes pasan a 4 caracteres imprimibles, así que el resultado pesa un tercio más. `Hello` se convierte en `SGVsbG8=`.
- **Codificación de URL (porcentaje)** sustituye los caracteres no seguros por `%` y el byte en hexadecimal: `café & té` pasa a `caf%C3%A9%20%26%20t%C3%A9`.
- **Hexadecimal y binario** son otras formas de escribir bytes: `Hi` es `48 69` en hexadecimal y `01001000 01101001` en binario.

## Pruébalo tú mismo

En una terminal de Linux o macOS:

```bash
echo -n "Hello" | base64        # SGVsbG8=
echo "SGVsbG8=" | base64 -d     # Hello
```

En PowerShell:

```powershell
[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("Hello"))
# SGVsbG8=
[Text.Encoding]::UTF8.GetString([Convert]::FromBase64String("SGVsbG8="))
# Hello
```

En Python:

```python
import base64, urllib.parse

base64.b64encode("café".encode("utf-8")).decode()   # 'Y2Fmw6k='
urllib.parse.quote("café & té")                      # 'caf%C3%A9%20%26%20t%C3%A9'
```

Para experimentar sin escribir código, [CyberChef](https://gchq.github.io/CyberChef/) funciona en el navegador y encadena muchas codificaciones y decodificaciones.

## Errores habituales

- **Usar Base64 como si fuera cifrado.** Cualquiera puede revertirlo; si los datos son secretos, usa cifrado de verdad.
- **Codificar dos veces.** Un `%20` que se vuelve a codificar pasa a `%2520`.
- **No indicar la codificación.** Guarda los archivos en UTF-8, declara `<meta charset="utf-8">` en las páginas web y, en Python, abre los ficheros de texto con `encoding="utf-8"` en vez de depender del valor por defecto del sistema (en Windows suele ser una página de códigos antigua).

## En resumen

Codificar es solo un acuerdo sobre el formato: hace que los datos sean portables, no secretos. Saber qué formato tienes delante (UTF-8, Base64, porcentaje, hexadecimal) es casi todo el trabajo cuando algo se ve roto.
