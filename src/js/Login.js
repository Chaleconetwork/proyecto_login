import { useNavigate } from 'react-router-dom';
import '../css/Login.css';


export default function Login() {
    const navigate = useNavigate();

    function IniciarSesion() {
        navigate('/', { replace: false });
        alert("Has iniciado sesión");
    }

    return (
        <div>
            <div className='container'>
                <form className='rounded-3 bg-white border position-absolute top-50 start-50 translate-middle' style={{ 'width': '25%', 'height': '50%' }}>

                    <h1 className='text-center mt-5 mb-4'>Inicio de Sesión!</h1>

                    <div className='form-group position-absolute top-50 start-50 translate-middle' style={{ 'width': '70%' }}>
                        <input className='form-control p-2 mt-5 mb-2' type='text' placeholder='USUARIO' />
                        <input className='form-control p-2 mb-2' type='password' placeholder='CONTRASEÑA' />

                        <button className='btn-primary p-2 form-control mt-4 bg-danger' onClick={() => IniciarSesion()}>
                            Iniciar Sesión
                        </button>
                        <div class="border-top m-3 text-center">
                            <a href='#'>Crea una cuenta</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}