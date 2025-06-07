import React from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

function TransactionHistory() {
  const transactions = [
    {
      id: 1,
      date: '2024-03-15',
      description: 'Premium Subscription',
      amount: -29.99,
      status: 'Completed',
    },
    {
      id: 2,
      date: '2024-03-10',
      description: 'Friend Request',
      amount: 0,
      status: 'Completed',
    },
    {
      id: 3,
      date: '2024-03-05',
      description: 'Profile Boost',
      amount: -9.99,
      status: 'Completed',
    },
    {
      id: 4,
      date: '2024-03-01',
      description: 'Monthly Subscription',
      amount: -19.99,
      status: 'Pending',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Transaction History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: transaction.amount < 0 ? 'error.main' : 'success.main',
                  }}
                >
                  {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
                </TableCell>
                <TableCell
                  sx={{
                    color:
                      transaction.status === 'Completed'
                        ? 'success.main'
                        : 'warning.main',
                  }}
                >
                  {transaction.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TransactionHistory; 