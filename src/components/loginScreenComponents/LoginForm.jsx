import { useForm } from "react-hook-form";
import {
    Box,
    Typography,
    TextField,
    Button,
    Avatar,
    useMediaQuery,
    useTheme
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";


const LoginForm = () => {
    const theme = useTheme()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

    const onSubmit = async (data) => {
        console.log(data)
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%', padding: 3 }}>
            <Box
                component="form"
                noValidate autoComplete="off"
                onSubmit={
                    handleSubmit(onSubmit)
                }
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={2}
                width={isMobileView ? "90%" : "30%"}
                maxWidth="800px"
                sx={
                    { boxShadow: 3, mt: isMobileView ? 1 : 4 }
                }>
                <Avatar>
                    <LoginIcon />
                </Avatar>
                <Typography variant="h5" component="div" gutterBottom>
                    Login
                </Typography>

                <TextField
                    sx={{ mt: 3 }}
                    label="Email"
                    type="email"
                    fullWidth
                    {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                    error={Boolean(errors.email)}
                    helperText={errors.email ? "Enter valid email." : ""}
                />

                <TextField sx={
                    { mt: 3 }
                }
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    fullWidth
                    autoComplete="current-password"
                    variant="outlined"
                    {...register("password", { required: true })}
                    error={
                        Boolean(errors.password)
                    }
                    helperText={
                        errors.password ? "Password is required." : ""
                    } />

                <Button variant="contained"
                    sx={{ mt: 3 }}
                    color="success"
                    type="submit">
                    Login
                </Button>

                <Box sx={{ mt: 2 }}>
                    <Link to="/register" >
                        Do not have an account ? Register
                    </Link>
                </Box>

            </Box>
        </Box>
    )
}

export default LoginForm