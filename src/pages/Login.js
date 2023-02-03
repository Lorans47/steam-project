import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';
import './login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        navigate('/');
    };

    return (
        <div className="login">
            <h4 className="title">Login with your Steam account</h4>
            <div className="login-form-wrapper">
                <div className="input-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                {username && password && (
                    <button className="login-button" onClick={() => login()}>
                        Login
                    </button>
                )}
            </div>
        </div>
    );
}
