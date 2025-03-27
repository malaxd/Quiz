import React, { useState } from 'react';
import supabase from './supabaseClient';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleTwitchLogin = async () => {
        const { user, session, error } = await supabase.auth.signInWithOAuth({
            provider: 'twitch',
        });
        if (error) {
            console.error(error);
        } else {
            console.log(user, session);
        }
    };

    const handleDiscordLogin = async () => {
        const { user, session, error } = await supabase.auth.signInWithOAuth({
            provider: 'discord',
        });
        if (error) {
            console.error(error);
        } else {
            console.log(user, session);
        }
    };

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        const { user, session, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            console.error(error);
        } else {
            console.log(user, session);
        }
    };

    return (
        <div>
            <button onClick={handleTwitchLogin}>Login with Twitch</button>
            <button onClick={handleDiscordLogin}>Login with Discord</button>
            <form onSubmit={handleEmailLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login with Email</button>
            </form>
        </div>
    );
}

export default Login;
