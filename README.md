# Yoda

<img width="513" alt="Yoda Documentation" src="https://github.com/Nestio/chuck/assets/24778724/e2db5b09-0a4e-4b2f-af13-6d112517bc4c">

Welcome to Yoda, the public developer documentation repository for Funnel Online Leasing! This repository is designed to provide our customers with comprehensive and up-to-date documentation for utilizing Funnel's Online Leasing services. We use Astro with the Starlight template to ensure a modern, fast, and easy-to-navigate documentation experience.

**Published documentation can be found at [https://funnel-dev-doc.netlify.app/](https://funnel-dev-doc.netlify.app/)**

## 📚 Table of Contents
- [🌟 Project Overview](#-project-overview)
- [⚙️ Installation](#%EF%B8%8F-installation)
- [🚀 Usage](#-usage)
- [📁 Project Structure](#-project-structure)
- [🧞 Commands](#-commands)
- [👀 Want to learn more?](#-want-to-learn-more)

## 🌟 Project Overview

Yoda is built using Astro, a modern static site generator, and the Starlight template, which offers a clean and user-friendly design. This combination allows us to provide a seamless and efficient documentation experience for our customers.

## ⚙️ Installation

To get started with Yoda, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/yoda.git
    cd yoda
    ```

2. **Install Node.js v20.3.0:**

    Ensure you have Node.js v20.3.0 installed. You can use [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions:

    ```bash
    nvm install 20.3.0
    nvm use 20.3.0
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## 🚀 Usage

To run the documentation site locally and start making edits:

1. **Start the development server:**

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:4321` to view the site.

3. Make changes to the documentation content or site configuration as needed. The development server will automatically reload to reflect your changes.

## 📁 Project Structure

Inside this Yoda project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

- **`public/`**: Static assets like favicons and images.
- **`src/assets/`**: Project-specific assets. Images can be added here and embedded in Markdown with a relative link.
- **`src/content/docs/`**: Documentation files in `.md` or `.mdx` format. Each file is exposed as a route based on its file name.
- **`src/content/config.ts`**: Configuration file for documentation.
- **`astro.config.mjs`**: Astro configuration file.
- **`package.json`**: Project dependencies and scripts.
- **`tsconfig.json`**: TypeScript configuration file.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds your production site to `./dist/`         |
| `npm run preview`         | Previews your build locally, before deploying    |
| `npm run astro ...`       | Runs CLI commands like `astro add`, `astro check`|
| `npm run astro -- --help` | Gets help using the Astro CLI                    |

## 👀 Want to learn more?

- Check out [Starlight’s docs](https://starlight.astro.build/).
- Read the [Astro documentation](https://docs.astro.build).
- Join the [Astro Discord server](https://astro.build/chat).

Feel free to explore, contribute, and provide feedback to help us improve the documentation and overall user experience.