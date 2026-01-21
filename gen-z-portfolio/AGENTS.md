# Agentic Coding Guidelines

This document serves as the primary source of truth for AI agents operating within this repository. Adherence to these guidelines is mandatory to ensure code consistency, maintainability, and stability.

## 1. Environment & Build Commands

### Runtime Environment
- **Node.js**: Ensure compatibility with Node.js LTS.
- **Package Manager**: `npm` is the designated package manager. Do not use `yarn` or `pnpm` unless explicitly instructed to migrate.

### Core Commands
Agents must use the following commands for development and verification:

- **Build**: 
  ```bash
  npm run build
  ```
  *Usage*: Run this command to verify that changes do not break the Next.js build process. This checks for type errors and build-time issues.

- **Lint**: 
  ```bash
  npm run lint
  ```
  *Usage*: Execute this before committing changes to ensure adherence to ESLint rules. Fix any reported issues.

- **Development Server**: 
  ```bash
  npm run dev
  ```
  *Usage*: Starts the local development server on `http://localhost:3000`.

- **Test**: 
  *Status*: No test runner (Jest/Vitest) is currently configured in `package.json`. 
  *Action*: If asked to write tests, first verify if a test harness has been added. If not, propose setting one up (e.g., Vitest + React Testing Library).

## 2. Code Style & Conventions

### Architecture & Structure
- **Framework**: Next.js 16+ (App Router).
- **Directory Layout**:
  - `src/app/`: App Router pages and layouts.
  - `src/components/`: React components, organized by feature/type:
    - `layout/`: Global layout components (Navbar, Footer).
    - `sections/`: Page-specific sections (Hero, About, Contact).
    - `ui/`: Reusable, atomic UI components (Buttons, Cards).
  - `src/lib/`: Utilities, helpers, and shared logic.
  - `src/hooks/`: Custom React hooks.

### Component Guidelines
- **Export Style**: Use **Named Exports** for all components.
  ```tsx
  // ✅ Correct
  export function MyComponent() { ... }
  
  // ❌ Incorrect
  const MyComponent = () => { ... };
  export default MyComponent;
  ```
- **File Naming**: 
  - Components: `PascalCase.tsx` (e.g., `Hero.tsx`, `Navbar.tsx`).
  - Utilities/Configs: `camelCase.ts` or `kebab-case.ts` (e.g., `utils.ts`, `next.config.mjs`).
- **Props**: Define props using an interface named `<ComponentName>Props` if they are complex, or inline for simple ones.
  ```tsx
  interface HeroProps {
    title: string;
  }
  ```

### Styling
- **Tailwind CSS**: Use Tailwind utility classes for all styling.
- **Conditionals**: Use the `cn()` utility (wrapping `clsx` and `tailwind-merge`) for conditional class application.
  ```tsx
  import { cn } from "@/lib/utils";
  
  <div className={cn("base-class", condition && "conditional-class")} />
  ```
- **Theme**: Stick to the defined color palette (e.g., `hazard`, `mono-black`) in `tailwind.config.ts` (or inferred from usage).

### Imports
- **Aliases**: ALWAYS use the `@/` alias for internal imports. Avoid relative paths like `../../`.
  ```tsx
  // ✅ Correct
  import { cn } from "@/lib/utils";
  
  // ❌ Incorrect
  import { cn } from "../../lib/utils";
  ```
- **Order**:
  1. External libraries (React, Framer Motion, Lucide).
  2. Internal absolute imports (`@/components/...`).
  3. Internal relative imports (if absolutely necessary, e.g., sibling files).

### TypeScript Usage
- **Strict Mode**: The project runs in strict mode. No `any`.
- **Types**: Prefer `interface` for object definitions.
- **Event Handling**: Explicitly type event handlers.
  ```tsx
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { ... };
  ```

### State Management
- Prefer local state (`useState`, `useReducer`) for component-specific logic.
- For complex, shared state, ensure to check if a state management library is already in use before introducing a new one.

### Error Handling
- Use `try/catch` blocks for all async operations, especially API calls.
- Fail gracefully in the UI. Do not leave the user in a broken state.

## 3. Cursor & Copilot Rules (Inferred)

While no explicit `.cursorrules` or `.github/copilot-instructions.md` files exist, Agents should adhere to the following implicit rules based on the codebase:

- **AI-Generated Code**: ensure all generated code is fully typed and follows the project's formatting (Prettier).
- **Proactiveness**: If a missing utility or hook is detected (e.g., `useWindowSize`), implement it in `src/hooks/` or `src/lib/` rather than duplicating logic.
- **Safety**: Never hardcode secrets. Use environment variables (`process.env.NEXT_PUBLIC_...`).

## 4. Documentation

- **Comments**: Write JSDoc comments for complex logic or utility functions.
- **Self-Documentation**: meaningful variable and function names are preferred over excessive comments.

---
*This file is auto-generated and should be updated as the project evolves.*
