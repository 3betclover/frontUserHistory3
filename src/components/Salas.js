import React, { useState } from 'react';

function Salas() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [capacidad, setCapacidad] = useState('');
    const [precio, setPrecio] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const sala = { nombre, descripcion, capacidad, precio };
        fetch('http://localhost:8080/salas/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sala)
        }).then(() => {
            console.log('new sala is added');
            setNombre('');
            setDescripcion('');
            setCapacidad('');
            setPrecio('');
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Add the name of the room.
                    <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
                </label>
                <br />
                <label>
                Add a short description
                    <input type="text" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                </label>
                <br />
                <label>
                Add the maximum capacity of the room.
                    <input type="text" value={capacidad} onChange={e => setCapacidad(e.target.value)} />
                </label>
                <br />
                <label>
                Add the the price of the room in dollars.
                    <input type="text" value={precio} onChange={e => setPrecio(e.target.value)} />
                </label>
                <br />
            </form>
        </div>
    );
}

export default Salas;