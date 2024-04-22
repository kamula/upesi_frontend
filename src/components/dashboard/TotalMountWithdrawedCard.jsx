import { Card, CardHeader, Avatar, Typography, CardContent } from "@mui/material"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PropTypes from 'prop-types';


const TotalMountWithdrawedCard = ({ totalAtmWithdrawals }) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <AccountBalanceIcon />
          </Avatar>
        }

        title={
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total ATM Withdrawals</Typography>
        }

      />
      <CardContent>
        <Typography variant="h5">
          KES: {totalAtmWithdrawals ? totalAtmWithdrawals.toLocaleString() : 0.00}
        </Typography>
      </CardContent>
    </Card>
  )
}

TotalMountWithdrawedCard.propTypes = {
  totalAtmWithdrawals: PropTypes.number.isRequired
};

export default TotalMountWithdrawedCard