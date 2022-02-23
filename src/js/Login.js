import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

export default function Login() {
    const navigate = useNavigate();

    function IniciarSesion() {
        navigate('/', { replace: false })
        alert("Has iniciado sesión")
    }

    return (
        <div>
            <div className='container'>
                <form className='rounded-3 border bg-light position-absolute top-50 start-50 translate-middle' style={{ 'width': '30%', 'height': '50%' }}>

                    <h1 className='text-center mt-5 mb-4'>Inicio de Sesión!</h1>
                    <section className='text-center fs-5 mb-5'>Ingrese su cuenta</section>

                    <div className='form-group position-absolute top-50 start-50 translate-middle' style={{ 'width': '70%' }}>
                        <input className='form-control mt-5 mb-2' type='text' placeholder='Usuario' />
                        <input className='form-control mb-2' type='password' placeholder='Contraseña' />

                        <a className='alert-link text-decoration-none' href='#'>No tienes una cuenta?, Crea una ya!</a>

                        <button className='btn-primary form-control mt-4 bg-danger' onClick={() => IniciarSesion()}>
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}