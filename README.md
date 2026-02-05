# User Management Web App (React + TypeScript + JSON-Server)

A simple, extensible CRUD application built with **React (TypeScript)**, **Material‑UI**, and **JSON‑Server**.  
This app demonstrates clean architecture, intuitive UI/UX, and ease of extensibility for adding new fields.

---

## 🚀 Features
- Add, update, delete, and list users
- Config‑driven form architecture (easy to add new fields)
- Validation (phone number must be numeric and 10 digits)
- Cancel button to reset form or exit edit mode
- Loading indicators during API calls
- Error and success alerts for clear feedback
- Responsive, neat UI with Material‑UI cards and typography

---

## Installation
Clone the repository:
git clone https://github.com/your-username/user-crud-app.git (github.com in Bing)  
cd user-crud-app

Install dependencies:
npm install

Start JSON‑Server (mock backend):
npx json-server --watch db.json  --port 5001

Start React app:
npm start


 ## Extensibility
Adding a new field is simple:

Update types/index.ts:
export interface User {
id?: number;
firstName: string;
lastName: string;
phone: string;
email: string;
dob?: string; // new field
}

Update config/formFields.ts:
{ name: "dob", label: "Date of Birth", type: "date", required: false }

The form automatically renders the new field.
The list can optionally display it — no other changes required.


## Demo
Start JSON‑Server → http://localhost:5001/users

Open React app → http://localhost:3000

Add, edit, delete users with instant feedback