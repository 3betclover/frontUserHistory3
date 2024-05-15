import React, { useState } from 'react';

function Categorias() {
    const [nombre, setNombre] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const categoria = { nombre };
        fetch('http://localhost:8080/categorias/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(categoria)
        }).then(() => {
            console.log('new categoria is added');
            setNombre('');
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Add a name for the category
                    <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
                </label>
            </form>
        </div>
    );
}

export default Categorias;