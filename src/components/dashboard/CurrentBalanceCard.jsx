import { Card, CardHeader, Avatar, Typography, CardContent } from "@mui/material"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PropTypes from 'prop-types';


const CurrentBalanceCard = ({ currentBalance }) => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar>
                        <AccountBalanceWalletIcon />
                    </Avatar>
                }

                title={
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Current Balance
                    </Typography>
                }

            />
            <CardContent>
                <Typography variant="h5">
                    KES: {currentBalance ? currentBalance.toLocaleString() : 0.00}
                </Typography>
            </CardContent>
        </Card>
    )
}

CurrentBalanceCard.propTypes = {
    currentBalance: PropTypes.number.isRequired
};

export default CurrentBalanceCard