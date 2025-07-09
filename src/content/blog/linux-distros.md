---
title: Linux distros
publishDate: '2022-07-13'
description: 'Types and ways to install a distro of Linux'
tags:
  - 'Computing'
  - 'Linux'
heroImage: { src: './thumbnails/linux-distros.jpg', color: '#4891B2' }
language: 'English'
---

<!-- styles to the table -->
<style>
  /* a { text-decoration: none; } */
  /* a img { border: none; } */
  table a { margin: 5px; }
  table img { display: inline-block; width: 30px; height: auto; }
</style>

## Intro

One of the first concept you encounter when you want to install Linux is the "Linux distro". The distribution or distro is a concept to group all parts of an Operating System as one disk image ready to be downloaded and facilitate the installation,it is associated with Linux and also with BSD family OS.

In this article, we will talk specifically about Linux distributions.

## Linux Distros

Linux distros, or "distributions," consist of various software components bundled together to create a complete operating system. Here are the most typical parts:

- **Linux Kernel:** The core of the OS.
- **System libraries and tools:** Typically GNU tools and basic libraries.
- **Bootloader:** Software that loads the OS, e.g., GRUB, systemd-boot.
- **File system:** Manages how data is stored, e.g., EXT4.
- **Init system:** Manages system initialization, e.g., systemd.
- **Drivers:** Ensure hardware components function correctly.
- **Package Manager:** Software that manages app installation, upgrades, and removal, e.g., pacman for Arch Linux, APT for Debian, etc.
- **Installer Framework (multiple options)**: Software used for installing the OS, via CLI (arch-install-scripts, debootstrap), TUI (archinstall) or GUI (Calamares installer, Ubiquity, Anaconda).
- **Desktop Environments (optional):** Provide a Graphical User Interface for ease of use. Popular DEs are KDE, GNOME, XFCE, and Mate.
    - **Window System:** Manages the display, e.g. Xorg (X11) or Wayland.
    - **Window Manager:** Controls window behavior, e.g., floating (KDE Plasma) or tiling (i3 WM).
    - **Login Manager:** Manages user logins, e.g., LightDM, SDDM.
    - **Menus and Launchers:** Like dmenu and rofi.
    - **Global Themes:** Customize the look and feel, including taskbars and wallpapers.
    - **GUI Apps:** Include login manager, bar manager, launcher, file manager, terminal, web browser, text editor, etc.

When a distribution provides the core components such as the Linux kernel, a package management system, software repositories, and a set of default system libraries and tools, it is referred to as a **Linux base distro**.

## Main Linux base distros

While there are hundreds of Linux distributions, the majority are based on these ten foundational Linux base distros.

| Linux distro                                                                | Mantainer | Release model | Package manager                 | Source repository                                                             |
| --------------------------------------------------------------------------- | --------- | ------------- | ------------------------------- | ----------------------------------------------------------------------------- |
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

## What I Recommend

