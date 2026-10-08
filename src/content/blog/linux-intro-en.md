---
slug: linux-intro
translationKey: linux-intro
title: Linux introduction
publishDate: '2022-06-18'
updatedDate: '2026-10-02'
description: 'Linux for beginners: what it is, how to choose a distro and how to install software.'
tags:
  - 'Computing'
  - 'Linux'
heroImage: { src: './thumbnails/linux-intro.webp', color: '#4891B2' }
language: en
---

<style>
  table a { margin: 5px; }
  table img { display: inline-block; width: 30px; height: auto; }
</style>

## Introduction to Linux

Linux can seem technical and confusing, but it's simpler than you think. At its core, Linux is an operating system (OS) - the essential software that allows you to use devices like computers, tablets, and even some TVs and microwaves. While simpler devices have basic operating systems, personal computers have more complex ones.

Most people use Windows or macOS on their computers and Android or iOS on their phones. However, Linux is the go-to OS for servers, powering over 90% of them. Servers are computers that provide internet services, and they often run Linux because it's efficient, standardized, and free.

Though Linux isn't as common on personal computers, it forms the base of Android and is renowned for being open source and customizable.

## What is Linux?

Linux, technically, refers to the kernel, the core part of an OS that interacts with hardware. The full OS is called GNU/Linux. This name comes from the GNU project started by Richard Stallman in the 80s to create a free OS and Linus Torvalds, who developed the Linux kernel.

Linux is different from Windows and macOS in that it's mostly free and open-source software (FOSS). This means the code is available for anyone to use, modify, and distribute.

## Linux Distros

One of the first concept you encounter when you want to install Linux is the "Linux distro". The distribution or distro is a concept to group all parts of an Operating System as one disk image ready to be downloaded and facilitate the installation,it is associated with Linux and also with BSD family OS.

In this article, we will talk specifically about Linux distributions.

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

### Main Linux base distros

While there are hundreds of Linux distributions, the majority are based on these ten foundational Linux base distros.

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

### What I Recommend

