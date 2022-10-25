import React, { useState } from 'react'
import '../App.css'
import { Box, TextField } from '@mui/material'
import { Button } from '@mui/material'
import { LoginUser } from '../config/firebasemethod'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let createNew = () => {
        navigate("/")
    }

    let login = () => {
        LoginUser({
            email,
            password
        })
            .then((success) => {
                console.log(success)
                navigate("/dashboard", {
                    state: success
                })
            })
            .catch((err) => {
                alert(err);
            })
    }

    return (
        <div className='main'>
            <section className='section'>
                <h1 className='heading'>Login</h1>
                <Box className='input'>
                    <TextField label="Email" onChange={(e) => setEmail(e.target.value)} variant="filled" />
                </Box>
                <Box className='input'>
                    <TextField type='password' onChange={(e) => setPassword(e.target.value)} label="Password" variant="filled" />
                </Box>
                <Button variant="outlined" onClick={login}>Login</Button>
                <Box className='or'>
                    <p>OR</p>
                </Box>
                <Box>
                    <Button onClick={createNew} variant="contained" color="success">Create New Account</Button>
                </Box>
            </section>
        </div>
    )
}

export default Login
