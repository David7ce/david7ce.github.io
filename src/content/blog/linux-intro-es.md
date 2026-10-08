---
title: Introducción a Linux
slug: intro-a-linux
translationKey: linux-intro
publishDate: '2022-06-18'
updatedDate: '2026-10-02'
description: 'Linux para principiantes: qué es, cómo elegir una distro y cómo instalar software.'
tags:
  - 'Informática'
  - 'Linux'
heroImage: { src: './thumbnails/linux-intro.webp', color: '#4891B2' }
language: es
---

<!-- styles to the table -->
<style>
  /* a { text-decoration: none; } */
  /* a img { border: none; } */
  table a { margin: 5px; }
  table img { display: inline-block; width: 30px; height: auto; }
</style>

## Introducción a Linux

Linux puede parecer técnico y confuso, pero es más sencillo de lo que crees. En esencia, Linux es un sistema operativo (SO), el software esencial que te permite utilizar dispositivos como ordenadores, tabletas e incluso algunos televisores y microondas. Mientras que los dispositivos más sencillos tienen sistemas operativos básicos, los ordenadores personales tienen sistemas más complejos.

La mayoría de las personas utilizan Windows o macOS en sus ordenadores y Android o iOS en sus teléfonos. Sin embargo, Linux es el sistema operativo preferido para los servidores, ya que más del 90 % de ellos lo utilizan. Los servidores son ordenadores que proporcionan servicios de Internet y, a menudo, funcionan con Linux porque es eficiente, está estandarizado y es gratuito.

Aunque Linux no es tan común en los ordenadores personales, constituye la base de Android y es conocido por ser de código abierto y personalizable.

## ¿Qué es Linux?

Técnicamente, Linux se refiere al núcleo, la parte central de un sistema operativo que interactúa con el hardware. El sistema operativo completo se llama GNU/Linux. Este nombre proviene del proyecto GNU iniciado por Richard Stallman en los años 80 para crear un sistema operativo gratuito y de Linus Torvalds, quien desarrolló el núcleo Linux.

Linux se diferencia de Windows y macOS en que es principalmente software libre y de código abierto (FOSS). Esto significa que el código está disponible para que cualquiera pueda utilizarlo, modificarlo y distribuirlo.

## Distribuciones de Linux

Uno de los primeros conceptos con los que te encuentras cuando quieres instalar Linux es el de «distribución Linux». La distribución o distro es un concepto que agrupa todas las partes de un sistema operativo en una imagen de disco lista para descargar y facilitar la instalación, y está asociado con Linux y también con los sistemas operativos de la familia BSD.

En este artículo, hablaremos específicamente de las distribuciones Linux.

Las distribuciones de Linux, o «distribuciones», consisten en varios componentes de software agrupados para crear un sistema operativo completo. Estas son las partes más típicas:

- **Kernel de Linux:** el núcleo del sistema operativo.
- **Bibliotecas y herramientas del sistema:** normalmente herramientas GNU y bibliotecas básicas.
- **Cargador de arranque:** software que carga el sistema operativo, por ejemplo, GRUB, systemd-boot.
- **Sistema de archivos:** gestiona cómo se almacenan los datos, por ejemplo, EXT4.
- **Sistema de inicialización:** gestiona la inicialización del sistema, por ejemplo, systemd.
- **Controladores:** garantizan el correcto funcionamiento de los componentes de hardware.
- **Gestor de paquetes:** Software que gestiona la instalación, actualización y eliminación de aplicaciones, por ejemplo, pacman para Arch Linux, APT para Debian, etc.
- **Marco de instalación (múltiples opciones)**: Software utilizado para instalar el sistema operativo, a través de CLI (arch-install-scripts, debootstrap), TUI (archinstall) o GUI (instalador Calamares, Ubiquity, Anaconda).
- **Entornos de escritorio (opcional):** proporcionan una interfaz gráfica de usuario para facilitar su uso. Los entornos de escritorio más populares son KDE, GNOME, XFCE y Mate.
- **Sistema de ventanas:** gestiona la visualización, por ejemplo, Xorg (X11) o Wayland.
    - **Gestor de ventanas:** controla el comportamiento de las ventanas, por ejemplo, flotantes (KDE Plasma) o en mosaico (i3 WM).
