import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../contexts/AuthContextProvider';
import user from '../data/user';
import './Profile.css';
import games from './../data/library';
import friends from '../data/friends';

export default function Profile() {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, []);

    return (
        <div className="user-profile">
            <div className="profile-wrapper">
                <img src="steamavatar.png"></img>

                <div className="profile">
                    <div className="profile-username">{user.username}</div>
                    <div className="profile-address">
                        Name: {user.name} | {user.address.city},
                        {user.address.state},{user.address.country}
                        <p>{user.description}</p>
                    </div>
                </div>
                <div className="level">
                    Level {user.level}
                    <button className="edit-profile">EditProfile</button>
                </div>
            </div>
            <p className="information">Information</p>
            <div className="gaming-rig">
                <h2>Gaming Rig:</h2>

                <p>Cpu: {user.gamingrig.cpu}</p>
                <p>Cooler: {user.gamingrig.cooler}</p>
                <p>Motherboard: {user.gamingrig.motherboard}</p>
                <p>Memory: {user.gamingrig.memory}</p>
                <p>GPU: {user.gamingrig.gpu}</p>
                <p>Power Supply: {user.gamingrig.powersupply}</p>
                <p>SSD: {user.gamingrig.ssd}</p>

                <h2>Peripherals:</h2>
                <p>Keyboard: {user.pheripherals.keyboard}</p>
                <p>Mouse: {user.pheripherals.Mouse}</p>
                <p>Headset: {user.pheripherals.Headset}</p>
                <p>Monitor: {user.pheripherals.Monitor}</p>
            </div>
            <div className="activity-friends">
                <div className="activity">
                    <div className="recent-activity">
                        <div className="recent-activity-text">
                            Recent Activity
                            <div>{user.hoursplayed}</div>
                        </div>
                    </div>

                    <div className="game-activity-wrapper">
                        <img
                            className="game-image"
                            src={games.get('csgo').img}
                        ></img>

                        <div className="game-name">
                            {games.get('csgo').name}
                        </div>
                        <div className="game-hours">
                            <p> {games.get('csgo').hoursplayed}</p>
                            <p> {games.get('csgo').lastplayed}</p>
                        </div>
                    </div>
                    <div className="game-activity-wrapper">
                        <img
                            className="game-image"
                            src={games.get('dota2').img}
                        ></img>

                        <div className="game-name">
                            {games.get('dota2').name}
                        </div>
                        <div className="game-hours">
                            <p> {games.get('dota2').hoursplayed}</p>
                            <p> {games.get('dota2').lastplayed}</p>
                        </div>
                    </div>
                    <div className="game-activity-wrapper">
                        <img
                            className="game-image"
                            src={games.get('gta5').img}
                        ></img>

                        <div className="game-name">
                            {games.get('gta5').name}
                        </div>
                        <div className="game-hours">
                            <p> {games.get('gta5').hoursplayed}</p>
                            <p> {games.get('gta5').lastplayed}</p>
                        </div>
                    </div>
                </div>

                <div className="friends-list-wrapper">
                    <div className="friends-text">Friends</div>
                    <div className="friends">
                        <img
                            className="friends-image"
                            src={friends.get('soleil').avatar}
                        ></img>
                        <div className="friends-name-lastonline-wrapper">
                            <p className="friends-name">
                                {friends.get('soleil').username}
                            </p>
                            <p className="friends-lastonline">
                                {friends.get('soleil').status}
                            </p>
                        </div>
                        <p className="friends-level">
                            {friends.get('soleil').level}
                        </p>
                    </div>
                    <div className="friends">
                        <img
                            className="friends-image"
                            src={friends.get('sady2k').avatar}
                        ></img>
                        <div className="friends-name-lastonline-wrapper">
                            <p className="friends-name">
                                {friends.get('sady2k').username}
                            </p>
                            <p className="friends-lastonline">
                                {friends.get('sady2k').status}
                            </p>
                        </div>
                        <p className="friends-level">
                            {friends.get('sady2k').level}
                        </p>
                    </div>
                    <div className="friends">
                        <img
                            className="friends-image"
                            src={friends.get('bobonete').avatar}
                        ></img>
                        <div className="friends-name-lastonline-wrapper">
                            <p className="friends-name">
                                {friends.get('bobonete').username}
                            </p>
                            <p className="friends-lastonline">
                                {friends.get('bobonete').status}
                            </p>
                        </div>
                        <p className="friends-level">
                            {friends.get('bobonete').level}
                        </p>
                    </div>
                    <div className="friends">
                        <img
                            className="friends-image"
                            src={friends.get('costel').avatar}
                        ></img>
                        <div className="friends-name-lastonline-wrapper">
                            <p className="friends-name">
                                {friends.get('costel').username}
                            </p>
                            <p className="friends-lastonline">
                                {friends.get('costel').status}
                            </p>
                        </div>
                        <p className="friends-level">
                            {friends.get('costel').level}
                        </p>
                    </div>
                    <div className="friends">
                        <img
                            className="friends-image"
                            src={friends.get('lorans').avatar}
                        ></img>
                        <div className="friends-name-lastonline-wrapper">
                            <p className="friends-name">
                                {friends.get('lorans').username}
                            </p>
                            <p className="friends-lastonline">
                                {friends.get('lorans').status}
                            </p>
                        </div>
                        <p className="friends-level">
                            {friends.get('lorans').level}
                        </p>
                    </div>
                    <div className="friends">
                        <img
                            className="friends-image"
                            src={friends.get('ss1cada').avatar}
                        ></img>
                        <div className="friends-name-lastonline-wrapper">
                            <p className="friends-name">
                                {friends.get('ss1cada').username}
                            </p>
                            <p className="friends-lastonline">
                                {friends.get('ss1cada').status}
                            </p>
                        </div>
                        <p className="friends-level">
                            {friends.get('ss1cada').level}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
