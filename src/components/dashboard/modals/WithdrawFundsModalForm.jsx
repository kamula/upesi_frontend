import { Box, TextField, InputLabel, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BASE_URL } from '../../../utils/constants'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const WithdrawFundsModalForm = ({ onClose, onSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const authHeader = useAuthHeader()

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/atm/withdraw`, data, {
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
            <Box>
                <InputLabel required sx={{ color: '#000' }}>Bank Account Number</InputLabel>
                <TextField
                    type="number"
                    placeholder="Bank account number"
                    fullWidth
                    {...register("bankAccountNumber", {
                        required: "Bank Account is required.",
                        minLength: {
                            value: 8,
                            message: "Bank account number must be at least 8 digits."
                        },
                        pattern: {
                            value: /^\d+$/,  // Ensures only digits are entered
                            message: "Only numeric values are allowed."
                        }
                    })}
                    error={Boolean(errors.bankAccountNumber)}
                    helperText={errors.bankAccountNumber ? errors.bankAccountNumber.message : ""}
                />
            </Box>
            <Box>
                <InputLabel required sx={{ color: '#000' }}>Bank Account Number</InputLabel>
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
                <Button type='submit' variant='contained' color='success' sx={{ textTransform: 'none' }}>Submit</Button>
            </Box>
        </Box>
    )
}

WithdrawFundsModalForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
};

export default WithdrawFundsModalForm