import { Box, TextField, InputLabel, Button, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BASE_URL } from '../../../utils/constants'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const TransferFundsFormDialog = ({ onClose, onSuccess, accounts }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const authHeader = useAuthHeader()

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/funds/transfer`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authHeader
                }
            });


            if (response.status === 200) {
                onSuccess(response.data);
                onClose();
            } else {
                toast.error("Error during the deposit submission. Try again")
            }
        } catch (error) {
            toast.error(error.response.data)
        }

    }
    return (
        <Box
            component="form"
            noValidate autoComplete="off"
            onSubmit={
                handleSubmit(onSubmit)
            }
        >
            <ToastContainer />
            <Box>
                <InputLabel required sx={{ color: '#000' }}>Select Destination Account</InputLabel>
                <TextField
                    id="outlined-select-currency"
                    select
                    defaultValue=""
                    helperText="Please select account"
                    fullWidth
                    {...register("destinationAccountId")}
                >
                    {accounts && accounts.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.accountNumber} {`(${option.firstName} ${option.lastName})`}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <Box>

                <InputLabel required sx={{ color: '#000' }}>Amount</InputLabel>
                <TextField
                    type="number"
                    placeholder="Amount"
                    fullWidth
                    {...register("amountTransferred", {
                        required: "Amount is required.",
                        min: {
                            value: 1,
                            message: "Transfer amount cannot be less than 1."
                        }
                    })}
                    error={Boolean(errors.amountTransferred)}
                    helperText={errors.amountTransferred ? errors.amountTransferred.message : ""}
                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button onClick={onClose} variant='contained' color='error' sx={{ textTransform: 'none' }}>Close</Button>
                <Button type='submit' variant='contained' color='success' sx={{ textTransform: 'none' }}>Transfer</Button>
            </Box>
        </Box>
    )
}

TransferFundsFormDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
    accounts: PropTypes.array.isRequired,
};


export default TransferFundsFormDialog