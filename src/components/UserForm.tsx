import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Stack } from "@mui/material";
import { userFormFields } from "../config/formFields";
import { User } from "../types";

interface UserFormProps {
  onSubmit: (user: User) => void;
  onCancel: () => void;
  initialData?: User;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState<User>(
    initialData || { firstName: "", lastName: "", phone: "", email: "" }
  );

  useEffect(() => {
    setFormData(initialData || { firstName: "", lastName: "", phone: "", email: "" });
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 2 }}>
      {userFormFields.map((field) => (
        <TextField
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          required={field.required}
          value={formData[field.name] || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
          inputProps={
            field.name === "phone"
              ? { inputMode: "numeric", pattern: "[0-9]*", maxLength: 10 }
              : {}
          }
          error={field.name === "phone" && formData.phone.length > 0 && formData.phone.length !== 10}
          helperText={
            field.name === "phone" && formData.phone.length > 0 && formData.phone.length !== 10
              ? "Phone number must be 10 digits"
              : ""
          }
        />
      ))}
      <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
        <Button variant="outlined" color="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Stack>
    </Box>
  );
};

export default UserForm;
