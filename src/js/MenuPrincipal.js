import * as Datos from './Datos.json';

console.log(Datos);

export default function MenuPrincipal() {

    function CrearTareas() {
        
        const saludo = 'Oi né' 

    }

    return (
        <div>
            <div className='container'>

                <h1 className='text-center'>Título</h1>

                <div className='text-center mt-4'>
                    <form className='form-control position-absolute' style={{ 'width': '10%', 'height': '30%', 'left': '0' }}>
                        <div>
                            <label className='input-group'>
                                Nombre de la tarea
                                <input className='form-control' style={{ 'width': '100%' }} />
                            </label>
                            <label className='input-group'>
                                Persona asignada
                                <input className='form-control' style={{ 'width': '100%' }} />
                            </label>
                            <label className='input-group'>
                                Descripción
                                <input className='form-control' style={{ 'width': '100%' }} />
                            </label>
                        </div>
                        <div>
                            <button className='btn-primary form-control mt-4 bg-danger'>
                                Crear tarea
                            </button>
                        </div>
                    </form>
                    <div className='container'>
                        <form className='rounded-3 border bg-light position-absolute top-50 start-50 translate-middle' style={{ 'width': '30%', 'height': '50%' }}>
                            <h1>{CrearTareas}</h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}