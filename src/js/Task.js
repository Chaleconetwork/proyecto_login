import { useEffect, useState } from 'react';
import '../css/Task.css';

export default function Task() {

    const [estados, setEstados] = useState([]);

    function fetchsarnoso() {
        const url = 'https://fluxoapi.azurewebsites.net/api/estadosapi/todos'

        fetch(url)
            .then(response => response.json())
            .then(data => {

                console.log(data);
                setEstados(data)
            })
    }

    useEffect(() => {
        fetchsarnoso();
    }, [])

    return (
        <div>
            {
                estados.length > 0 && (
                    estados.map(csm => (
                        <div key={csm.estadoId}>
                            <p>{csm.nome}-{csm.sigla}</p>
                            <br/>
                        </div>
                    ))
                )
            }
        </div>
    );
}