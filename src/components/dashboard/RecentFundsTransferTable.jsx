import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell } from "@mui/material"

const RecentFundsTransferTable = () => {
    return (
        <Box>
            <Typography variant="h6">Recent Funds Transfers</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>                            
                            <TableCell>Source Acc</TableCell>                            
                            <TableCell>Destination Acc</TableCell>                            
                            <TableCell>Amount</TableCell>                            
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default RecentFundsTransferTable