---
title: Configurando un gestor de contraseñas
slug: setup-password-manager-es
translationKey: setup-password-manager
publishDate: '2023-06-11'
updatedDate: '2025-06-03'
description: 'Configuración de un gestor de contraseñas de forma segura y privada'
tags:
  - 'Informática'
  - 'Productividad'
heroImage: { src: './thumbnails/password-manager.jpg', color: '#4891B2' }
language: es
---

## Configuración de un gestor de contraseñas

Este artículo explica cómo configurar un gestor de contraseñas de forma segura y privada. No recomiendo utilizar aplicaciones web que se ejecutan en un servidor, ya que alguien podría interceptar y descifrar tus datos. Estos métodos utilizan aplicaciones locales con un archivo cifrado, por lo que no se comparten datos a través de Internet. Sin embargo, si insistes en utilizar aplicaciones web en línea, te recomiendo que utilices [Bitwarden](https://bitwarden.com/).

Hay dos opciones principales para cifrar y organizar tus contraseñas en un solo archivo:

### 1. Un archivo de hoja de cálculo cifrado

Utiliza una hoja de cálculo con estos formatos de archivo:

- ODS (Open Document Spreadsheet), compatible con Libre Office, Collabora Office, Only Office y Open Office
- XLS (Microsoft Excel Spreadsheet), compatible con Microsoft Office Excel y WPS Spreadsheet

XLS u ODS te permiten guardar tu contraseña y tus cuentas como una hoja de cálculo en un archivo cifrado con una contraseña elegida.

Para ello, debes instalar una suite ofimática, abrir la aplicación de hoja de cálculo y «Guardar como» con contraseña.

> En Libre Office Calc: «Archivo -> Guardar como (Ctrl+Mayús+S) y selecciona «Guardar con contraseña».
> Para Microsoft Excel, es muy similar a XLS, pero más seguro.

Recomiendo utilizar Libre Office Calc, que forma parte de la suite Libre Office, porque es FOSS (software libre de código abierto) y funciona en Windows, MacOS y Linux; y para abrir el archivo en el teléfono, basta con utilizar Collabora Office. También puede utilizar XLS, con MS Excel o las alternativas gratuitas como WPS.

#### Ventajas

- Un archivo cifrado en la unidad local
- Solo se puede introducir el principio y el final de la contraseña, que aparece en texto claro.
- Se puede organizar a tu manera.
- Columnas: correo electrónico, categoría, empresa, nombre de usuario, contraseña, notas
- Filas: como los valores.

#### Desventajas

- No hay opción para generar la contraseña automáticamente.
- El archivo se puede descifrar con varios intentos y depende de la fuerza de la contraseña.
- No hay opción para ocultar la contraseña.
- No hay sincronización automática.

### 2. Un archivo KeePass (kdbx)

[KeePass](https://keepass.info/) o su bifurcación [KeePassXC](https://keepassxc.org/) son gestores de contraseñas gratuitos y de código abierto multiplataforma (Windows, macOS, Linux), donde puedes almacenar nombres de usuario, contraseñas, otros campos, notas de formato libre y archivos adjuntos en un archivo cifrado con formato kdbx.

En este caso, el software está diseñado para cifrar y clasificar la información de las contraseñas, en lugar de guardar la información cifrando un archivo xsl.

Debido al gran auge de KeePass, existen muchas aplicaciones cliente compatibles con KeePass, en las que se puede abrir directamente el archivo kdbx generado.

- Para la web: [KeeWeb](https://github.com/keeweb/keeweb/releases/)
- Para macOS: [MacPAss](https://github.com/MacPass/MacPass/releases)
- Para Android: [KeePassDX](https://www.keepassdx.com/), [KeePass2Android](https://github.com/PhilippC/keepass2android/releases)
- Para iOS: [KeePassium](https://keepassium.com/), [StrongBox](https://strongboxsafe.com/)

#### Pros

- Solo local, no se almacena en un servidor remoto
- Archivo cifrado
- Sistema de clasificación por (carpetas, etiquetas) con asociación (nombre de usuario, contraseña, correo electrónico, etc.)
- Opción para ocultar contraseñas
- Integrado en el navegador web
- Genera contraseñas aleatorias
- Autocompletar contraseñas

#### Contras

- Los datos se almacenan en un solo archivo que puede ser descifrado
- No hay método de sincronización automática

### Conclusión

Estos son los métodos sencillos que he encontrado para gestionar contraseñas secretas de forma segura y privada. Yo utilizaba un archivo cifrado ODS, pero ahora uso KeePassXC en el ordenador y KeePassDX en Android.

### No olvides tu contraseña maestra

Por último, una cosa importante es que debes crear una contraseña maestra segura para acceder al *gestor de contraseñas*, por lo que es buena idea desarrollar un método para no olvidarla. Puedes desarrollar una habilidad para no olvidar tu contraseña, pero mi recomendación es que escribas la contraseña cifrada en algún lugar por si la olvidas, y mejor aún, digitalmente junto a tu archivo kdbx.

Algunas ideas para cifrar tu contraseña maestra de forma *tradicional* son  almacenarla en un archivo que solo tú entiendas y que puedas traducir a una contraseña, como en un dibujo o cualquier otra cosa que te refresque la memoria. En mi caso, utilizo una imagen con símbolos que entiendo; otros utilizan un meme, partes de un libro o un texto codificado. La idea es almacenar tu contraseña de una forma que nadie entienda, pero que sea muy accesible para ti.

Y aquí tienes algunos tipos de contraseñas que puedes generar:

1. Una contraseña larga, una frase o varias palabras. Ejemplo: «perro mesa suelo cielo sobre mente alto año dos».
2. Una acción imaginable que combine letras, números y símbolos. Ejemplo: «12_PájaroAzulVuelaAlto_21!!».
3. Una contraseña generada por un programa con caracteres especiales, que también debes copiar y pegar con un complemento del gestor de contraseñas. Ejemplo: «dòÏ¡EÑt½·¶ÃÖÔ`Aq0²V½éK&m_¤Ã·».
