import { Box, Grid } from "@mui/material"
import CurrentBalanceCard from "../../components/dashboard/CurrentBalanceCard"
import TotalMountTransferredCard from "../../components/dashboard/TotalMountTransferredCard"
import TotalMountWithdrawedCard from "../../components/dashboard/TotalMountWithdrawedCard"
import MidButtonsStack from "../../components/dashboard/MidButtonsStack"
import RecentFundsTransferTable from "../../components/dashboard/RecentFundsTransferTable"
import RecentAtmWithdrawTable from "../../components/dashboard/RecentAtmWithdrawTable"
import axios from 'axios';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { useState, useEffect } from "react"
import { BASE_URL } from '../../utils/constants'



const DashboardScreen = () => {
    const authHeader = useAuthHeader()
    const [accountSummary, setAccountSummary] = useState(null);

    const fetchSummary = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/accounts/details`, {
                headers: {
                    'Authorization': authHeader, // Assuming authHeader returns a token
                    'Content-Type': 'application/json'
                }
            });
            setAccountSummary(response.data); // Assuming the data you need is in the response body directly
        } catch (error) {
            console.error('Failed to fetch account summary:', error);
            // Optionally, handle errors e.g., by setting some error state to show in the UI
        }
    };

    useEffect(() => {
        fetchSummary();
    }, [fetchSummary]);

    

    return (
        <Box>
            {accountSummary &&
                <>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4} sm={12} lg={4} xl={4}>
                            <CurrentBalanceCard currentBalance={accountSummary.currentBalance} />
                        </Grid>
                        <Grid item xs={12} md={4} sm={12} lg={4} xl={4}>
                            <TotalMountTransferredCard totalAmountTransferred={accountSummary.totalAmountTransferred} />
                        </Grid>
                        <Grid item xs={12} md={4} sm={12} lg={4} xl={4}>
                            <TotalMountWithdrawedCard totalAtmWithdrawals={accountSummary.totalAmountWithdrawn} />
                        </Grid>
                    </Grid>

                    <Box>
                        <MidButtonsStack handleSucceess={fetchSummary} />
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12} md={6} sm={12} lg={6} xl={6}>
                                <RecentFundsTransferTable recentFundsTransfers={accountSummary.recentTransfers} />
                            </Grid>
                            <Grid item xs={12} md={6} sm={12} lg={6} xl={6}>
                                <RecentAtmWithdrawTable recentAtmWithdraws={accountSummary.recentWithdraws} />
                            </Grid>
                        </Grid>
                    </Box>
                </>}
        </Box>
    )
}

export default DashboardScreen