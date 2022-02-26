import { AiOutlineLogin } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate();

    function IniciarSesion() {
        navigate('/Login', { replace: false });
    }

    function HomeX() {
        navigate('/', { replace: false });
    }

    return (
        <div className='navbar-last'>
            <div className='navbar-brand bg-danger' style={{ 'width': '100%' }}>
 
                <div className='d-block text-end'>
                    <button onClick={() => HomeX()} class='btn btn-danger'><BiHomeAlt/> Home</button>
                    <button class='btn btn-danger me-2'><IoMdAdd/> Crear tarea</button>
                    <button onClick={() => IniciarSesion()} class='btn btn-danger me-3'> <AiOutlineLogin/> Iniciar Sesión</button>
                </div>
            </div>
        </div>
    );
}