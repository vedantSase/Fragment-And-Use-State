# To Do List React App

A simple To Do List application built with React. This app allows users to add tasks with a date, view the list of tasks, and delete tasks as needed.

## Features

- **Add Tasks:** Enter a task name and date to add it to your list.
- **Delete Tasks:** Remove tasks from your list with a single click.
- **No Task Message:** Displays a message when there are no tasks left.

## Components

- `AppName`: Displays the application name.
- `AddToDo`: Form for adding new tasks.
- `ToDoItems`: Shows the list of current tasks and allows deletion.
- `NoTask`: Shown when there are no tasks in the list.

## How It Works

- The app uses React's `useState` to manage the list of tasks.
- Adding a task appends it to the current list.
- Deleting a task removes it from the list by filtering out the selected task.

## Getting Started

1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## File Structure

```
React Learning/1-To Do List-1.0/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── Components/
│   │   ├── AddToDo.jsx
│   │   ├── AppName.jsx
│   │   ├── NoTask.jsx
│   │   ├── TDItem.jsx
│   │   └── ToDoItems.jsx
│   └── assets/
├── package.json
├── vite.config.js
└── README.md
```

## License

This project is licensed under the MIT License.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
