const onSubmit = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/login`, data);
        
        if (response.status === 200) {
            // Correctly accessing `response.data` instead of `res.data`
            const { token, refreshToken, authUserState } = response.data;

            // Assuming `signIn` is a function that updates your app's context or Redux store
            const signInSuccess = signIn({
                auth: {
                    token: token,
                    type: 'Bearer' // Assuming your backend returns a bearer token
                },
                refresh: refreshToken, // Only include this if you are using refreshToken feature
                userState: authUserState
            });

            if (signInSuccess) {
                // Redirect or perform additional actions after login
                // Example redirect using React Router
                history.push('/dashboard'); // Ensure `history` is available in your component
            } else {
                console.error("Failed to update authentication state.");
            }
        } else {
            console.error(`Received unexpected status code ${response.status}`);
        }
    } catch (error) {
        if (error.response) {
            // Handle errors thrown from the server side
            console.error(`Login API Error: ${error.response.status} - ${error.response.data.message}`);
        } else if (error.request) {
            // Handle errors related to the request itself (like network issues)
            console.error(`Network/Request Error: ${error.request}`);
        } else {
            // Handle other errors
            console.error(`Error: ${error.message}`);
        }
    }
}
