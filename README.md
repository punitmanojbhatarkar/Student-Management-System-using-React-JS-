# 🎓 Student Management System (SMS) — React JS

[![Live Demo](https://img.shields.io/badge/Demo-Live%20on%20GitHub%20Pages-success?style=for-the-badge&logo=github)](https://punitmanojbhatarkar.github.io/Student-Management-System-using-React-JS-/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> **Live Deployment:** [https://punitmanojbhatarkar.github.io/Student-Management-System-using-React-JS-/](https://punitmanojbhatarkar.github.io/Student-Management-System-using-React-JS-/)

---

## 📌 Assignment Objective & Overview

**Problem Statement:**  
> *"Develop a Student Management System using React JS that allows users to add, view, update, and delete student records. The application should demonstrate the use of React components, props, state management, event handling, forms, and CRUD operations."*

This project fulfills and exceeds the assignment requirements by combining a complete **CRUD workflow** with a human-designer, anti-AI aesthetic. It features bespoke SVG doodles, an interactive campus mascot, illustrated student character avatars, celebratory confetti physics, and academic modules tailored for university operations.

---

## 🚀 Key Technical Concepts Demonstrated

### 1. 🧩 React Components
The architecture follows a modular, component-based hierarchy:
* **`App.jsx`**: Central coordinator managing global state, navigation, and modals.
* **`DashboardStats.jsx`**: Visual analytics showing enrollment counters, average cohort GPA, grade distribution charts, and actionable alerts.
* **`StudentDirectory.jsx`**: Student Information System (SIS) table with real-time search, multi-column sorting, and action triggers.
* **`StudentForm.jsx`**: Modal form with controlled inputs for creating and editing records.
* **`CampusMascot.jsx`**: Interactive animated companion ("Pip") with live quips, advice, and celebration feedback.
* **`AttendanceTracker.jsx`**: Real-time daily roll-call log with progress meters.
* **`Timetable.jsx`**: Visual academic schedule grid for *TY B.Tech CSE (Data Science) - Division A*.
* **`AcademicsManager.jsx`**: Course grading rubrics and performance calculator.
* **`Doodles.jsx`**: Handcrafted SVG doodles, squiggles, washi tape, and sticker badges.
* **`avatars.jsx`**: Handcrafted illustrated SVG student character portraits.

### 2. 🔄 Props & Unidirectional Data Flow
* Data and callback functions are passed cleanly from `App.jsx` down to children.
* Examples:
  * Passing student arrays: `<StudentDirectory students={students} onEdit={openEditForm} onDelete={handleDeleteStudent} />`
  * Passing edit targets and submit handlers: `<StudentForm initialData={editingStudent} onSubmit={...} onCancel={...} />`

### 3. ⚡ State Management (`useState` & `useMemo`)
* **`useState`**: Manages view routing (`dashboard`, `directory`, `timetable`, `academics`, `attendance`), modal visibility, active form editing state, and daily attendance logs.
* **`useMemo`**: Optimizes performance by computing statistical aggregates (average GPA, grade counts, alert thresholds, search filtering, and sorting) only when dependencies change.

### 4. 🎯 Event Handling
* Form submission events (`onSubmit`) with validation preventing duplicate or invalid entries.
* Interactive sorting events (`onClick` on table headers for ascending/descending toggles).
* Real-time search query filtering via `onChange` on search inputs.
* Delete confirmation dialogs (`window.confirm`) protecting against accidental data loss.
* Interactive mascot and streak tag clicks triggering lightweight canvas confetti bursts.

### 5. 📝 Controlled Forms & CRUD Operations
| Operation | Implementation Details |
| :--- | :--- |
| **Create (Add)** | Accessible via the `+ Add Student Record` button. Opens a clean modal form to input Name, Email, Major, GPA, Status, and Attendance. |
| **Read (View)** | Real-time display in both high-level analytics cards and detailed searchable SIS Directory tables. |
| **Update (Edit)** | Clicking the `Edit` button pre-populates `StudentForm` with existing record details for in-place modifications. |
| **Delete (Remove)** | Clicking the `Trash` button initiates confirmation before safely filtering out the target record from state. |

---

## ✨ Unique Features & Aesthetic Polish

* **Anti-AI / Handcrafted Studio Aesthetic**: Styled with washi tape card stickers, hand-drawn wavy squiggles, and textured notebook backgrounds.
* **Interactive Campus Mascot ("Pip")**: An animated mascot with graduation cap and spectacles who delivers live campus tips and reacts when clicked.
* **Illustrated Character Avatars**: 6 unique, illustrated student portraits (with glasses, beanies, headphones, and star clips) instead of generic stock images.
* **Physics Confetti (`confetti.js`)**: Pure canvas particle bursts celebrate adding records, updating data, or marking attendance.
* **University Schedule Integration**: Includes the class schedule for *TY B.Tech CSE (Data Science) - Division A*.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React 18
* **Build Tool:** Vite
* **Icons:** Lucide React & Custom Handcrafted SVGs
* **Typography:** Google Fonts (*Outfit* & *Caveat*)
* **Deployment:** GitHub Pages (via GitHub Actions) & Vercel compatible

---

## 💻 Local Setup & Installation

Clone and run this project locally in seconds:

```bash
# 1. Clone the repository
git clone https://github.com/punitmanojbhatarkar/Student-Management-System-using-React-JS-.git

# 2. Navigate to the project directory
cd Student-Management-System-using-React-JS-

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open your browser at `http://localhost:5173/` to view the application.

---

## 🌐 Live Website

The production build is hosted live at:  
👉 **[https://punitmanojbhatarkar.github.io/Student-Management-System-using-React-JS-/](https://punitmanojbhatarkar.github.io/Student-Management-System-using-React-JS-/)**
