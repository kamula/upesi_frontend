import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar } from "@mui/material"
import PropTypes from 'prop-types';
import PaymentsIcon from '@mui/icons-material/Payments';


const RecentFundsTransferTable = ({ recentFundsTransfers }) => {
    return (
        <Box>
            <Typography variant="h6">Recent Funds Transfers</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Destination Acc</TableCell>
                            <TableCell>Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recentFundsTransfers && recentFundsTransfers.length > 0 ? (
                            recentFundsTransfers.map((withdraw) => (
                                <TableRow key={withdraw.id}>
                                    <TableCell>
                                        <Avatar>
                                            <PaymentsIcon />
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

RecentFundsTransferTable.propTypes = {
    recentFundsTransfers: PropTypes.array.isRequired
};


export default RecentFundsTransferTable