- **Gestor de inicio de sesión:** gestiona los inicios de sesión de los usuarios, por ejemplo, LightDM, SDDM.
    - **Menús y lanzadores:** como dmenu y rofi.
- **Temas globales:** personalizan el aspecto, incluidas las barras de tareas y los fondos de pantalla.
- **Aplicaciones GUI:** incluyen el gestor de inicio de sesión, el gestor de barras, el lanzador, el gestor de archivos, el terminal, el navegador web, el editor de texto, etc.

Cuando una distribución proporciona los componentes básicos, como el kernel de Linux, un sistema de gestión de paquetes, repositorios de software y un conjunto de bibliotecas y herramientas del sistema predeterminadas, se denomina **distribución base de Linux**.

### Principales distribuciones base de Linux

Aunque existen cientos de distribuciones de Linux, la mayoría se basan en estas diez distribuciones base fundamentales.

| Linux distro                                                                    | Mantainer | Release model | Package manager                 | Source repository                                                             |
| ------------------------------------------------------------------------------- | --------- | ------------- | ------------------------------- | ----------------------------------------------------------------------------- |
| [![ArchLinux](/img/linux-distros/base/archlinux.webp)](https://archlinux.org/)  | Community | Rolling       | Pacman (pkg.tar.zst + PKGBUILD) | [Arch pkgs](https://archlinux.org/packages)+[AUR](https://aur.archlinux.org/) |
| [![Debian](/img/linux-distros/base/debian.webp)](https://www.debian.org/)       | Community | Fixed         | APT (deb)                       | [Debian pkgs](https://packages.debian.org/stable/)                            |
| [![Fedora](/img/linux-distros/base/fedora.webp)](https://fedoraproject.org/)    | Red Hat   | Fixed         | DNF (rpm)                       | [Fedora pkgs](https://packages.fedoraproject.org/)                            |
| [![OpenSUSE](/img/linux-distros/base/opensuse.webp)](https://www.opensuse.org/) | SUSE      | Mixed         | Zypper (rpm)                    | [OpenSUSE pkgs](https://software.opensuse.org/)                               |
| [![NixOS](/img/linux-distros/base/nixos.webp)](https://nixos.org/)              | Community | Rolling       | Nix (nar or .nar.xz)            | [NixOS pkgs](https://search.nixos.org/packages)                               |
| [![Gentoo](/img/linux-distros/base/gentoo.webp)](https://www.gentoo.org/)       | Community | Rolling       | Portage (tar.xz + ebuild)       | [Gentoo pkgs](https://packages.gentoo.org/)                                   |
| [![Void](/img/linux-distros/base/void.webp)](https://voidlinux.org/)            | Community | Rolling       | XBPS (xbps.tar.xz)              | [Void pkgs](https://voidlinux.org/packages/)                                  |
| [![Slackware](/img/linux-distros/base/slackware.webp)](https://slackware.org/)  | Community | LTS           | Slackpkg (tar)                  | [Slackware pkgs](https://packages.slackware.com/)                             |
| [![Solus](/img/linux-distros/base/solus.webp)](https://getsol.us/)              | Community | Rolling       | eopkg (eopkg)                   | [Solus pkgs](https://dev.getsol.us/source/)                                   |
| [![Alpine](/img/linux-distros/base/alpine.webp)](https://alpinelinux.org/)      | Community | Rolling       | APK (apk)                       | [Alpine pkgs](https://pkgs.alpinelinux.org/)                                  |

### Lo que recomiendo

Primero, elige la **distribución base** y, a continuación, el **[entorno de escritorio](https://en.wikipedia.org/wiki/Desktop_environment)** según tus preferencias y necesidades.

De esta manera, no perderás tiempo cambiando frecuentemente de una distribución a otra, un concepto conocido como «distro-hopping», que muchos *streamers de Linux* utilizan hoy en día para crear contenido. Si deseas explorar otras opciones, considera hacerlo en una máquina virtual antes de realizar cualquier cambio.

#### Instalación sencilla: distribuciones Linux preconfiguradas

Si buscas una opción de Linux apta para toda la familia, considera utilizar una distribución importante que venga con un entorno de escritorio (DE) preinstalado, como GNOME o KDE. Estas distribuciones están bien mantenidas, cuentan con un sólido soporte de la comunidad y ofrecen una experiencia fácil de usar.

| Base de la distribución  | Distribución derivada                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Basado en Arch           | [![EndeavourOS](/img/linux-distros/based/endeavouros.webp)](https://endeavouros.com/) [![Garuda Linux](/img/linux-distros/based/garuda-linux.webp)](https://garudalinux.org/) [![CachyOS](/img/linux-distros/based/cachyos.webp)](https://cachyos.org/) [![Manjaro](/img/linux-distros/based/manjaro.webp)](https://manjaro.org/products/download/x86)                                                                                                                                                                                                                     |
| Basadas en Debian        | [![Linux Mint](/img/linux-distros/based/linux-mint.webp)](https://www.linuxmint.com/) [![Ubuntu](/img/linux-distros/based/ubuntu.webp)](https://ubuntu.com/download) [![Kubuntu](/img/linux-distros/based/kubuntu.webp)](https://kubuntu.org/) [![KDE neon](/img/linux-distros/based/kde-neon.webp)](https://neon.kde.org/) [![Kali Linux](/img/linux-distros/based/kali-linux.webp)](https://www.kali.org/) [![Pop OS](/img/linux-distros/based/pop-os.webp)](https://pop.system76.com/) [![Proxmox](/img/linux-distros/based/proxmox.webp)](https://www.proxmox.com/en/) |
| Basadas en Fedora        | [![Fedora Spins](/img/linux-distros/based/fedora-spins.webp)](https://fedoraproject.org/spins/) [![Nobara](/img/linux-distros/based/nobara.webp)](https://nobaraproject.org/download-nobara/)                                                                                                                                                                                                                                                                                                                                                                              |

#### Instalación avanzada: distribuciones mínimas

> Estas instalaciones son para usuarios avanzados y pueden llevar mucho tiempo

Si te interesa comprender mejor el proceso de instalación, considera estas distribuciones mínimas de Linux que requieren una configuración manual a través de la terminal. A diferencia de las distribuciones preconfiguradas, ofrecen un entorno básico para que los usuarios lo construyan y personalicen según sus necesidades.

- **Alpine Linux**: una distribución ligera, mínima y segura centrada en la simplicidad y la eficiencia.
- **Arch Linux**: proporciona un sistema base mínimo para que los usuarios configuren e instalen paquetes y entornos de escritorio.
- **Debian Netinstall**: ofrece una instalación mínima de Debian que permite a los usuarios elegir el software durante la configuración.
- **Gentoo**: cuenta con una base altamente personalizable en la que los usuarios compilan el software desde el código fuente.
- **Slackware**: conocida por su simplicidad y minimalismo, requiere una configuración manual y la instalación de software.

#### Instalación para desarrolladores: crear la distribución

Para los entusiastas y aquellos que disfrutan de los retos, existe la emocionante opción de crear su propia distribución de Linux. Puedes crear una distribución Linux personalizada utilizando diversas herramientas diseñadas para crear ISO en vivo, tales como: [archiso](https://wiki.archlinux.org/title/Archiso), [DebianLive](https://wiki.debian.org/DebianLive), [Fedora LiveCD Tools](https://github.com/livecd-tools/livecd-tools)
Alternativamente, si te apetece una experiencia más práctica y educativa, puedes crear un sistema Linux desde cero siguiendo la [documentación de Linux From Scratch (LFS)](https://www.linuxfromscratch.org/lfs/). Este enfoque implica ensamblar manualmente todos los componentes de tu sistema Linux, lo que te proporciona un conocimiento profundo y un control total sobre el sistema operativo que creas.

<!--
- **🐧🦑 Modo Penguin-Calamares:** instala una distribución preconfigurada (kernel **Penguin** personalizado + DE + instalador Calamares).
- **🐙 Modo Octopus:** Automatiza la instalación como un **Octopus** utilizando scripts bash.
- **🐍 Modo Python (solo con Arch):** Utiliza un script **Python**, como `archinstall`, para interactuar con el shell y seleccionar los paquetes que deseas instalar desde un formulario.
- 🐢 **Modo Tortuga:** Construye desde cero en el *shell* como una **tortuga** que se mueve lenta pero seguramente, entra directamente en la terminal de texto del sistema operativo e instala manualmente escribiendo comandos.
-->

## Instalación de software en Linux

Para configurar su propio sistema operativo Linux, necesita:

1. El núcleo del sistema (kernel)
2. El lanzador del sistema (como systemd)
3. Los controladores para el hardware
4. El entorno de escritorio (como GNOME o KDE)
5. Las aplicaciones básicas (administrador de archivos, navegador, etc.)

Linux utiliza gestores de paquetes para instalar software. Los más comunes son `apt` para las distribuciones basadas en Debian y `pacman` para las basadas en Arch. Puedes instalar software mediante comandos de terminal, descargando paquetes o utilizando scripts.

## Personalización de Linux (Ricing)

Linux es altamente personalizable. Se puede modificar ampliamente la interfaz y las funciones, una práctica conocida como «ricing». Comunidades como [r/UnixPorn](https://www.reddit.com/r/unixporn) muestran estas personalizaciones.

## Ventajas y desventajas

**Ventajas:**

- Código abierto y gratuito.
- Seguro contra el malware.
- Gran comunidad de apoyo.

**Desventajas:**

- Algunos problemas de compatibilidad de hardware y software.
- Menos aplicaciones propietarias disponibles.

## Aprender Linux

El uso de Linux, especialmente una distribución como Arch, te enseña mucho sobre cómo funcionan los ordenadores. Es ideal para la privacidad, la eficiencia y el minimalismo.

## Conclusión

Linux ofrece un sistema operativo seguro, personalizable y gratuito con una sólida comunidad. Puede que te lleve algún tiempo adaptarte, pero una vez lo hagas, probablemente apreciarás su flexibilidad y potencia.

## Enlaces útiles

- [Filosofía GNU (código abierto)](https://www.gnu.org/philosophy/open-source-misses-the-point.en.html)
- [Lista de aplicaciones - Arch Linux](https://wiki.archlinux.org/title/List_of_applications)
- [Lista de distribuciones de Linux - LWN](https://lwn.net/Distributions/)
- [Lista de distribuciones de Linux - Wikipedia](https://en.wikipedia.org/wiki/List_of_Linux_distributions)
- [¿Qué es una distribución Linux? - Es FOSS](https://itsfoss.com/what-is-linux-distribution/)
- [Distribución Linux - Wikipedia](https://en.wikipedia.org/wiki/Linux_distribution)
- [Cronología de las distribuciones Linux - Wikipedia](https://commons.wikimedia.org/wiki/File:Linux_Distribution_Timeline_21_10_2021.svg)
- [Distribuciones Linux - ArchiveOS](https://archiveos.org/linux/)
- [Entorno de escritorio - Wikipedia](https://en.wikipedia.org/wiki/Desktop_environment)
- [Entorno de escritorio - ArchLinux](https://wiki.archlinux.org/title/Desktop_environment)
- [Gestor de paquetes - Wikipedia](https://en.wikipedia.org/wiki/Package_manager)
