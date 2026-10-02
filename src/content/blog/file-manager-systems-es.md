---
title: Las mejores aplicaciones para gestionar contenido
slug: mejores-gestores-de-contenido
translationKey: file-manager-systems
publishDate: '2022-04-12'
description: 'Sistemas de gestión de archivos para organizar y gestionar contenidos digitales.'
tags:
  - 'Software'
heroImage: { src: './thumbnails/file-managers.jpg', color: '#4891B2' }
language: es
---

## Introducción

Como seres vivos, para obtener información, utilizamos datos y los almacenamos en nuestra mente; es decir, los organizamos en nuestra base de datos (la mente) y los moldeamos internamente, dando forma a nuestro interior o, dicho de otro modo, nos informamos para aprender y adquirir conocimiento.

Cuando se trata de clasificar información, hacemos lo mismo, ya sea en un entorno físico con un archivo o en uno digital con un dispositivo electrónico. En un entorno físico, para clasificar información, escribimos en cuadernos, blocs de notas o pizarras; mientras que en un entorno digital necesitamos herramientas que se adapten.

Para organizar digitalmente la abundante y, a veces, desbordante información, es esencial seguir un buen método de categorización o flujo de trabajo y contar con las herramientas necesarias para facilitar el proceso. De esta manera, lograremos un sistema ordenado que sea más fácil de consultar y estudiar, incluso para quienes conocen el tema.

El método de categorización es una cuestión personal, pero el software utilizado es universal. Este tipo de software enfocado en la organización de archivos se denomina **gestores**. Dependiendo del uso, existen varios tipos; en este artículo mencionaremos los más relevantes.

## Gestor de copias de seguridad

Los gestores de copias de seguridad son esenciales para mantener los archivos sincronizados entre dispositivos y fuentes de almacenamiento, evitando así la pérdida de archivos y manteniendo los dispositivos actualizados.

