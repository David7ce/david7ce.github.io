---
title: The Linux dilemma
publishDate: 2024-09-05
description: 'The Linux vs. Windows Dilemma: What I Miss and What I Love About Linux'
tags:
  - 'Computing'
  - 'OS'
heroImage: { src: './thumbnails/linux-dilemma.jpg', color: '#4891B2' }
language: 'English'
---


As a web developer student using both Windows and Linux, I've spent a lot of time exploring the strengths and weaknesses of each operating system. While Linux has become my preferred environment for coding and productivity, there are some things I dearly miss from my time on Windows. Whether it's the seamless user experience of certain software or the struggles with bleeding-edge updates, both platforms offer unique pros and cons.

## What I Miss on Linux

### Some "standard" apps and famous games not compatible

> MusicBee, Affinity Photo, Guitar Pro can be used with WINE but it is not a good experience. And Windows games with kernel-level anticheat are incompatible with Linux kernel.

1. Affinity Photo or Adobe Photos: Professional Photo Editing
Affinity Photo is an affordable yet professional-grade photo editing tool that rivals Adobe Photoshop in functionality. It’s widely praised for its powerful features, great performance, and budget-friendly pricing model. On Linux, we do have GIMP, but it’s not quite the same. While GIMP is powerful and open-source, its user interface and workflow can feel clunky in comparison to Affinity Photo’s smoother experience. For anyone working extensively with photo editing, this lack of polished software can feel limiting.

2. FL Studio (FruityLoops): A Music Production Gap
Another area where Linux falls short is in professional music production software like **FL Studio** (formerly FruityLoops), a popular Digital Audio Workstation (DAW) for musicians and producers. FL Studio offers a polished interface, extensive plugin support, and industry-standard tools that make it a favorite among music creators. Unfortunately, there is no native Linux version, and while it can be run through **Wine** or **Proton**, the performance and stability aren’t guaranteed. While Linux has alternatives like **LMMS** or **Ardour**, they don't fully match the depth and versatility of FL Studio, which is a significant gap for professional and hobbyist producers alike.

3. Guitar Pro: For Musicians and Guitarists
As a guitarist, I enjoy using Guitar Pro, a robust tool for creating, playing, and sharing guitar tablature and sheet music. Unfortunately, Guitar Pro doesn't have a native Linux version. Alternatives like TuxGuitar exist, but they lack the same level of features, user experience, and support as Guitar Pro. For musicians, the absence of industry-standard tools like this on Linux can be a real hindrance.

4. MusicBee: The  Music Player
MusicBee is one of the Ultimatebest music management software available for Windows. With a sleek interface, powerful customization options, and efficient library management, it's a favorite among audiophiles. Unfortunately, there isn't a direct Linux equivalent that matches MusicBee’s polish and functionality. While alternatives like Rhythmbox or Clementine exist, they fall short in terms of features and UI design, making MusicBee one of the few things I miss when working in Linux.

5. Kernel-level anti-cheat Games (Fortnite, Valorant, etc.): A Gaming Roadblock
One of the main challenges of gaming on Linux is the lack of support for kernel-level anti-cheat technologies used by popular games like **Fortnite** and **Valorant**. While this enhances security and privacy—since kernel-level access poses risks—it also means these games are unplayable on Linux, limiting the system's appeal to a large gaming audience. Despite significant progress with tools like **Steam Proton** that enable many Windows games to run on Linux, anti-cheat software often breaks compatibility, forcing gamers to either dual-boot with Windows or miss out on these titles, a significant drawback for gaming enthusiasts on Linux.

### Broken Packages and Graphics Glitches: Bleeding Edge Woes

Running Linux means you’re often on the cutting edge of software development. While this is great for getting the latest features, it can also lead to stability issues. Package managers like APT, Pacman, or DNF sometimes serve broken or incompatible packages, especially when using distributions like Arch or Fedora that prioritize newer software versions. This can lead to frustrating experiences, especially with graphics drivers, where a bleeding-edge update might cause crashes, screen tearing, or underperformance. While these issues can be resolved, the troubleshooting process is time-consuming and sometimes complex, especially for less-experienced users.

---

## What I Love About Linux

Despite these challenges, Linux has a philosophy that aligns with my values and offers several advantages over Windows.

### 1. Open-Source Philosophy

