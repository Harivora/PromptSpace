# PromptSpace - AI Prompt Organizer

PromptSpace is a modern, single-page web application designed to help users organize, categorize, and manage their AI prompts efficiently. Built with a clean SaaS aesthetic, it allows users to add new prompts, search through their collection, and easily copy them to the clipboard.

## 🚀 Features

- **Add Prompts:** Easily add new prompts with a title, category, and prompt text.
- **Categorization:** Organize prompts by categories like Coding, Writing, Design, Marketing, and more.
- **Instant Search:** Real-time filtering to quickly find specific prompts by title or keyword.
- **One-Click Copy:** Quickly copy prompt text to your clipboard with visual feedback.
- **Responsive Design:** A beautiful, modern UI that works seamlessly across mobile, tablet, and desktop devices.
- **Dynamic Styling:** Category badges are dynamically colored for quick visual recognition.

## 🛠️ Technology Stack

- **HTML5:** Core structure of the application.
- **CSS3 / Tailwind CSS:** Utility-first CSS framework (via CDN) for rapid, modern styling.
- **JavaScript / AngularJS (v1.8.x):** Front-end framework (via CDN) for data binding, MVC architecture, and dynamic UI updates.
- **FontAwesome:** Scalable vector icons (via CDN) for intuitive UI elements.
- **Google Fonts:** "Inter" font family for clean, readable typography.

## 📁 Project Structure

The project is structured into three main files for better maintainability:

```
AJS/
├── promptspace.html   # Main HTML layout and structural markup
├── app.js             # AngularJS logic, controller, and dummy data
├── style.css          # Custom CSS styles and animations
└── README.md          # Project documentation
```

## 💻 How to Run

1. Clone this repository or download the source files.
2. Ensure you have an active internet connection (required for CDN resources like Tailwind CSS, AngularJS, and FontAwesome).
3. Open `promptspace.html` in any modern web browser (Chrome, Firefox, Safari, Edge).
   - *No build process, local server, or npm installation is required.*

## 🧠 AngularJS Concepts Applied

This project demonstrates the use of several core AngularJS concepts:

- **`ng-app` & `ng-controller`**: Used to bootstrap the application and bind the controller scope.
- **`ng-model`**: Implements two-way data binding for the search bar and the "Add Prompt" form.
- **`ng-repeat`**: Iterates over the prompts array to dynamically generate the prompt cards.
- **`filter`**: Applied to `ng-repeat` to allow instant, case-insensitive search filtering.
- **`ng-click`**: Handles user interactions like deleting a prompt or copying text to the clipboard.
- **`ng-submit`**: Manages the form submission process to append new prompts to the dataset.
- **`$timeout`**: Used for temporary visual feedback after copying a prompt.

## 🎨 UI/UX Highlights

- **Soft Shadows & Rounded Corners:** Gives the app a modern "SaaS" feel.
- **Hover Transitions:** Cards lift smoothly with enhanced shadows when hovered.
- **Empty States:** A friendly message appears when search results are empty.
- **Sticky Sidebar:** The "Add Prompt" form remains visible on desktop while scrolling through the prompt list.
