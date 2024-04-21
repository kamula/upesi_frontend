import { Stack, useMediaQuery, useTheme, Button, Box, Dialog, DialogTitle, DialogContent } from "@mui/material"
import { useState } from "react";
import CreateAccountModalForm from "./modals/CreateAccountModalForm";
import DepositFundsDialogForm from "./modals/DepositFundsDialogForm";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MidButtonsStack = () => {
    const theme = useTheme()
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

    const [openCreateAccountDialog, setOpenCreateAccountDialog] = useState(false)
    const [openDepositFundsDialog, setOpenDepositFundsDialog] = useState(false)

    const handleClickOpenCreateAccountDialog = () => {
        setOpenCreateAccountDialog(true);
    };

    const handleCloseCreateAccountDIalog = () => {
        setOpenCreateAccountDialog(false);
    };
    // End of funds deposit functions

    const handleClickOpenDepositFundsDialog = () => {
        setOpenDepositFundsDialog(true);
    };

    const handleCloseDepositFundsDIalog = () => {
        setOpenDepositFundsDialog(false);
    };

    const onSuccess = (message) => {
        toast.success(message)
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <ToastContainer />
            <Stack spacing={2} direction={isMobileView ? 'column' : 'row'}>
                <Button
                    variant="contained"
                    sx={{ textTransform: 'none' }}
                    onClick={handleClickOpenCreateAccountDialog}
                >
                    Create Account
                </Button>
                <Button
                    variant="contained"
                    sx={{ textTransform: 'none' }}
                    onClick={handleClickOpenDepositFundsDialog}
                >
                    Deposit Funds
                </Button>
                <Button variant="contained" sx={{ textTransform: 'none' }}>Transfer Funds</Button>
                <Button variant="contained" sx={{ textTransform: 'none' }}>Withdraw via ATM</Button>
            </Stack>
            {/* Dialog boxes */}
            <Box>
                {/* Create account dialog */}
                <Dialog
                    fullWidth={true}
                    maxWidth="sm"
                    open={openCreateAccountDialog}
                    onClose={handleCloseCreateAccountDIalog}
                >
                    <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Create Account</DialogTitle>
                    <DialogContent>
                        <CreateAccountModalForm onClose={handleCloseCreateAccountDIalog} />
                    </DialogContent>
                </Dialog>

                {/* Create deposit funds dialog */}
                <Dialog
                    fullWidth={true}
                    maxWidth="sm"
                    open={openDepositFundsDialog}
                    onClose={handleClickOpenDepositFundsDialog}
                >
                    <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Deposit Funds</DialogTitle>
                    <DialogContent>
                        <DepositFundsDialogForm onClose={handleCloseDepositFundsDIalog} onSuccess={onSuccess}/>
                    </DialogContent>
                </Dialog>


            </Box>
        </Box>
    )
}

export default MidButtonsStack