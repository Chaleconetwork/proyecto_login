import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import Perfil from '../img/cachorro.jpg';

export default function Login() {
    const navigate = useNavigate();

    function IniciarSesion() {
        navigate('/task', { replace: false })
    }

    return (

        <div>
            <main className="Main-container">
                <div className="Div-login">
                    <form className="Form-login">
                        <div className="Imagen-container">
                            <img className="Imagen" src={Perfil}/>	
                        </div>

                        <h1>Inicio de sesión</h1>

                        <div className="Inputs-container">
                            <input type="text" placeholder="usuario"/>
                            <input type="password" placeholder="contraseña"/>
                            <button className="Btn" id='bt_pulsar' onClick={() => IniciarSesion()}>
                                Iniciar Sesión
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>

    );
}