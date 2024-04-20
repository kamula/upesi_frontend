import { Box } from "@mui/material"
import RegisterForm from "../../components/registerScreenComponents/RegisterForm"


const RegisterScreen = () => {
    return (
        <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <RegisterForm />
        </Box>
    )
}

export default RegisterScreen