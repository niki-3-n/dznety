import React from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Paper,
  Button,
} from '@mui/material';

function FriendsList() {
  const friends = [
    {
      id: 1,
      name: 'Alice Johnson',
      avatar: 'https://via.placeholder.com/40',
      status: 'Online',
    },
    {
      id: 2,
      name: 'Bob Smith',
      avatar: 'https://via.placeholder.com/40',
      status: 'Offline',
    },
    {
      id: 3,
      name: 'Carol White',
      avatar: 'https://via.placeholder.com/40',
      status: 'Online',
    },
    {
      id: 4,
      name: 'David Brown',
      avatar: 'https://via.placeholder.com/40',
      status: 'Offline',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Friends List
        </Typography>
        <List>
          {friends.map((friend) => (
            <ListItem
              key={friend.id}
              secondaryAction={
                <Button variant="outlined" size="small">
                  Message
                </Button>
              }
            >
              <ListItemAvatar>
                <Avatar src={friend.avatar} alt={friend.name} />
              </ListItemAvatar>
              <ListItemText
                primary={friend.name}
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color={friend.status === 'Online' ? 'success.main' : 'text.secondary'}
                  >
                    {friend.status}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default FriendsList; 