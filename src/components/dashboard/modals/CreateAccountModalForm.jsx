import { Box, TextField, InputLabel, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { BASE_URL } from '../../../utils/constants'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const CreateAccountModalForm = ({ onClose, onSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const authHeader = useAuthHeader()

    // function to post acount data
    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/accounts/create`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authHeader
                }
            });

            if (response.status === 200) {
                onSuccess(response.data);
                onClose();
            } else {
                toast.error(response.data)
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
            <InputLabel sx={{ color: '#000' }}>Starting amount (Optional)</InputLabel>
            <TextField
                type="number"
                placeholder="Starting amount"
                fullWidth
                {...register("initialDeposit", {
                    required: false,
                    min: {
                        value: 0,
                        message: "Starting amount cannot be less than 0."
                    }
                })}
                error={Boolean(errors.amount)}
                helperText={errors.amount ? errors.amount.message : ""}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button onClick={onClose} variant='contained' color='error' sx={{ textTransform: 'none' }}>Close</Button>
                <Button type='submit' variant='contained' color='success' sx={{ textTransform: 'none' }}>Submit</Button>
            </Box>
        </Box>
    )
}

CreateAccountModalForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
};

export default CreateAccountModalForm