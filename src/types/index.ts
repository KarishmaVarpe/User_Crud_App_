// src/types/index.ts

export interface User {
  id?: number; // optional for new users
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface FormField {
  name: keyof Omit<User, "id">; // only user fields except id
  label: string;
  type: string;
  required: boolean;
  pattern?: RegExp;
}
