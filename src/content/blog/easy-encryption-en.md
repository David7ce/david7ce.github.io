---
slug: easy-encryption
translationKey: easy-encryption
title: Password manager and easy encryption
publishDate: '2023-11-15'
updatedDate: '2026-10-02'
description: 'Set up a password manager and encrypt your files in a simple way.'
tags:
  - 'Computing'
  - 'Software'
  - 'Productivity'
heroImage: { src: './thumbnails/password-manager.jpg', color: '#4891B2' }
language: en
---

## 1. Set up a password manager

This guide is for choosing and setting up a password manager without turning it into a complicated project. If your top priority is privacy and control, local-first apps are usually the best route. If your top priority is convenience and seamless sync across devices, an online service may fit you better.

For local use, the KeePass ecosystem is still one of the strongest options: [KeePass](https://keepass.info/), [KeePassXC](https://keepassxc.org/), and [KeePassDX](https://www.keepassdx.com/). KeePass and KeePassXC are great on desktop, while KeePassDX is excellent on Android. They all revolve around the `.kdbx` format, which means you can move your vault between compatible apps instead of being locked into one vendor.

The main benefit of this approach is ownership. Your encrypted vault stays where you decide, and you control backups and sync. You still get modern essentials such as strong password generation, folders/tags, custom fields, and autofill depending on the client you use. The trade-off is responsibility: you need a backup routine and a sync strategy that works for your devices.

If you prefer a fully managed experience, online managers make sense. [Bitwarden](https://bitwarden.com/) is a very balanced choice for transparency and value, while [1Password](https://1password.com/) stands out for polish, integrations, and family/team workflows. If you already use Proton services, [Proton Pass](https://proton.me/pass) is also worth a look. In any cloud setup, the basics are the same: use a strong master password, enable 2FA, and review trusted devices regularly.

I used to keep credentials in an encrypted spreadsheet, and it can work for very simple cases, but it quickly becomes painful in real life. You miss good password generation, secure autofill, and clean organization as accounts grow. For most people, a dedicated password manager is both safer and easier.

A quick decision rule is simple: if you want maximum control and minimal data exposure, go with KeePass/KeePassXC/KeePassDX; if you want effortless syncing and less maintenance, go with Bitwarden or 1Password. Neither path is perfect, but both are far better than reusing passwords.

### Your master password is everything

No matter which app you choose, your security depends on the master password. Use a long passphrase that is easy for you to remember but hard for others to guess. If forgetting is a concern, keep a private hint that only you can decode, and store backup copies of your vault in more than one safe location.

If you start today, keep it practical: add your most important accounts, enable 2FA in the manager, and rotate critical passwords first (email, banking, and primary social accounts). That alone gives you a major security upgrade.

## 2. Encrypt files easily

In today's digital age, safeguarding sensitive information is paramount. Whether it's personal documents, financial records, or confidential communications, encryption provides a crucial layer of security to prevent unauthorized access and protect privacy. While there are various methods available for encrypting files, the focus here is on simple yet effective approaches accessible to all users.

### Method 1: Using LibreOffice Calc with Password Protection

One straightforward method for encrypting files is by leveraging the password protection feature offered by software like LibreOffice Calc. By creating an ODS (OpenDocument Spreadsheet) file and applying password protection during the saving process, users can encrypt their data easily.

#### Steps to Encrypt with LibreOffice Calc

1. Create or open the file you want to encrypt in LibreOffice Calc.
2. Navigate to the "File" menu and select "Save As."
3. Choose the desired file format (e.g., ODS).
4. Enable the "Save with password" option and enter a strong password.
5. Save the file, ensuring it's securely encrypted and protected from unauthorized access.

### Method 2: Utilizing GPG Key Encryption

For users seeking more advanced encryption capabilities, GPG (GNU Privacy Guard) provides a robust solution for encrypting files using public-key cryptography. GPG allows users to generate cryptographic keys, encrypt files, and securely exchange sensitive data over various channels.

#### Advantages of GPG Encryption

- Strong cryptographic protection against unauthorized access.
- Utilizes public-key infrastructure for secure data exchange.
- Flexible key management options, including key revocation and expiration.

#### Limitations and Considerations

- Requires familiarity with command-line tools and cryptographic concepts.
- Key management and key distribution may present challenges for novice users.
- Compatibility issues may arise when exchanging encrypted files with non-GPG users.

### Pros and Cons of Easy Encryption Methods

#### Pros

- Provides a simple and accessible way to encrypt files without specialized software.
- Protects sensitive data from unauthorized access and prying eyes.
- Enables users to maintain control over their encryption keys and access permissions.

#### Cons

- Limited encryption strength compared to more advanced cryptographic methods.
- Vulnerable to brute-force attacks if weak passwords are used.
- Lacks features such as password generation, password hiding, and real-time synchronization.

## Conclusion

While easy encryption methods like those offered by LibreOffice Calc and GPG provide a convenient way to protect files, they may not offer the same level of security as more robust encryption solutions. Users should assess their security needs and choose encryption methods accordingly, considering factors such as encryption strength, usability, and compatibility with their workflow.

By understanding the advantages, limitations, and best practices associated with various encryption methods, users can make informed decisions to safeguard their sensitive data effectively and maintain privacy in an increasingly digital world.

The two go together: keep the strong passphrases you use to encrypt files in your password manager, so a single master password protects the rest.
