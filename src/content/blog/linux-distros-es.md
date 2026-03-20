---
title: Distro de Linux
slug: distros-de-linux
translationKey: linux-distros
publishDate: '2022-07-13'
description: 'Formas y maneras de instalar una distro de Linux'
tags:
  - 'Informática'
  - 'Linux'
heroImage: { src: './thumbnails/linux-distros.jpg', color: '#4891B2' }
language: es
---

<!-- styles to the table -->
<style>
  /* a { text-decoration: none; } */
  /* a img { border: none; } */
  table a { margin: 5px; }
  table img { display: inline-block; width: 30px; height: auto; }
</style>

## Introducción

Uno de los primeros conceptos con los que te encuentras cuando quieres instalar Linux es el de «distribución Linux». La distribución o distro es un concepto que agrupa todas las partes de un sistema operativo en una imagen de disco lista para descargar y facilitar la instalación, y está asociado con Linux y también con los sistemas operativos de la familia BSD.

En este artículo, hablaremos específicamente de las distribuciones Linux.

## Distribuciones Linux

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

## Principales distribuciones base de Linux

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

## Lo que recomiendo

Primero, elige la **distribución base** y, a continuación, el **[entorno de escritorio](https://en.wikipedia.org/wiki/Desktop_environment)** según tus preferencias y necesidades.

De esta manera, no perderás tiempo cambiando frecuentemente de una distribución a otra, un concepto conocido como «distro-hopping», que muchos *streamers de Linux* utilizan hoy en día para crear contenido. Si deseas explorar otras opciones, considera hacerlo en una máquina virtual antes de realizar cualquier cambio.

### Instalación sencilla: distribuciones Linux preconfiguradas

Si buscas una opción de Linux apta para toda la familia, considera utilizar una distribución importante que venga con un entorno de escritorio (DE) preinstalado, como GNOME o KDE. Estas distribuciones están bien mantenidas, cuentan con un sólido soporte de la comunidad y ofrecen una experiencia fácil de usar.

| Base de la distribución  | Distribución derivada                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Basado en Arch           | [![EndeavourOS](/img/linux-distros/based/endeavouros.webp)](https://endeavouros.com/) [![Garuda Linux](/img/linux-distros/based/garuda-linux.webp)](https://garudalinux.com/) [![CachyOS](/img/linux-distros/based/cachyos.webp)](https://cachyos.org/) [![Manjaro](/img/linux-distros/based/manjaro.webp)](https://manjaro.org/products/download/x86)                                                                                                                                                                                                                     |
| Basadas en Debian        | [![Linux Mint](/img/linux-distros/based/linux-mint.webp)](https://www.linuxmint.com/) [![Ubuntu](/img/linux-distros/based/ubuntu.webp)](https://ubuntu.com/download) [![Kubuntu](/img/linux-distros/based/kubuntu.webp)](https://kubuntu.org/) [![KDE neon](/img/linux-distros/based/kde-neon.webp)](https://neon.kde.org/) [![Kali Linux](/img/linux-distros/based/kali-linux.webp)](https://www.kali.org/) [![Pop OS](/img/linux-distros/based/pop-os.webp)](https://pop.system76.com/) [![Proxmox](/img/linux-distros/based/proxmox.webp)](https://www.proxmox.com/en/) |
| Basadas en Fedora        | [![Fedora Spins](/img/linux-distros/based/fedora-spins.webp)](https://fedoraproject.org/spins/) [![Nobara](/img/linux-distros/based/nobara.webp)](https://nobaraproject.org/download-nobara/)                                                                                                                                                                                                                                                                                                                                                                              |

### Instalación avanzada: distribuciones mínimas

> Estas instalaciones son para usuarios avanzados y pueden llevar mucho tiempo

Si te interesa comprender mejor el proceso de instalación, considera estas distribuciones mínimas de Linux que requieren una configuración manual a través de la terminal. A diferencia de las distribuciones preconfiguradas, ofrecen un entorno básico para que los usuarios lo construyan y personalicen según sus necesidades.

- **Alpine Linux**: una distribución ligera, mínima y segura centrada en la simplicidad y la eficiencia.
- **Arch Linux**: proporciona un sistema base mínimo para que los usuarios configuren e instalen paquetes y entornos de escritorio.
- **Debian Netinstall**: ofrece una instalación mínima de Debian que permite a los usuarios elegir el software durante la configuración.
- **Gentoo**: cuenta con una base altamente personalizable en la que los usuarios compilan el software desde el código fuente.
- **Slackware**: conocida por su simplicidad y minimalismo, requiere una configuración manual y la instalación de software.

### Instalación para desarrolladores: crear la distribución

Para los entusiastas y aquellos que disfrutan de los retos, existe la emocionante opción de crear su propia distribución de Linux. Puedes crear una distribución Linux personalizada utilizando diversas herramientas diseñadas para crear ISO en vivo, tales como: [archiso](https://wiki.archlinux.org/title/Archiso), [DebianLive](https://wiki.debian.org/DebianLive), [Fedora LiveCD Tools](https://github.com/livecd-tools/livecd-tools)
Alternativamente, si te apetece una experiencia más práctica y educativa, puedes crear un sistema Linux desde cero siguiendo la [documentación de Linux From Scratch (LFS)](https://www.linuxfromscratch.org/lfs/). Este enfoque implica ensamblar manualmente todos los componentes de tu sistema Linux, lo que te proporciona un conocimiento profundo y un control total sobre el sistema operativo que creas.

<!--
- **🐧🦑 Modo Penguin-Calamares:** instala una distribución preconfigurada (kernel **Penguin** personalizado + DE + instalador Calamares).
- **🐙 Modo Octopus:** Automatiza la instalación como un **Octopus** utilizando scripts bash.
- **🐍 Modo Python (solo con Arch):** Utiliza un script **Python**, como `archinstall`, para interactuar con el shell y seleccionar los paquetes que deseas instalar desde un formulario.
- 🐢 **Modo Tortuga:** Construye desde cero en el *shell* como una **tortuga** que se mueve lenta pero seguramente, entra directamente en la terminal de texto del sistema operativo e instala manualmente escribiendo comandos.
-->

## Referencias

- [¿Qué es una distribución Linux? - Es FOSS](https://itsfoss.com/what-is-linux-distribution/)
- [Distribución Linux - Wikipedia](https://en.wikipedia.org/wiki/Linux_distribution)
- [Cronología de las distribuciones Linux - Wikipedia](https://upload.wikimedia.org/wikipedia/commons/b/b5/Linux_Distribution_Timeline_21_10_2021.svg)
- [Distribuciones Linux - ArchiveOS](https://archiveos.org/linux/)
- [Distribuciones Linux - Interneto](https://raindrop.io/Interneto/img/linux-distros-19045213)
- [Entorno de escritorio - Wikipedia](https://en.wikipedia.org/wiki/Desktop_environment)
- [Entorno de escritorio - ArchLinux](https://wiki.archlinux.org/title/Desktop_environment)
- [Entorno de escritorio - Interneto](https://raindrop.io/Interneto/de-21145177)
- [Gestor de paquetes - Wikipedia](https://en.wikipedia.org/wiki/Package_manager)
