import { Card, CardHeader, Avatar, Typography, CardContent } from "@mui/material"
import PaymentsIcon from '@mui/icons-material/Payments';

const TotalMountTransferredCard = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar>
            <PaymentsIcon />
          </Avatar>
        }

        title={
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total Amount Transferred</Typography>
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

export default TotalMountTransferredCard