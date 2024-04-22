import { Card, CardHeader, Avatar, Typography, CardContent } from "@mui/material"
import PaymentsIcon from '@mui/icons-material/Payments';
import PropTypes from 'prop-types';


const TotalMountTransferredCard = ({ totalAmountTransferred }) => {
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
          KES: {totalAmountTransferred ? totalAmountTransferred.toLocaleString() : 0.00}
        </Typography>
      </CardContent>
    </Card>
  )
}

TotalMountTransferredCard.propTypes = {
  totalAmountTransferred: PropTypes.number.isRequired
};

export default TotalMountTransferredCard