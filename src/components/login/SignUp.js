import * as React from 'react';
import Button from '@mui/material/Button';
import {FormControl, FormLabel, Input, Link, Typography} from "@mui/material";
import {Sheet} from "@mui/joy";
import {login, signUp} from "../../utils/api";
import {useState} from "react";

export default function SignUp({toggleState, setState, state}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    return (<Sheet
        sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
        }}
        variant="outlined"
    >
        <div>
            <Typography level="h4" component="h1">
                <b>Добро пожаловать!</b>
            </Typography>
            <Typography level="body-sm">Войдите, чтобы продолжить.</Typography>
        </div>
        <FormControl>
            <FormLabel>Логин</FormLabel>
            <Input
                // html input attribute
                name="username"
                type="username"
                placeholder="username"
                value={username}
                onInput={e => setUsername(e.target.value)}
            />
        </FormControl>
        <FormControl>
            <FormLabel>Имя</FormLabel>
            <Input
                // html input attribute
                name="firstName"
                type="text"
                placeholder="Иванов Иван Иванович"
                value={firstName}
                onInput={e => setFirstName(e.target.value)}
            />
        </FormControl>
        <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
                // html input attribute
                name="email"
                type="email"
                placeholder="имя@компания.рф"
                value={email}
                onInput={e => setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl>
            <FormLabel>Пароль</FormLabel>
            <Input
                // html input attribute
                name="password"
                type="password"
                placeholder="пароль"
                value={password}
                onInput={e => setPassword(e.target.value)}
            />
        </FormControl>
        <Button sx={{ mt: 1 /* margin top */ }} onClick={async () => {
            const response = await signUp({username, password, firstName, email});
            const token = await response.json();
            localStorage.setItem('token', token?.token);
            setState({...state, user: {token: token?.token, username: username}});
        }}>Зарегистрироваться</Button>
        <Button
            sx={{ fontSize: 'sm', alignSelf: 'center' }}
            onClick={toggleState}
        >
            Уже есть аккаунт? Войдите
        </Button>
    </Sheet>);
}