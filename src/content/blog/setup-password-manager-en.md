---
title: Setup password manager
slug: setup-password-manager-en
translationKey: setup-password-manager
publishDate: '2023-06-11'
updatedDate: '2025-06-03'
description: 'Setting up a password manager in a secure and private way'
tags:
  - 'Computing'
  - 'Productivity'
heroImage: { src: './thumbnails/password-manager.jpg', color: '#4891B2' }
language: en
---

## Setting up a password manager

This guide is for choosing and setting up a password manager without turning it into a complicated project. If your top priority is privacy and control, local-first apps are usually the best route. If your top priority is convenience and seamless sync across devices, an online service may fit you better.

For local use, the KeePass ecosystem is still one of the strongest options: [KeePass](https://keepass.info/), [KeePassXC](https://keepassxc.org/), and [KeePassDX](https://www.keepassdx.com/). KeePass and KeePassXC are great on desktop, while KeePassDX is excellent on Android. They all revolve around the `.kdbx` format, which means you can move your vault between compatible apps instead of being locked into one vendor.

The main benefit of this approach is ownership. Your encrypted vault stays where you decide, and you control backups and sync. You still get modern essentials such as strong password generation, folders/tags, custom fields, and autofill depending on the client you use. The trade-off is responsibility: you need a backup routine and a sync strategy that works for your devices.

If you prefer a fully managed experience, online managers make sense. [Bitwarden](https://bitwarden.com/) is a very balanced choice for transparency and value, while [1Password](https://1password.com/) stands out for polish, integrations, and family/team workflows. If you already use Proton services, [Proton Pass](https://proton.me/pass) is also worth a look. In any cloud setup, the basics are the same: use a strong master password, enable 2FA, and review trusted devices regularly.

I used to keep credentials in an encrypted spreadsheet, and it can work for very simple cases, but it quickly becomes painful in real life. You miss good password generation, secure autofill, and clean organization as accounts grow. For most people, a dedicated password manager is both safer and easier.

A quick decision rule is simple: if you want maximum control and minimal data exposure, go with KeePass/KeePassXC/KeePassDX; if you want effortless syncing and less maintenance, go with Bitwarden or 1Password. Neither path is perfect, but both are far better than reusing passwords.

### Your master password is everything

No matter which app you choose, your security depends on the master password. Use a long passphrase that is easy for you to remember but hard for others to guess. If forgetting is a concern, keep a private hint that only you can decode, and store backup copies of your vault in more than one safe location.

If you start today, keep it practical: add your most important accounts, enable 2FA in the manager, and rotate critical passwords first (email, banking, and primary social accounts). That alone gives you a major security upgrade.
