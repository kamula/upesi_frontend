import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar } from "@mui/material"
import PropTypes from 'prop-types';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';



const RecentAtmWithdrawTable = ({ recentAtmWithdraws }) => {
  return (
    <Box>
      <Typography variant="h6">Recent ATM Withdraws</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Destination Bank Acc</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentAtmWithdraws && recentAtmWithdraws.length > 0 ? (
              recentAtmWithdraws.map((withdraw) => (
                <TableRow key={withdraw.id}>
                  <TableCell>
                    <Avatar>
                      <AccountBalanceIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell>{withdraw.date}</TableCell>
                  <TableCell>{withdraw.bankAccountNumber}</TableCell>
                  <TableCell>{withdraw.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">No items</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

RecentAtmWithdrawTable.propTypes = {
  recentAtmWithdraws: PropTypes.array.isRequired
};

export default RecentAtmWithdrawTable