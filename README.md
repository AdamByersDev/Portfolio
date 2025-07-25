# ABD Next.js Template

This is a developer-friendly **Next.js** template built by **ABD**. It comes pre-configured with:

- **Next.js** (App Router)
- **MUI (Material UI)** for theming and components
- **Prettier + ESLint** integration for code formatting
- **Jest** testing configured with next/jest
- A default metadata setup, theme configuration, and logical file structure

---

## Project Structure

```
📁 public/            → Static assets (icons, images, etc.)
📁 app/               → App Router pages, layouts, and metadata
📁 components/        → Reusable UI components
📁 lib/               → Utility functions and MUI theme
📄 .eslintrc          → ESLint + Prettier rules
📄 .prettierrc        → Prettier formatting config
📄 .prettierignore    → Prettier ingore config
```

---

## Features

### Metadata

- Built-in `generateMetadata()` for SEO
- Includes Open Graph, Twitter, and JSON-LD structured data

### Theming

- Centralized MUI theme in `/lib/theme.js`
- Custom fonts using `next/font/google` with CSS variables
- Responsive, consistent color and typography system

### Linting & Formatting

- ESLint with `next/core-web-vitals` and Prettier plugin
- Auto-fix and format support via script and VS Code integration

### Testing

- Jest configured to run tests with Babel and jsdom
- Supports `.js`, `.jsx` test files
- Example test provided using MUI and Testing Library
- Run tests with:

```bash
npm test
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

---

## Available Commands

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `npm run dev`    | Start development server with Turbopack  |
| `npm run build`  | Build for production                     |
| `npm run start`  | Serve production build                   |
| `npm run lint`   | Run ESLint on the project                |
| `npm run format` | Auto-fix ESLint and format with Prettier |
| `npm test`       | Run Jest unit tests                      |

---

## VS Code Recommended Setup

Install these extensions:

- ESLint
- Prettier

A settings file is already located in the `.vscode` folder for easy usage

---

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it with attribution.
