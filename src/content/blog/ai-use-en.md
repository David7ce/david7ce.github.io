---
slug: AIs
translationKey: easy-encryption
title: 'Optimizing AI Use: Models, Workflows, and Integration'
publishDate: '2026-03-19'
description: 'How to choose AI models, optimize usage, and integrate them into real-world workflows. AI pipelines, API, MCP, and workflow automation.'
tags:
  - 'Computing'
  - 'AI'
  - 'Software'
heroImage: { src: './thumbnails/how-to-choose-ais.png', color: '#4891B2' }
language: en
---

AI today is not a single tool, but a **modular ecosystem**. The real advantage comes from designing the system well: the right model, the right format, and the right integration.

This boils down to four key decisions:

- Choose the right model for each task
- Control cost, latency, and output quality
- Integrate AI into real-world workflows (beyond chat)
- Connect tools in reproducible pipelines
- Write good prompts for the AI

---

## API vs MCP vs Integrated Platforms

| Option                           | When to Use                         | Advantages                                        | Limitations                                       |
|----------------------------------|-------------------------------------|---------------------------------------------------|---------------------------------------------------|
| **API (custom backend)**         | Production, automation, custom apps | Full control of prompts, costs, logging, security | Requires development and infrastructure           |
| **MCP (Model Context Protocol)** | Quick tool/context connection       | Easy integration, faster deployment               | Less flexible than full API                       |
| **Integrated Platform**          | Immediate team productivity         | Simple, fast adoption                             | Limited customization, less technical scalability |

---

## Optimal Workflow (AI-first)

Recommended production pipeline:

```md
User → Structured Prompt → AI Model → Structured Output (JSON/Markdown)
→ Validation (script/rules) → Internal API → App (web, mobile, GIS, etc.)
```

**Benefits:** traceability, testing, maintainability, reproducibility.

---

## AI-Friendly Formats

| Type                    | Recommended  | Why                                  |
|-------------------------|--------------|--------------------------------------|
| Structured Data         | JSON, YAML   | Direct parsing, automation           |
| Web Publishing          | HTML, CSS    | Frontend & CMS integration           |
| Content / Documentation | Markdown     | Versionable, transformable           |
| Technical Documentation | LaTeX, Typst | Semantic control, precise formatting |

> Avoid DOCX, XLSX, PPTX, PDF for AI processing: proprietary ZIP/XML structures are hard to parse reliably.

---

## GUI Apps by Domain

| Discipline                 | Application                                                                                                          |
|----------------------------|----------------------------------------------------------------------------------------------------------------------|
| General Assistant          | ChatGPT, Claude, DeepSeek, Microsoft Copilot (integrated in MS Office 365), Gemini (integrated in Google Workspaces) |
| Video Game Development     | Unity, Unreal Engine                                                                                                 |
| AI-powered code editors    | Cursor.ai, VS Code + GitHub Copilot Chat, GitHub Copilot                                                             |
| Research                   | NotebookLM                                                                                                           |
| Music                      | ElevenLabs, Suno                                                                                                     |
| Image generation (online)  | Civitai, Ideogram, Leonardo AI, Microsoft Designer, Midjourney, Pika, Runway                                         |
| Image generation (offline) | ComfyUI, CogVideo, Stable Diffusion WebUI, Fooocus, Invoek AI, OneTrainer                                            |
| Presentations              | Gamma                                                                                                                |
| AI creative suite          | Affinity Studio (by Canva), Canva, Figma, Photoshop, FreePik                                                         |

---

## LLM Models by Domain (API)

