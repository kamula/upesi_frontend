import { Box, TextField, InputLabel, Button } from "@mui/material";
import { useForm } from "react-hook-form";

const CreateAccountModalForm = ({ onClose }) => {
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
            <InputLabel sx={{ color: '#000' }}>Starting amount (Optional)</InputLabel>
            <TextField
                type="number"
                placeholder="Starting amount"
                fullWidth
                {...register("amount", {
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

export default CreateAccountModalForm