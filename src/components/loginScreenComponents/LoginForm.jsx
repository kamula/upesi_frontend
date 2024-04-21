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
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import axios from "axios";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../utils/constants";
// import GoogleIcon from '@mui/icons-material/Google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LoginForm = () => {
    const theme = useTheme()
    const signIn = useSignIn();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${BASE_URL}/api/auth/login`, data);
            if (response.status === 200) {
                // console.log(response.data)
                if (signIn({
                    auth: {
                        token: response.data.token,
                        type: 'Bearer'
                    },
                    userState: {
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        uid: response.data.id
                    }
                })) {
                    navigate('/dashboard');
                    window.location.reload()
                } else {
                    toast.error('Invalid login credentials')
                }
            } else {
                toast.error('Invalid login credentials')
            }
        } catch (error) {
            toast.error('Invalid login credentials')

        }
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%', padding: 3 }}>
            <ToastContainer />
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

                {/* <Button color="warning" variant="outlined" sx={{ width: '100%', mt: 2, textTransform: 'none' }}>
                    <GoogleIcon /> Login via google
                </Button> */}

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