First choose choose the **Base Distro** and then the **[Desktop Environment](https://en.wikipedia.org/wiki/Desktop_environment)** based on your preferences and needs.

This way you will not waste your time switching frequently from one distro to another, a concept known as distro-hopping, which many *Linux streamers* do these days to create content. If you want to explore other options, consider doing so on a virtual machine before making any changes.

### Easy installation: Preconfigured Linux distros

If you're looking for a family-friendly Linux option, consider using a major distribution that comes with a preinstalled desktop environment (DE) like GNOME or KDE. These distributions are well-maintained, feature robust community support, and offer a user-friendly experience.

| Distro base  | Derivative distro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arch-based   | [![EndeavourOS](/img/linux-distros/based/endeavouros.webp)](https://endeavouros.com/) [![Garuda Linux](/img/linux-distros/based/garuda-linux.webp)](https://garudalinux.com/) [![CachyOS](/img/linux-distros/based/cachyos.webp)](https://cachyos.org/) [![Manjaro](/img/linux-distros/based/manjaro.webp)](https://manjaro.org/products/download/x86)                                           |
| Debian-based | [![Linux Mint](/img/linux-distros/based/linux-mint.webp)](https://www.linuxmint.com/) [![Ubuntu](/img/linux-distros/based/ubuntu.webp)](https://ubuntu.com/download) [![Kubuntu](/img/linux-distros/based/kubuntu.webp)](https://kubuntu.org/) [![KDE neon](/img/linux-distros/based/kde-neon.webp)](https://neon.kde.org/) [![Kali Linux](/img/linux-distros/based/kali-linux.webp)](https://www.kali.org/) [![Pop OS](/img/linux-distros/based/pop-os.webp)](https://pop.system76.com/) [![Proxmox](/img/linux-distros/based/proxmox.webp)](https://www.proxmox.com/en/) |
| Fedora-based | [![Fedora Spins](/img/linux-distros/based/fedora-spins.webp)](https://fedoraproject.org/spins/) [![Nobara](/img/linux-distros/based/nobara.webp)](https://nobaraproject.org/download-nobara/)                                                                                                                                                                                                                                                                                                                 |

### Advanced installation: Minimal distros

> These installations are for advanced users and can be time-consuming

For those interested in a deeper understanding of the installation process, consider these minimal Linux distros that require manual setup via the terminal. Unlike preconfigured distributions, they offer a bare-bones environment for users to build and customize according to their needs.

- **Alpine Linux**: A lightweight, minimal, and secure distribution focused on simplicity and efficiency.
- **Arch Linux**: Provides a minimal base system for users to configure and install packages and desktop environments.
- **Debian Netinstall**: Offers a minimal Debian installation allowing users to choose software during setup.
- **Gentoo**: Features a highly customizable base where users compile software from source.
- **Slackware**: Known for its simplicity and minimalism, requiring manual configuration and software installation.

### Developer installation: Build the distro

For enthusiasts and those who enjoy a challenge, there's the exciting option to build your own Linux distribution. You can create a customized Linux distro using various tools designed for building live ISOs, such as: [archiso](https://wiki.archlinux.org/title/Archiso), [DebianLive](https://wiki.debian.org/DebianLive), [Fedora LiveCD Tools](https://github.com/livecd-tools/livecd-tools)
Alternatively, if you’re up for a more hands-on and educational experience, you can build a Linux system from scratch by following the [Linux From Scratch (LFS) documentation](https://www.linuxfromscratch.org/lfs/). This approach involves assembling every component of your Linux system manually, giving you in-depth knowledge and control over the operating system you build.

<!--
- **🐧🦑 Penguin-Calamares Mode:** Install a preconfigured distro (custom **Penguin** kernel + DE + Calamares installer).
- **🐙 Octopus Mode:** Automate the installation like an **Octopus** using bash scripting.
- **🐍 Python Mode (only with Arch):** Use a **Python** script, like `archinstall`, to interact with the shell and select packages to install from a formulary.
- 🐢 **Turtle Mode:** Build from scratch on the *shell* like a **tortoise** moving slowly but surely, enter directly to the text terminal of the OS and install manually typing commands.
-->

## References

- [What is a Linux distribution - It's FOSS](https://itsfoss.com/what-is-linux-distribution/)
- [Linux Distribution - Wikipedia](https://en.wikipedia.org/wiki/Linux_distribution)
- [Linux Distribution Timeline - Wikipedia](https://upload.wikimedia.org/wikipedia/commons/b/b5/Linux_Distribution_Timeline_21_10_2021.svg)
- [Linux Distros - ArchiveOS](https://archiveos.org/linux/)
- [Linux Distros - Interneto](https://raindrop.io/Interneto/img/linux-distros-19045213)
- [Desktop Environment - Wikipedia](https://en.wikipedia.org/wiki/Desktop_environment)
- [Desktop Environment - ArchLinux](https://wiki.archlinux.org/title/Desktop_environment)
- [Desktop Environment - Interneto](https://raindrop.io/Interneto/de-21145177)
- [Package Manager - Wikipedia](https://en.wikipedia.org/wiki/Package_manager)
