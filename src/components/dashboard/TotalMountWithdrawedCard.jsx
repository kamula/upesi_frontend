import { Card, CardHeader, Avatar, Typography, CardContent } from "@mui/material"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


const TotalMountWithdrawedCard = () => {
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
          KES: 2000
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TotalMountWithdrawedCard