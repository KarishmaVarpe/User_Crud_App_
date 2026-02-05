import React from "react";
import { User } from "../types";
import { Button, Card, CardContent, Typography, Stack } from "@mui/material";

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  return (
    <Stack spacing={2}>
      {users.map((user) => (
        <Card key={user.id} variant="outlined">
          <CardContent>
            <Typography variant="h6">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography color="textSecondary">{user.email}</Typography>
            <Typography color="textSecondary">{user.phone}</Typography>
            <Stack direction="row" spacing={2} sx={{ marginTop: 1 }}>
              <Button variant="contained" color="primary" onClick={() => onEdit(user)}>
                Edit
              </Button>
              <Button variant="contained" color="error" onClick={() => onDelete(user.id!)}>
                Delete
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default UserList;
