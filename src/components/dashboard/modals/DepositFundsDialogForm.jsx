import { Box, TextField, InputLabel, Button } from "@mui/material";
import { useForm } from "react-hook-form";

const DepositFundsDialogForm = ({ onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // function to post acount data
    const onSubmit = async (data) => {

    }


    return (
        <Box
            component="form"
            noValidate autoComplete="off"
            onSubmit={
                handleSubmit(onSubmit)
            }

        >
            <InputLabel required sx={{ color: '#000' }}>Amount</InputLabel>
            <TextField
                type="number"
                placeholder="Amount"
                fullWidth
                {...register("amount", {
                    required: "Amount is required.",
                    min: {
                        value: 1,
                        message: "Deposit amount cannot be less than 1."
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

export default DepositFundsDialogForm