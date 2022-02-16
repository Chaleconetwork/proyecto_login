import '../css/Task.css';

export default function Task() {
    function alerta() {
        alert('Creando Tarea')
    }
    return (

        <div>
            <div className='LeftSideBar-Box'>
                <header>My App</header>
                <ul>
                    <li> <a href='/'>Cerrar Sesión</a> </li>
                </ul>
            </div>
        </div>
    );
}