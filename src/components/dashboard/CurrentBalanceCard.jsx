import { Card, CardHeader, Avatar, Typography, CardContent } from "@mui/material"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const CurrentBalanceCard = () => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar>
                        <AccountBalanceWalletIcon />
                    </Avatar>
                }

                title={
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Current Balance</Typography>
                }

            />
            <CardContent>
                <Typography variant="h5">
                    KES: 2000
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CurrentBalanceCard