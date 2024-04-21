import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell } from "@mui/material"


const RecentAtmWithdrawTable = () => {
  return (
    <Box>
      <Typography variant="h6">Recent ATM Withdraws</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Source Acc</TableCell>
              <TableCell>Destination Bank Acc</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default RecentAtmWithdrawTable