import './Lobby.css';
import friend from './img/friend.png';

const Lobby = () => {
    return (
        <div className="lobby">
            <div className="talkingRoomBar" />
            <div className="directMessage">
                <div className="findCommunication">
                    <button className="findCommunicationButton">대화 찾기 또는 시작하기</button>
                </div>
                <div className="directMessageFriend">
                    <img className="friendImage" src={friend} alt="friend" />
                </div>
            </div>
        </div>
    );
};

export default Lobby;