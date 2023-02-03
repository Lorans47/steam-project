import { useState } from 'react';
import './Support.css';

export default function Support() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="support">
            <h4 className="support-title">Submit your request</h4>
            <div className="support-form-wrapper">
                <div className="test123">
                    <div className="support-input-group">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                        />
                    </div>
                    <div className="support-input-group">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="support-input-group">
                        <label>Game</label>
                        <input type="text" name="game" />
                    </div>
                    <div className="support-input-group">
                        <label>Description</label>
                        <input
                            className="support-description"
                            type="text"
                            name="description"
                        />
                    </div>
                </div>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    );
}
