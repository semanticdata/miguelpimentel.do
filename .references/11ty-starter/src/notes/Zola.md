---
title: Zola
description: Zola is a fast static site generator in a single binary with everything built-in.
updated: 2023-12-15
compartir: true
---

# Zola

[Zola](https:) is a fast [[Static Site Generators|static site generator]] (SSG) contained in a single binary with everything built-in, it has no other dependencies. It is _by far_ my preferred way to build static websites.

SSGs use dynamic templates to transform content into static HTML pages. Static sites are thus very fast and require no databases, making them easy to host. Content is written in [[Markdown|Markdown]].

## Useful Commands

```bash
zola build --base-url $DEPLOY_URL
```

```bash
zola build --output-dir $DOCUMENT_ROOT
```

```bash
zola --config config.staging.toml build
```

```bash
zola --root /path/to/project build
```

```bash
zola init
```

```bash
zola serve
```

```bash
zola check
```
