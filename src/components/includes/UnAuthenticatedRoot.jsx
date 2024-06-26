import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const UnAuthenticatedRoot = () => {
    return (
        <Box>
            <Outlet />
        </Box>
    )
}

export default UnAuthenticatedRoot