- [FreeFileSync](https://freefilesync.org/). Uno de los mejores programas de comparación y sincronización de carpetas (multiplataforma, de código abierto y gratuito) para crear y gestionar copias de seguridad de archivos.
- [Duplicati](https://www.duplicati.com/). Un cliente de copias de seguridad que almacena de forma segura copias de seguridad cifradas, incrementales y comprimidas en almacenamiento local, servicios de almacenamiento en la nube y servidores de archivos remotos.
- [RClone](https://rclone.org/). Similar a rsync, pero en la nube, es un programa de línea de comandos para sincronizar archivos y directorios con diferentes proveedores de almacenamiento en la nube.
- [Syncthing](https://syncthing.net/). Una aplicación abierta, fiable y descentralizada. Los datos se almacenan de forma privada en una ubicación de almacenamiento seleccionable.
- [Time Machine](https://support.apple.com/en-us/HT201250). Una popular aplicación para Mac que permite realizar copias de seguridad y restaurar el sistema a un estado anterior.

Los archivos también se pueden sincronizar mediante comandos de terminal:

- [robocopy](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy). Este comando de Windows permite realizar copias de seguridad entre dos rutas de directorio.
- [rsync](https://rsync.samba.org/). Una utilidad de código abierto que proporciona una transferencia de archivos incremental y rápida; su descarga es completamente gratuita.

`cp [OPCIÓN] nombre_archivo directorio_destino`. [Opción]=-f,-h,-i,-n,-p,-r, --backup.

## Administrador de archivos

Los administradores de archivos son el software más antiguo y conocido para organizar todo tipo de archivos. Generalmente son visores y editores de metadatos. No suelen ser compatibles con los archivos, ya que requieren reproductores, editores, etc. Normalmente se ejecutan en un entorno gráfico o, en su forma más simple, muestran listados de archivos en la terminal.

### Administrador de archivos gráfico

#### Para Android (móvil)

- Cx Explorer, Oppo File Manager, Solid Explorer, FX File Explorer, X-plore File Manager.

#### Para Linux (gráfico)

- [Dolphin - KDE](https://apps.kde.org/dolphin/). El gestor de archivos más completo del escritorio KDE Plasma.
- [Files - GNOME](https://wiki.gnome.org/Apps/Files). Gestor de archivos de GNOME.
- [Nemo - Cinnamon](https://github.com/linuxmint/nemo). Gestor de archivos de Cinnamon.
- [Krusader](https://krusader.org/). Gestión de archivos con doble panel para tu escritorio.
- [PCManFM](https://sourceforge.net/projects/pcmanfm/). Un gestor de archivos extremadamente rápido y ligero con navegación por pestañas y una interfaz intuitiva.
- [XFCE Thunar](https://docs.xfce.org/xfce/thunar/start). Thunar es un gestor de archivos moderno para el entorno de escritorio Xfce.

#### Para Mac

- [Finder](https://support.apple.com/en-us/HT201732). El gestor de archivos predeterminado de Apple en PC.
- [Commander One](https://mac.eltima.com/file-manager.html). Gestor de archivos gratuito de doble panel para Mac.
- [ForLift 3](https://binarynights.com/). El gestor de archivos de doble panel y cliente de transferencia de archivos más avanzado para macOS.
- [Path finder](https://www.cocoatech.io/).

#### Para Windows

- [Files Windows](https://github.com/files-community/Files). Administrador de archivos similar al de Windows, pero con una interfaz gráfica mejorada, de código abierto y con etiquetado por colores.
- [XYplorer](https://www.xyplorer.com/). Administrador de archivos con múltiples opciones y formatos de visualización para Windows.
- [Explorador de archivos de Windows](https://support.microsoft.com/en-us/windows/find-and-open-file-explorer-ef370130-1cca-9dc5-e0df-2f7416fe1cb1). El Explorador de archivos de Windows es una de las aplicaciones más antiguas y conocidas de Microsoft para administrar archivos locales. Ha cambiado poco desde su creación y, a pesar de ello, sigue siendo muy útil, lo que demuestra su buen diseño desde sus inicios. Permite ver y organizar todo tipo de archivos con múltiples vistas, ordenarlos mediante filtros y visualizar carpetas con una estructura de árbol y rutas de directorio. La desventaja es que no hay etiquetado ni mejoras con el tiempo.

#### Multiplataforma

- **Navegador**: Chromium (Google Chrome, Brave, MS Edge, Opera, Vivaldi), Firefox (Librewolf). Permite leer y abrir archivos con la ruta en el navegador: file:///C:/.
- [Double Commander](https://sourceforge.net/projects/doublecmd/)
- [TagSpaces](https://www.tagspaces.org/). Gestor de archivos con etiquetado propio (incluye geolocalización), mediante dos métodos: cambiando el nombre o añadiendo un archivo JSON a una base de datos propia.

### Gestor de archivos de terminal

#### Para Linux (CLI)

- [Lf](https://github.com/gokcehan/lf). Gestor de archivos de terminal escrito en Go, inspirado en gran medida en el gestor de archivos Ranger.
- [Midnight Commander](https://midnight-commander.org/). GNU Midnight Commander es un gestor de archivos ortodoxo multiplataforma gratuito.
- [nnn](https://github.com/jarun/nnn). Un gestor de archivos de terminal poco convencional con numerosas funciones.
- [ranger](https://ranger.github.io/). Ranger es un gestor de archivos de consola con atajos de teclado de VI.
- [Vfim.info](https://vifm.info/). Vifm es un gestor de archivos con interfaz curses, que proporciona un entorno similar a Vim para gestionar objetos dentro de sistemas de archivos, con algunas ideas útiles de Mutt.

#### Para Windows (CLI)

- [Terminal de Windows con comandos](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands) (cd, dir, attrib, rename, tree).

### Gestor de bibliotecas

Los gestores de bibliotecas son de uso general para categorizar y mostrar casi todos los tipos de formatos, y son los más completos en cuanto a su propia visualización.

- [Adobe Bridge](https://www.adobe.com/products/bridge.html). Adobe Bridge es un potente gestor de recursos creativos que permite previsualizar, organizar, editar y publicar múltiples recursos creativos de forma rápida y sencilla. Edita los metadatos. Añade palabras clave, etiquetas y clasificaciones a los recursos. Organiza los recursos mediante colecciones y encuentra recursos utilizando potentes filtros y funciones avanzadas de búsqueda de metadatos. Es ideal para la suite de Adobe, pero requiere una cuenta y se paga mensualmente.
- [Eagle.cool](https://eagle.cool/). El mejor gestor de archivos enfocado en diseñadores que trabajan con imágenes, pero con un uso ampliable a todo tipo de archivos. La interfaz de usuario es muy elegante y está bien diseñada; visualmente, cuenta con dos paneles laterales con información y, en el centro, la lista de archivos.
- La desventaja es que es de pago y solo admite dos dispositivos. Además, su biblioteca de almacenamiento solo es visible con la información asociada de Eagle.

### Administrador en línea

- Administradores DAM: [Daminion](https://daminion.net/), [Canto](https://www.canto.com/), [Tagbox.io](https://www.tagbox.io/).
- Gestores de archivos en la nube: [Dropbox](https://www.dropbox.com/), [Google Drive](https://www.google.com/drive/), [MEGA](https://mega.io/), [Nextcloud](https://nextcloud.com/).
- Chats con gestores de archivos: [Discord](https://discord.com/), [Telegram](https://telegram.org/), [WhatsApp](https://www.whatsapp.com/),
- Gestores de contenido en línea: motores de búsqueda (Google, DuckDuckGo, Bing), plataformas de audio (Spotify), imagen (Pixabay), texto (OpenLibrary) y vídeo (YouTube, Odysee, Vimeo).
- Gestores de proyectos: [Notion.so](https://www.notion.so)

---

## Gestores por formato

### Gestor de audio (reproductor de música)

Todos los gestores de audio que se enumeran a continuación son gratuitos.

- [MusicBee](https://getmusicbee.com/). El mejor reproductor de música para Windows, altamente personalizable, con edición de metadatos e información adicional sobre las canciones.
- [MusicBrainz Picard](https://musicbrainz.org/). Aplicación para etiquetar automáticamente las canciones con metadatos (artistas, álbumes, compositores, etc.).
- [Foobar2000](https://www.foobar2000.org/). Un clásico de la música. Reproductor que permite organizar archivos de audio en Windows.
- [Strawberry Music Player](https://www.strawberrymusicplayer.org/). Reproductor de música ligero, multiplataforma y de código abierto.

### Gestor de imágenes (galería)

Los gestores de imágenes suelen ser galerías de imágenes con opciones adicionales.

- [Digikam](https://www.digikam.org/). Aplicación para gestionar fotos, con reconocimiento facial y etiquetado de imágenes.
- [KPhotoAlbum](https://www.kphotoalbum.org/). Gestor de imágenes de KDE con sistema de etiquetado.
- [LibrePhotos](https://github.com/LibrePhotos/librephotos). Servicio de gestión de fotos de código abierto autohospedado, orientado a la instalación con Docker.
- [Photoprism](https://photoprism.app/). Similar a LibrePhotos, utiliza IA para explorar, organizar y compartir tu colección de fotos. Incluye un sistema de etiquetado y se puede usar localmente, en un servidor privado o en la nube. Orientado a la instalación con Docker.
- [Xnview MP](https://www.xnview.com/en/xnviewmp/). Gestor de imágenes con galería integrada y edición de fotos.

### Gestor de texto

Los gestores de texto se utilizan para navegar entre archivos asociados a directorios y editar su contenido. Se suelen usar para crear código y editar documentación.

#### Gestor de código o editor de desarrollo integrado (IDE)

Te permiten ver directorios completos con todos sus archivos y editar el código en texto plano. También tienen un compilador y más funciones.

- [Visual Studio Code](https://code.visualstudio.com/). Visual Studio Code es el editor más conocido para desarrolladores, es gratuito, pero su código es privado y pertenece a Microsoft. Cuenta con multitud de complementos y funciones.
- [VSCodium](https://vscodium.com/). Un Visual Studio pero de código abierto y sin enviar datos en segundo plano.
- [Notepad++](https://notepad-plus-plus.org/). Famoso editor gratuito, ligero y sencillo.
- [Sublime Text](https://www.sublimetext.com/). Editor de texto de pago, pero se puede utilizar de forma gratuita de por vida.
- [Emacs](https://www.gnu.org/software/emacs/). Editor de texto multiplataforma.
- [NeoVim](https://neovim.io/). Editor del famoso Vim pero con un entorno renovado.
- [IntelliJ IDEA](https://www.jetbrains.com/idea/). Editor IntelliJ de pago, con una interfaz muy agradable.

#### Gestor de notas

Los editores en formato markdown (md) son muy útiles para gestionar información y extraer conocimientos. Además, su formato de texto plano lo hace muy versátil para cualquier aplicación y dispositivo.

- [Obsidian.d](https://obsidian.md/). Aplicación para gestionar notas en formato markdown, con un panel lateral en vista de árbol y múltiples opciones de búsqueda y etiquetado. También permite reproducir multitud de archivos de audio (mp3, wav), imágenes (jpg, png, bmp, tiff), vídeos (mp4, mkv, mov) y documentos (pdf). Cuenta con un visor gráfico y multitud de plugins diversos, con una estética sencilla y elegante que se puede personalizar hasta el último detalle.
- [Logseq](https://logseq.com/). Aplicación gratuita de código abierto para la gestión de archivos markdown (md), similar a Obsidian, pero las notas se almacenan en un archivo común.
- [Joplin](https://joplinapp.org/). Al igual que las anteriores, Joplin se utiliza para gestionar archivos markdown, tiene una buena interfaz y botones para editar en formato markdown. A diferencia de las anteriores, no permite mostrar el contenido como una red ni añadir archivos que no sean Markdown.

### Gestor de vídeos

Hay pocas aplicaciones dedicadas exclusivamente a la gestión de vídeos, ya que suele estar incluida en los gestores de archivos, galerías o bibliotecas.

- [Vide Hub App](https://videohubapp.com/en/). Es un gestor de vídeo gratuito con una interfaz que muestra varias miniaturas y referencias de los vídeos añadidos.

### Gestor de formatos para móviles

- En los móviles (Android o iOS), los gestores por formato son la galería, el gestor de notas y el reproductor de música.
- Galería: Galería Yerapps, Galería Simple, Galería Oppo, Galería Samsung, Galería Xiami.
- Reproductor de música: Musicolet, Musicoin, Reproductor de música Nyx, Reproductor de música Pi, Reproductor de música (mytechnosound), Reproductor de música Pulsar
- Gestores de notas: Obsidian, Markor, SimplNote, GitJournal, Orgzly

---

## El gestor «ideal»

La aplicación de gestión perfecta debería tener las siguientes características:

1. Licencia: código abierto (para garantizar la transparencia en el uso de los datos).
2. Coste: gratuita (con donación) o pago único de por vida (precio máximo 80 €).
3. Compatibilidad: multiplataforma (Linux, Mac, Windows, iOS, Android).
4. Privacidad: aplicación local privada (sin envío de datos a terceros).
5. Interfaz: sencilla, con variedad de temas (claro y oscuro).
6. Sistema de clasificación: estructura jerárquica con carpetas y ruta de directorios.
7. Clasificación general:
	1. Almacenamiento que conserva la estructura de directorios.
	2. Etiquetado de archivos, puntuación, adición de metadatos.
	3. Filtrado de archivos por tipo o metadatos.
	4. Guardado de páginas web (con opción de lectura sin conexión).
	5. Visualización de archivos con diferentes vistas (detalles, iconos, lista, miniaturas).
	6. Ordenación por metadatos de los archivos (nombre, fecha de creación, etiqueta...).
	7. Panel de búsqueda avanzada.
	8. Panel de ruta del directorio actual.
	9. Visores gráficos: estructura de árbol y visor de gráficos.
8. Formatos de archivo compatibles.
	1. Formatos reproducibles:
		- Audio (aac, aiff, dsd, flac, mp3, wav, wma).
		- Documentos (csv, docx, epub, html, md, pdf, txt, xml).
		- Imágenes (bmp, gif, jpg, png, psd, raw, svg, tiff, web).
		- Vídeo (avi, divx, flv, mp4, mov, mkv, webm).
	2. Formatos editables (opcional):
	- Audio. Edición de velocidad, recorte y tono.
	- Documentos. Edición de texto sin formato.
	- Imagen. Edición de contraste, brillo, saturación, sombras y color.
	- Vídeos. Edición de valores de audio + imagen.

- El gestor «ideal» sería una mezcla de:
       - Eagle.cool para la visualización de archivos, la interfaz y el etiquetado de grupos.
       - Windows Explorer o Files por sus opciones de filtrado y organización.
       - Obsdian.md por su visor de gráficos, su interfaz personalizable y sus complementos compatibles.
       - TagSpaces por su geolocalización, que permite mantener la estructura de carpetas.

Mi favorito hasta la fecha es Eagle.cool, pero el problema es que no permite abrir todos los archivos internamente (aunque para eso hay editores) y su almacenamiento se realiza en una biblioteca del propio programa con una carpeta por archivo con (nombre.xyz + nombre_miniatura.xyz + nombre.json), lo que ralentiza mucho la transferencia de archivos por el número de carpetas creadas. Otro punto en su contra es que solo permite dos dispositivos con registro Windows o Mac.
Otro gestor muy útil es Files, la versión moderna y de código abierto del conocido explorador de Windows, con etiquetado por colores, múltiples ventanas y una gran variedad de temas. Lo malo es que solo es para Windows, la vista de las carpetas es jerárquica y el etiquetado es básico, sin agrupaciones ni posibilidad de exportar.

Como dato, para añadir metadatos a los archivos se necesita una base de datos externa, ya que normalmente los archivos, según el formato, vienen con su propio límite de metadatos. Esto hace necesario añadir archivos con información adicional (info-extra.json) y la estructura de carpetas cambia. Una forma de conservar la estructura de directorios es añadir los metadatos en el nombre del archivo, pero se trata de un método limitado.

## Conclusión

El software utilizado para gestionar archivos es una buena herramienta para clasificar la información y facilitar el trabajo de recopilación y aprendizaje. Pero al final lo que importa es el objetivo que se quiere alcanzar con estos datos, se puede variar el método hasta encontrar el que más guste o con el que se sienta más cómodo.

## Referencias

- [Aplicaciones para organizar contenido - AlternativeTo](https://alternativeto.net/lists/30987/organize-content/)
- [Sincroniza tus notas sin conexión en todos los dispositivos sin necesidad de la nube](https://attilaorosz.medium.com/syncronise-your-offline-notes-across-all-devices-without-the-cloud-1e82fa53d1f1)
- [¿Cuál es el mejor software para etiquetar archivos?](https://turbofuture.com/computers/Whats-the-Best-Software-for-Tagging-Files-A-Review)
- [Lista de aplicaciones de Arch Linux](https://wiki.archlinux.org/title/List_of_applications)
