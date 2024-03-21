import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

import { API } from '../../service/api';


const signUpInitialValues = {
    name: '',
    email: '',
    password: ''
}

const Login = () => {
    const [account, toggleAccount] = useState('login');
    const [signUp, setSignUp] = useState(signUpInitialValues);
    const [error, setError] = useState(' ');

    const toggleSignUp = () => {
        toggleAccount('signup');
    }

    const toggleLogin = () => {
        toggleAccount('login');
    }


    const onInputChange = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value});
        

    }
   // console.log(signUp);

    const imageURL = 'https://plus.unsplash.com/premium_photo-1673795754003-c54d5f77846b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvbGlkJTIwYmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D';
    const backgroundStyle = {
        backgroundImage: `url(${imageURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const signupUser = async () =>{

        let response = await API.userSignup(signUp);
        if(response.isSuccess){
            setError(' ');
            setSignUp(signUpInitialValues);
            toggleAccount('Login')

        }else{
            setError('Somethin went wrong please try again');

        }
         
    }

    return (
        <Box className="flex justify-center items-center h-screen" style={backgroundStyle}>
            <Box className="w-full max-w-xs bg-white bg-opacity-80 rounded p-8">
                <form className="mb-4">
                    {account === 'login' ? (
                        <div>
                            <Box className="mb-4 ">
                                <TextField id="standard-basic" label="Email" variant="standard" />
                            </Box>
                            <Box className="mb-4">
                                <TextField id="standard-basic" label="Password" variant="standard" />
                            </Box>
                            <Box className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Login
                                </button>
                                <button
                                    className="text-sm text-gray-500 hover:text-gray-600"
                                    type="button"
                                    onClick={toggleSignUp}
                                >
                                    Create an account
                                </button>
                            </Box>
                        </div> 
                    ) : (
                        <div>
                            <Box className="mb-4">
                                <TextField id="standard-basic" onChange={(e) => onInputChange(e)} name='name' label="Name" variant="standard"/>
                                <TextField id="standard-basic" onChange={(e) => onInputChange(e)} name='email' label="Email" variant="standard" />
                                <TextField id="standard-basic" onChange={(e) => onInputChange(e)} name='password' label="Password" variant="standard" />
                            </Box>
                            <Box className="flex flex-col items-center justify-center">
                               {error && <Typography>{error}</Typography>}
                               
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
                                    type="button" onClick={() => signupUser()}
                                >
                                    SignUp
                                </button>
                                <button
                                    className="text-sm text-gray-500 hover:text-gray-600"
                                    type="button"
                                    onClick={toggleLogin}
                                >
                                    Already have an account
                                </button>
                            </Box>
                        </div>
                    )}
                </form>
            </Box>
        </Box>
    );
};

export default Login;
