import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { getUsers, createUser, updateUser, deleteUser } from "./service/api";
import { User } from "./types";
import "./styles/global.css";
import { Container, Typography, Divider, Alert, CircularProgress } from "@mui/material";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    refreshUsers();
  }, []);

  const refreshUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (user: User) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      if (editingUser && editingUser.id) {
        await updateUser(editingUser.id, user);
        setEditingUser(null);
        setSuccess("User updated successfully!");
      } else {
        await createUser(user);
        setSuccess("User added successfully!");
      }
      await refreshUsers();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await deleteUser(id);
      setSuccess("User deleted successfully!");
      await refreshUsers();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="app-container">
      <Typography variant="h3" gutterBottom>
        User Management System
      </Typography>
      <Divider />

      {error && <Alert severity="error" sx={{ marginY: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ marginY: 2 }}>{success}</Alert>}
      {loading && <CircularProgress sx={{ display: "block", margin: "20px auto" }} />}

      <Typography variant="h5" gutterBottom sx={{ marginTop: 2 }}>
        {editingUser ? "Update User" : "Add New User"}
      </Typography>
      <UserForm
        onSubmit={handleSubmit}
        onCancel={() => setEditingUser(null)}
        initialData={editingUser || undefined}
      />

      <Divider sx={{ marginY: 3 }} />
      <Typography variant="h5" gutterBottom>
        User List
      </Typography>
      <UserList users={users} onEdit={setEditingUser} onDelete={handleDelete} />
    </Container>
  );
};

export default App;
