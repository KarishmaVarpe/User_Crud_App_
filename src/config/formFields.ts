import { FormField } from "../types";

export const userFormFields: FormField[] = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  { 
    name: "phone", 
    label: "Phone Number", 
    type: "number",   // restricts input to numbers
    required: true, 
    pattern: /^[0-9]{10}$/ // exactly 10 digits
  },
  { name: "email", label: "Email Address", type: "email", required: true }
];
