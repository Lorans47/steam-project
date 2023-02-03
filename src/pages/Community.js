import './Community.css';

export default function Community() {
    return (
        <div className="community-page-wrapper">
            <div className="community-activity">
                <h2 className="community-activity-text">Community Activity</h2>
                <h3 className="community-activity-description">
                    Community and official content for all games and software on
                    Steam.
                </h3>
            </div>
            <div className="screenshot-description-wrapper">
                <img src="https://steamuserimages-a.akamaihd.net/ugc/2005824825122147826/678C18CD4195EEE773F79A9BBC72B81011A4E2DB/?imw=1920&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"></img>
                <p className="game-name">Game: PUBG</p>
                <p className="game-description">
                    Cool in-game screenshot from PUBG game.
                </p>
            </div>
            <div className="screenshot-description-wrapper">
                <img src="https://steamuserimages-a.akamaihd.net/ugc/2038475922414954965/0A6E117D38A87FDB91CA78DDAAB957A409D02829/?imw=1920&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"></img>
                <p className="game-name">Game: Star Wars Jedi: Fallen Order</p>
                <p className="game-description">Green sword ready to cut!</p>
            </div>
            <div className="screenshot-description-wrapper">
                <img src="https://steamuserimages-a.akamaihd.net/ugc/2011454324650654931/B05160B6DFAB380A437CB586BD184AC641313165/?imw=1920&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"></img>
                <p className="game-name">Game: Forza Horizon 4</p>
                <p className="game-description">
                    Check out my new car, it's simply a beast!
                </p>
            </div>
        </div>
    );
}