First choose choose the **Base Distro** and then the **[Desktop Environment](https://en.wikipedia.org/wiki/Desktop_environment)** based on your preferences and needs.

This way you will not waste your time switching frequently from one distro to another, a concept known as distro-hopping, which many *Linux streamers* do these days to create content. If you want to explore other options, consider doing so on a virtual machine before making any changes.

#### Easy installation: Preconfigured Linux distros

If you're looking for a family-friendly Linux option, consider using a major distribution that comes with a preinstalled desktop environment (DE) like GNOME or KDE. These distributions are well-maintained, feature robust community support, and offer a user-friendly experience.

| Distro base  | Derivative distro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arch-based   | [![EndeavourOS](/img/linux-distros/based/endeavouros.webp)](https://endeavouros.com/) [![Garuda Linux](/img/linux-distros/based/garuda-linux.webp)](https://garudalinux.org/) [![CachyOS](/img/linux-distros/based/cachyos.webp)](https://cachyos.org/) [![Manjaro](/img/linux-distros/based/manjaro.webp)](https://manjaro.org/products/download/x86)                                           |
| Debian-based | [![Linux Mint](/img/linux-distros/based/linux-mint.webp)](https://www.linuxmint.com/) [![Ubuntu](/img/linux-distros/based/ubuntu.webp)](https://ubuntu.com/download) [![Kubuntu](/img/linux-distros/based/kubuntu.webp)](https://kubuntu.org/) [![KDE neon](/img/linux-distros/based/kde-neon.webp)](https://neon.kde.org/) [![Kali Linux](/img/linux-distros/based/kali-linux.webp)](https://www.kali.org/) [![Pop OS](/img/linux-distros/based/pop-os.webp)](https://pop.system76.com/) [![Proxmox](/img/linux-distros/based/proxmox.webp)](https://www.proxmox.com/en/) |
| Fedora-based | [![Fedora Spins](/img/linux-distros/based/fedora-spins.webp)](https://fedoraproject.org/spins/) [![Nobara](/img/linux-distros/based/nobara.webp)](https://nobaraproject.org/download-nobara/)                                                                                                                                                                                                                                                                                                                 |

#### Advanced installation: Minimal distros

> These installations are for advanced users and can be time-consuming

For those interested in a deeper understanding of the installation process, consider these minimal Linux distros that require manual setup via the terminal. Unlike preconfigured distributions, they offer a bare-bones environment for users to build and customize according to their needs.

- **Alpine Linux**: A lightweight, minimal, and secure distribution focused on simplicity and efficiency.
- **Arch Linux**: Provides a minimal base system for users to configure and install packages and desktop environments.
- **Debian Netinstall**: Offers a minimal Debian installation allowing users to choose software during setup.
- **Gentoo**: Features a highly customizable base where users compile software from source.
- **Slackware**: Known for its simplicity and minimalism, requiring manual configuration and software installation.

#### Developer installation: Build the distro

For enthusiasts and those who enjoy a challenge, there's the exciting option to build your own Linux distribution. You can create a customized Linux distro using various tools designed for building live ISOs, such as: [archiso](https://wiki.archlinux.org/title/Archiso), [DebianLive](https://wiki.debian.org/DebianLive), [Fedora LiveCD Tools](https://github.com/livecd-tools/livecd-tools)
Alternatively, if you’re up for a more hands-on and educational experience, you can build a Linux system from scratch by following the [Linux From Scratch (LFS) documentation](https://www.linuxfromscratch.org/lfs/). This approach involves assembling every component of your Linux system manually, giving you in-depth knowledge and control over the operating system you build.

<!--
- **🐧🦑 Penguin-Calamares Mode:** Install a preconfigured distro (custom **Penguin** kernel + DE + Calamares installer).
- **🐙 Octopus Mode:** Automate the installation like an **Octopus** using bash scripting.
- **🐍 Python Mode (only with Arch):** Use a **Python** script, like `archinstall`, to interact with the shell and select packages to install from a formulary.
- 🐢 **Turtle Mode:** Build from scratch on the *shell* like a **tortoise** moving slowly but surely, enter directly to the text terminal of the OS and install manually typing commands.
-->

## Installing Software on Linux

To set up your own Linux OS, you need:

1. The system core (kernel)
2. System launcher (like systemd)
3. Drivers for hardware
4. Desktop environment (like GNOME or KDE)
5. Basic apps (file manager, browser, etc.)

Linux uses package managers to install software. Common ones include `apt` for Debian-based distros and `pacman` for Arch-based ones. You can install software via terminal commands, downloading packages, or using scripts.

## Customizing Linux (Ricing)

Linux is highly customizable. You can tweak the interface and functions extensively, a practice known as "ricing." Communities like [r/UnixPorn](https://www.reddit.com/r/unixporn) showcase these customizations.

## Pros and Cons

**Advantages:**

- Open source and free
- Secure against malware
- Large supportive community

**Disadvantages:**

- Some hardware and software compatibility issues
- Fewer proprietary applications available

## Learning Linux

Using Linux, especially a distro like Arch, teaches you a lot about how computers work. It's great for privacy, efficiency, and minimalism.

## Conclusion

Linux offers a secure, customizable, and free operating system with a strong community. It might take some time to adapt, but once you do, you'll likely appreciate its flexibility and power.

## Useful Links

- [GNU Philosophy (Open Source)](https://www.gnu.org/philosophy/open-source-misses-the-point.en.html)
- [List of apps - Arch Linux](https://wiki.archlinux.org/title/List_of_applications)
- [Linux distros list - LWN](https://lwn.net/Distributions/)
- [Linux distros list - Wikipedia](https://en.wikipedia.org/wiki/List_of_Linux_distributions)
- [What is a Linux distribution - It's FOSS](https://itsfoss.com/what-is-linux-distribution/)
- [Linux Distribution - Wikipedia](https://en.wikipedia.org/wiki/Linux_distribution)
- [Linux Distribution Timeline - Wikipedia](https://commons.wikimedia.org/wiki/File:Linux_Distribution_Timeline_21_10_2021.svg)
- [Linux Distros - ArchiveOS](https://archiveos.org/linux/)
- [Desktop Environment - Wikipedia](https://en.wikipedia.org/wiki/Desktop_environment)
- [Desktop Environment - ArchLinux](https://wiki.archlinux.org/title/Desktop_environment)
- [Package Manager - Wikipedia](https://en.wikipedia.org/wiki/Package_manager)
