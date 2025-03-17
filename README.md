# React + TypeScript + Vite + Shadcn + Tailwindcss

- npm create vite@latest
- npm install tailwindcss @tailwindcss/vite

  //This is how this repo was made, using vite + tailwindcss + shadcn

### Edit tsconfig.json file

The current version of Vite splits TypeScript configuration into three files, two of which need to be edited. Add the `baseUrl` and `paths` properties to the `compilerOptions` section of the `tsconfig.json` and `tsconfig.app.json` files:

```
{  "files": [],  "references": [    {      "path": "./tsconfig.app.json"    },    {      "path": "./tsconfig.node.json"    }  ],  "compilerOptions": {    "baseUrl": ".",    "paths": {      "@/*": ["./src/*"]    }  }}
```

### Edit tsconfig.app.json file

Add the following code to the `tsconfig.app.json` file to resolve paths, for your IDE:

```
{  "compilerOptions": {    // ...    "baseUrl": ".",    "paths": {      "@/*": [        "./src/*"      ]    }    // ...  }}
```

### Update vite.config.ts

Add the following code to the vite.config.ts so your app can resolve paths without error:

pnpmnpmyarnbun

```
npm install -D @types/node
```

vite.config.ts

```
import path from "path"import tailwindcss from "@tailwindcss/vite"import react from "@vitejs/plugin-react"import { defineConfig } from "vite"// https://vite.dev/config/export default defineConfig({  plugins: [react(), tailwindcss()],  resolve: {    alias: {      "@": path.resolve(__dirname, "./src"),    },  },})
```

### Run the CLI

Run the `shadcn` init command to setup your project:

pnpmnpmyarnbun

```
npx shadcn@latest init
```

### Add Components

You can now start adding components to your project.

pnpmnpmyarnbun

```
npx shadcn@latest add button
```

//--------------------------

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
