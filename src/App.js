import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Lobby from './Lobby';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Lobby" element={<Lobby />} />
            </Routes>
        </div>
    );
};

export default App;