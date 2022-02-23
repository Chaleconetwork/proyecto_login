import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    function IniciarSesion() {
        navigate('/Login', { replace: false })
    }

    function HomeX() {
        navigate('/', { replace: false })
    }

    return (
        <div className='navbar-last'>
            <div className='navbar-brand bg-danger mb-5' style={{ 'width': '100%' }}>
 
                <div className='d-block text-end'>
                    <button onClick={() => HomeX()} class='btn btn-danger'>Home</button>
                    <button class='btn btn-danger me-2'>Crear cuenta</button>
                    <button onClick={() => IniciarSesion()} class='btn btn-danger me-3'>Iniciar Sesión</button>
                </div>
            </div>
        </div>
    );
}