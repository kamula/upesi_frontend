import { Box, Grid } from "@mui/material"
import CurrentBalanceCard from "../../components/dashboard/CurrentBalanceCard"
import TotalMountTransferredCard from "../../components/dashboard/TotalMountTransferredCard"
import TotalMountWithdrawedCard from "../../components/dashboard/TotalMountWithdrawedCard"
import MidButtonsStack from "../../components/dashboard/MidButtonsStack"
import RecentFundsTransferTable from "../../components/dashboard/RecentFundsTransferTable"
import RecentAtmWithdrawTable from "../../components/dashboard/RecentAtmWithdrawTable"

const DashboardScreen = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} sm={12} lg={4} xl={4}>
                    <CurrentBalanceCard />
                </Grid>
                <Grid item xs={12} md={4} sm={12} lg={4} xl={4}>
                    <TotalMountTransferredCard />
                </Grid>
                <Grid item xs={12} md={4} sm={12} lg={4} xl={4}>
                    <TotalMountWithdrawedCard />
                </Grid>
            </Grid>
            {/* Box sections */}
            <Box>
                <MidButtonsStack />
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6} sm={12} lg={6} xl={6}>
                        <RecentFundsTransferTable />
                    </Grid>
                    <Grid item xs={12} md={6} sm={12} lg={6} xl={6}>
                        <RecentAtmWithdrawTable />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default DashboardScreen