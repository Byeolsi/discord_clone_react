import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleClickLoginButton = () => {
        navigate("/lobby", { replace: true });
    }

    return (
        <div className="base">
            <div className="loginBox">
                <div className="greeting">돌아오신 것을 환영합니다!</div>
                <br />
                <div className="subGreeting">We're so excited to see you again!</div>
                <br />
                <div className="inputName" align='left'>이메일</div>
                <form>
                    <input className="inputBox" />
                </form>
                <br />
                <div className="inputName" align='left'>비밀번호</div>
                <form>
                    <input className="inputBox" />
                </form>
                <div className="forgotPassword" align='left'>Forgot your password?</div>
                <br />
                <form>
                    <button className="loginButton" onClick={handleClickLoginButton}>로그인</button>
                </form>
                <div className="subGreeting" align='left'>계정이 없으신가요?
                    <span className="forgotPassword"> 가입하기</span>
                </div>
            </div>
        </div>
    );
};

export default Login;