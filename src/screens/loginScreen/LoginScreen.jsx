import { Box } from "@mui/material"
import LoginForm from "../../components/loginScreenComponents/LoginForm"

const LoginScreen = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <LoginForm />
    </Box>
  )
}

export default LoginScreen