| Discipline      | Provider          | Model                          | Type        |
|-----------------|-------------------|--------------------------------|-------------|
| Audio           | ElevenLabs        | ElevenLabs                     | Proprietary |
| Audio           | Google DeepMind   | Lyria                          | Proprietary |
| Audio           | OpenAI            | Whisper                        | Open-source |
| Code            | OpenAI            | GPT-5, Codex                   | Proprietary |
| Code            | Anthropic         | Claude 3 (Opus, Sonnet, Haiku) | Proprietary |
| Code            | Google            | Gemini API                     | Proprietary |
| Code            | DeepSeek          | DeepSeek Coder                 | Open-source |
| Code            | Meta              | Llama 2/3                      | Open-source |
| Code            | MiniMax           | MiniMax                        | Proprietary |
| Image/Video     | Black Forest Labs | Flux                           | Open-source |
| Image/Video     | OpenAI            | DALL-E 3                       | Proprietary |
| Image/Video     | Stability AI      | Stable Diffusion 3             | Open-source |
| Image/Video     | Google DeepMind   | Veo                            | Proprietary |
| Image/Video     | Tencent           | Hunyuan                        | Proprietary |
| Image/Video     | Alibaba Cloud     | Qwen                           | Open-source |
| Image/Video     | Midjourney        | Midjourney                     | Proprietary |
| Text (General)  | OpenAI            | GPT-5, GPT-4                   | Proprietary |
| Text (General)  | Anthropic         | Claude 3 Opus                  | Proprietary |
| Text (General)  | Google            | Gemini Pro                     | Proprietary |
| Text (General)  | Meta              | Llama 3                        | Open-source |
| Text (General)  | DeepSeek          | DeepSeek Chat                  | Open-source |
| Text (Analysis) | Anthropic         | Claude 3 Opus (200k context)   | Proprietary |
| Text (Analysis) | Google            | Gemini 1.5 Pro                 | Proprietary |
| Embedding       | OpenAI            | text-embedding-3-large         | Proprietary |
| Embedding       | Anthropic         | Claude Embedding               | Proprietary |
| Embedding       | Google            | Gemini Embedding               | Proprietary |

*Useful model comparison tools:**

- [Arena AI Leaderboard](https://arena.ai/leaderboard)  
- [OpenRouter Model Pricing](https://openrouter.ai/models?order=most-popular)  
- [Price Per Token (API)](https://pricepertoken.com/)

---

## Optimization Strategy

**Cost:**

- Reduce token usage via targeted prompts
- Reuse context where possible
- Cache repetitive responses

**Quality:**

- Structured prompts
- Request outputs in JSON/Markdown
- Break complex tasks into subtasks

**Architecture:**

- Separate generation (AI) from execution
- Modular, observable pipelines
- Version prompts, schemas, scripts with Git

---

## Prompt Engineering + Agent Configuration Rules

Strong results come from **clear prompts**, **well-scoped agents**, and **explicit constraints**.

### Prompt writing rules

- Define objective, audience, and expected output format
- Add constraints (length, tone, schema, acceptance criteria)
- Provide context files/data and state what is source of truth
- Ask for structured outputs (JSON/Markdown/tables) when automation is needed
- Break large tasks into steps instead of one overloaded prompt

### Agent + skill configuration rules

- Use one agent per responsibility (e.g., research, coding, review)
- Keep skill instructions explicit, versioned, and testable
- Restrict tools per agent to reduce risky or irrelevant actions
- Define handoff contracts between agents (input/output schema)
- Log runs and keep prompt/skill changes in Git for reproducibility

### What not to do

- Don’t use vague prompts like “improve this” without acceptance criteria
- Don’t mix unrelated goals in one agent run
- Don’t give write permissions to exploration-only agents
- Don’t rely on hidden context; pass required files and assumptions explicitly
- Don’t optimize only for model IQ while ignoring workflow design and validation

---

## Conclusion

Competitive advantage is in **workflow architecture**, not just model choice:

- How AI is integrated  
- How data is structured  
- How execution is automated  

**Recommended Stack:**

- Choose price-performance optimized model (Claude Opus, GPT Codex, etc.)
- API for real automation
- JSON/Markdown as operational foundation
- Modular pipeline with validation

This enables scaling from personal projects to complex production systems.

---

## Sources

- [MCP Introduction](https://modelcontextprotocol.io/docs/getting-started/intro)
- [OpenRouter Models](https://openrouter.ai/models?order=most-popular)
- [OpenRouter Rankings](https://openrouter.ai/rankings#leaderboard)