One of the core tenets of Linux is its open-source nature. I love how the operating system and most of its software are developed by communities rather than corporations. This promotes transparency, control, and flexibility. With Linux, I know exactly what’s running on my machine, and I can modify or tweak things to my liking. This contrasts with Windows, where much of the software is closed-source and proprietary, limiting what you can do with it.

### 2. Secure and Private by Design

Security and privacy are major concerns in the digital age. Linux, by its very nature, is a much more secure environment than Windows. It’s less prone to malware and doesn’t come with the same invasive telemetry (data collection) practices that Windows has been criticized for. This gives me peace of mind, knowing that my system isn’t constantly tracking me or sharing data with third parties.

### 3. Optimized and Resource-Efficient

Another significant advantage of Linux is its efficiency. Unlike Windows, which can feel sluggish over time and requires more hardware resources, Linux is lightweight and optimized. It runs smoothly even on older hardware, and you can choose a distribution that suits your needs, whether it’s a full-featured desktop environment or a minimal setup for maximum performance. On Linux, I can feel that every bit of system resource is utilized efficiently, whereas Windows tends to consume more resources for background services and features I rarely use.

### 4. Customizability and Control

One of the greatest joys of using Linux is how customizable it is. Whether it’s changing the desktop environment, modifying the terminal shell, or tweaking system services, Linux offers unparalleled control over how your system operates. With the right configuration, you can tailor Linux to fit your exact needs, making it a more personalized experience than Windows.

---

## A Balancing Act: Linux with Alternatives

Despite missing certain tools and facing occasional technical hurdles, I’ve found that with the right configuration and open-source alternatives, Linux can still be the better choice for me. Here's why:

### 1. Software Alternatives + cross-platform apps

For every piece of software I miss on Linux, there's often an open-source alternative or a proprietary app that’s also developed for Linux. While these alternatives may not always be perfect matches for their Windows or macOS counterparts, they generally offer enough functionality to keep me productive. The main challenges arise in specific areas like graphic design, music production, and video production, where Linux still lags behind in terms of variety and polish. Here’s a breakdown of Linux apps by category, many of which work exceptionally well:

- **Software Development**: Docker, Meld, VirtualBox, Virt-Manager, VSCode
- **Game Development**: Godot, Unreal Engine
- **Graphic Design**: GIMP, Darktable, Photopea (online), Blender, Inkscape, Krita
- **Music Production**: LMMS, Bitwig Studio, MuseScore, Audacious
- **Video Production**: Kdenlive, DaVinci Resolve
- **Gaming**: Steam, Lutris, Heroic
- **Office Tools**: LibreOffice, Obsidian.md, Calibre, Gramps, Okular, Speech Note
- **Internet-related**: Chromium, Firefox, MEGA, Telegram, qBittorrent

While Linux offers great alternatives for many fields, it's in creative production where the gaps are more noticeable compared to the wider selection of professional tools available on Windows and macOS.

### 2. Gaming Progress on Linux

While anti-cheat games remain a problem, gaming on Linux has improved dramatically in recent years. Tools like Lutris and Steam Proton have made it possible to run many Windows games seamlessly on Linux. It may not be perfect, but the progress is promising, and it’s no longer a complete dealbreaker for casual gaming.

### 3. Customizing for Stability

To avoid issues with bleeding-edge software, I’ve learned to carefully configure my Arch system for reliability. I stick primarily to official Arch repositories for stable packages and selectively use trusted ones from the AUR. Additionally, I implement regular system backups using **BTRFS** snapshots, ensuring that my configuration files and system state are always recoverable in case of any issues. Monitoring graphics drivers and kernel updates closely is another key step, as this helps prevent the common pitfalls of instability, reducing the need for troubleshooting broken packages and ensuring a smoother experience.

---

## Conclusion: A Personal Choice

At the end of the day, both Linux and Windows have their advantages and trade-offs. Linux’s open-source philosophy, security, and efficiency make it an ideal platform for me as a developer. On the other hand, Windows offers software compatibility and a polished experience that’s hard to match on Linux.

While I can’t stay fully satisfied with either platform, I’ve found that Linux—with the right alternatives and a well-configured system—offers a better balance overall. It may require some compromises and extra effort, but the control, security, and optimization it provides make it worth the trade-off.
