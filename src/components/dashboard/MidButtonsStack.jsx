import { Stack, useMediaQuery, useTheme, Button, Box, Dialog, DialogTitle, DialogContent } from "@mui/material"
import { useState } from "react";
import CreateAccountModalForm from "./modals/CreateAccountModalForm";
import DepositFundsDialogForm from "./modals/DepositFundsDialogForm";
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TransferFundsFormDialog from "./modals/TransferFundsFormDialog";
import WithdrawFundsModalForm from "./modals/WithdrawFundsModalForm";

const MidButtonsStack = ({ handleSuccess, accounts, hasCreatedAccount }) => {
    const theme = useTheme()
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

    const [openCreateAccountDialog, setOpenCreateAccountDialog] = useState(false)
    const [openDepositFundsDialog, setOpenDepositFundsDialog] = useState(false)
    const [openFundsTransferDialog, setOpenFundsTransferDialog] = useState(false)
    const [openAtmTransferDialog, setOpenAtmTransferDialog] = useState(false)

    const handleClickOpenCreateAccountDialog = () => {
        setOpenCreateAccountDialog(true);
    };

    const handleCloseCreateAccountDIalog = () => {
        setOpenCreateAccountDialog(false);
    };
    // End of account transfer functions

    const handleClickOpenDepositFundsDialog = () => {
        setOpenDepositFundsDialog(true);
    };

    const handleCloseDepositFundsDIalog = () => {
        setOpenDepositFundsDialog(false);
    };
    // End of Funds deposit

    const handleClickFundsTransferDialog = () => {
        setOpenFundsTransferDialog(true);
    };

    const handleCloseFundsTransferDIalog = () => {
        setOpenFundsTransferDialog(false);
    };
    // End of Funds Transfer

    const handleClickOpenAtmTransferDialog = () => {
        setOpenAtmTransferDialog(true);
    };

    const handleCloseAtmTransferDIalog = () => {
        setOpenAtmTransferDialog(false);
    };

    const onSuccess = (message) => {
        toast.success(message)
        handleSuccess();

    }


    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <ToastContainer />
            <Stack spacing={2} direction={isMobileView ? 'column' : 'row'}>
                {
                    hasCreatedAccount ?
                        <></> :
                        <Button
                            variant="contained"
                            sx={{ textTransform: 'none' }}
                            onClick={handleClickOpenCreateAccountDialog}
                        >
                            Create Account
                        </Button>
                }
                <Button
                    variant="contained"
                    sx={{ textTransform: 'none' }}
                    onClick={handleClickOpenDepositFundsDialog}
                >
                    Deposit Funds
                </Button>
                <Button
                    variant="contained"
                    sx={{ textTransform: 'none' }}
                    onClick={handleClickFundsTransferDialog}
                >
                    Transfer Funds
                </Button>
                <Button
                    variant="contained"
                    sx={{ textTransform: 'none' }}
                    onClick={handleClickOpenAtmTransferDialog}
                >
                    Withdraw via ATM
                </Button>
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
                        <CreateAccountModalForm onClose={handleCloseCreateAccountDIalog} onSuccess={onSuccess} />
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
                        <DepositFundsDialogForm onClose={handleCloseDepositFundsDIalog} onSuccess={onSuccess} />
                    </DialogContent>
                </Dialog>

                {/* Create funds transfer dialog */}

                <Dialog
                    fullWidth={true}
                    maxWidth="sm"
                    open={openFundsTransferDialog}
                    onClose={handleCloseFundsTransferDIalog}
                >
                    <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Transfer Funds</DialogTitle>
                    <DialogContent>
                        <TransferFundsFormDialog onClose={handleCloseFundsTransferDIalog} onSuccess={onSuccess} accounts={accounts} />
                    </DialogContent>
                </Dialog>
                {/* Create Atm transfer dialog */}

                <Dialog
                    fullWidth={true}
                    maxWidth="sm"
                    open={openAtmTransferDialog}
                    onClose={handleCloseAtmTransferDIalog}
                >
                    <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>Withdraw Funds via ATM</DialogTitle>
                    <DialogContent>
                        <WithdrawFundsModalForm onClose={handleCloseAtmTransferDIalog} onSuccess={onSuccess} accounts={accounts} />
                    </DialogContent>
                </Dialog>


            </Box>
        </Box>
    )
}

MidButtonsStack.propTypes = {
    handleSuccess: PropTypes.func.isRequired,
    accounts: PropTypes.array.isRequired,
    hasCreatedAccount: PropTypes.bool.isRequired,
};

export default MidButtonsStack