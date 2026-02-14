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

- 🎨 **Design system & theming**
  - Token-based color system
  - No magic values in components
  - Architecture prepared for light / dark themes

- ⌨️ **Keyboard & mouse support**
  - System-level keyboard shortcuts
  - Typed key codes & DOM events

---

## 🧱 Tech Stack

- **React**
- **TypeScript**
- **Redux Toolkit**
- **MUI (styled API)**
- **Custom design tokens**
- **Custom desktop & window engine**

---

## 📁 Project Structure

```text
src/
├── Components/        # Reusable UI components
├── Containers/        # Desktop, windows, system logic
├── constants/         # System constants, enums, tokens
├── hooks/             # Custom React hooks
├── store/             # Redux slices & selectors
├── types/             # Shared TypeScript types
├── assets/            # Wallpapers & static assets
```

---

⚠️ This project is not an official Microsoft product. All design elements and code are created by the author.
