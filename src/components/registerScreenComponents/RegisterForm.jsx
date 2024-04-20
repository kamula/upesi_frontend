import { Controller, useForm } from "react-hook-form";
import {
    Box,
    Typography,
    TextField,
    Button,
    Avatar,
    useMediaQuery,
    useTheme,
    InputAdornment,
    IconButton
} from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Link } from "react-router-dom";
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const RegisterForm = () => {
    const theme = useTheme()
    const { control, register, handleSubmit, formState: { errors }, watch } = useForm();
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
    };

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
                    <PersonAddAlt1Icon />
                </Avatar>
                <Typography variant="h5" component="div" gutterBottom>
                    Create Account
                </Typography>

                <TextField
                    type="text"
                    label="First Name"
                    fullWidth
                    {...register("FirstName", {
                        required: true,
                    })}
                    error={Boolean(errors.first_name)}
                    helperText={errors.first_name ? "First name is required." : ""}
                />
                <TextField
                    sx={{ mt: 3 }}
                    type="text"
                    label="Last Name"
                    fullWidth
                    {...register("LastName", {
                        required: true,
                    })}
                    error={Boolean(errors.first_name)}
                    helperText={errors.first_name ? "Last name is required." : ""}
                />

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

                <Controller
                    control={control}
                    rules={{
                        validate: matchIsValidTel
                    }}


                    render={({ field, fieldState }) => (
                        <MuiTelInput
                            sx={{ mt: 3 }}
                            label="Phone Number"
                            fullWidth
                            value={field.value}
                            onChange={(value) => field.onChange(value)}
                            defaultCountry="KE"
                            helperText={fieldState.invalid ? "Tel is invalid" : ""}
                            error={fieldState.invalid}
                        />
                    )}
                    name="phone"
                />

                <TextField
                    id="standard-password-input"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    fullWidth
                    autoComplete="new-password"
                    variant="outlined"
                    {...register('password', { required: true })}
                    error={Boolean(errors.password)}
                    helperText={errors.password ? 'Password is required.' : ''}
                    sx={{ mt: 3 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility}>
                                    {showPassword ? (
                                        <VisibilityOffIcon />
                                    ) : (
                                        <VisibilityIcon />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    id="standard-password-confirm"
                    type={showConfirmPassword ? 'text' : 'password'}
                    fullWidth
                    autoComplete="new-password"
                    label="Confirm Password"
                    sx={{ mt: 3 }}
                    variant="outlined"
                    {...register('password_confirm', {
                        required: true,
                        validate: (value) =>
                            value === watch('password') || 'Passwords do not match',
                    })}
                    error={Boolean(errors.password_confirm)}
                    helperText={
                        errors.password_confirm
                            ? errors.password_confirm.message
                            : '' // No error message
                    }
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={toggleConfirmPasswordVisibility}>
                                    {showConfirmPassword ? (
                                        <VisibilityOffIcon />
                                    ) : (
                                        <VisibilityIcon />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Button variant="contained"
                    sx={{ mt: 3 }}
                    color="success"
                    type="submit">
                    Register
                </Button>

                <Box sx={{ mt: 2 }}>
                    <Link to="/" >
                        Already have an account ? Login
                    </Link>
                </Box>

            </Box>
        </Box>
    )
}

export default RegisterForm