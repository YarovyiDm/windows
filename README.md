# 🪟 Windows in the Browser

A **Windows-like desktop environment built entirely for the web**.  
This project recreates core desktop OS interactions — windows, files, drag & drop, context menus, theming, and localization — using modern frontend technologies.

This is not just a UI mock — it’s a **state-driven desktop system** designed with scalability and clean architecture in mind.

---

## ✨ Features

- 🖥 **Desktop environment**
  - Draggable desktop files
  - File selection & focus handling
  - Context menus (right-click support)
  - Desktop icon resizing (small / medium / large)
 
- 📁 **Virtual file system**
  - In-memory file structure
  - File metadata & type modeling
  - Selection logic independent from UI
  - Scalable foundation for future persistence (localStorage / API)

- 🪟 **Window system**
  - Open / close / focus windows
  - Z-index management
  - Minimum window constraints
  - Resize handles (right / bottom / corner)

- 🧠 **State-driven architecture**
  - Centralized state management
  - Predictable system behavior
  - Clear separation of UI, logic, and constants

- 🌍 **Internationalization (i18n)**
  - Multi-language support
  - Typed translation keys
  - Hotkey-based language switching

- ⌨️ **Keyboard & mouse support**
  - System-level keyboard shortcuts
  - Typed key codes & DOM events

---

## 🧱 Tech Stack

- **React**
- **TypeScript**
- **Redux Toolkit**
- **MUI (styled API)**
- **Zod**
- **Axios**
- **Custom design tokens**
- **Custom desktop & window engine**

---

## 📁 Project Structure

```text
src/
├── api/               # API layer
├── assets/            # Static files (images, icons, wallpapers, fonts)
├── Components/        # Reusable UI components
├── constants/         # App-wide constants, enums
├── Containers/        # Smart components (feature-level logic, windows, desktop orchestration)
├── domain/            # Business logic (factory, mutations, queries)
├── hooks/             # Custom React hooks (UI + data orchestration)
├── store/             # Redux store, slices, selectors
├── types/             # Global TypeScript types
├── utils/             # Pure utility functions (formatters, helpers, validators)
```

---

⚠️ This project is not an official Microsoft product. All design elements and code are created by the author.
