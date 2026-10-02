---
title: 'Encode / Decode'
slug: encode-decode
translationKey: encode-decode
description: 'What encoding and decoding are, the formats you meet every day (UTF-8, Base64, URL encoding) and how to convert between them.'
publishDate: 2023-10-26
updatedDate: 2026-10-02
tags: ['Computing', 'Software']
heroImage: { src: './thumbnails/encode-decode.jpg', color: '#4891B2' }
language: en
---

## What encoding means

**Encoding** turns information into a format that can be stored or transmitted, and **decoding** turns it back. The idea is everywhere: Morse code encodes letters, a barcode encodes a number, and even DNA encodes proteins in three-letter groups that cells decode. In computing everything ends up as bytes, and an encoding is simply the agreement about what those bytes mean.

## Encoding, encryption and hashing are not the same

| Type | Purpose | Reversible? | Needs a key? | Examples |
| --- | --- | --- | --- | --- |
| **Encoding** | Represent data in a format | Yes | No | UTF-8, Base64, URL encoding |
| **Encryption** | Keep data secret | Yes, with the key | Yes | AES, GPG (see [Password manager and easy encryption](/en/post/easy-encryption)) |
| **Hashing** | Fingerprint data, check integrity | No | No | SHA-256 |

The most common mistake is treating an encoding as protection: **anyone can decode Base64**, so it hides nothing.

## Formats you meet every day

- **UTF-8** is how text becomes bytes. A letter takes one to four bytes: `A` is `41`, `é` is `C3 A9`, `€` is `E2 82 AC` and `😀` is `F0 9F 98 80`. Read those bytes with the wrong encoding and you get the classic garbled text: `café` shown as `cafÃ©`.
- **Base64** carries binary data inside plain text (e-mail attachments, `data:` URLs, JSON, tokens). Every 3 bytes become 4 printable characters, so the result is about a third bigger. `Hello` becomes `SGVsbG8=`.
- **URL (percent) encoding** replaces unsafe characters with `%` and the byte in hexadecimal: `café & té` becomes `caf%C3%A9%20%26%20t%C3%A9`.
- **Hexadecimal and binary** are just other ways to write bytes: `Hi` is `48 69` in hex and `01001000 01101001` in binary.

## Try it yourself

In a Linux or macOS terminal:

```bash
echo -n "Hello" | base64        # SGVsbG8=
echo "SGVsbG8=" | base64 -d     # Hello
```

In PowerShell:

```powershell
[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("Hello"))
# SGVsbG8=
[Text.Encoding]::UTF8.GetString([Convert]::FromBase64String("SGVsbG8="))
# Hello
```

In Python:

```python
import base64, urllib.parse

base64.b64encode("café".encode("utf-8")).decode()   # 'Y2Fmw6k='
urllib.parse.quote("café & té")                      # 'caf%C3%A9%20%26%20t%C3%A9'
```

To experiment without writing code, [CyberChef](https://gchq.github.io/CyberChef/) runs in the browser and chains many encodings and decodings.

## Common mistakes

- **Using Base64 as encryption.** It is reversible by anyone; use real encryption if the data is secret.
- **Encoding twice.** A `%20` that gets encoded again becomes `%2520`.
- **Not stating the encoding.** Save files as UTF-8, declare `<meta charset="utf-8">` in web pages and, in Python, open text files with `encoding="utf-8"` instead of relying on the system default (on Windows it is often a legacy code page).

## In short

Encoding is only a format agreement: it makes data portable, not secret. Knowing which one you are looking at (UTF-8, Base64, percent-encoding, hex) is most of the work when something looks garbled.
