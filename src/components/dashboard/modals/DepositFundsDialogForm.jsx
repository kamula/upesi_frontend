import { Box, TextField, InputLabel, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BASE_URL } from '../../../utils/constants'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const DepositFundsDialogForm = ({ onClose, onSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const authHeader = useAuthHeader()

    // function to post acount data
    const onSubmit = async (data) => {
        try {
            const response = await axios.patch(`${BASE_URL}/api/accounts/deposit`, data, {
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
            toast.error("Error during the deposit submission:")
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

            <InputLabel required sx={{ color: '#000' }}>Amount</InputLabel>
            <TextField
                type="number"
                placeholder="Amount"
                fullWidth
                {...register("depositAmount", {
                    required: "Deposit amount is required.",
                    min: {
                        value: 1,
                        message: "Deposit amount cannot be less than 1."
                    }
                })}
                error={Boolean(errors.depositAmount)}
                helperText={errors.depositAmount ? errors.depositAmount.message : ""}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button onClick={onClose} variant='contained' color='error' sx={{ textTransform: 'none' }}>Close</Button>
                <Button type='submit' variant='contained' color='success' sx={{ textTransform: 'none' }}>Submit</Button>
            </Box>
        </Box>
    )
}

DepositFundsDialogForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
};

export default DepositFundsDialogForm