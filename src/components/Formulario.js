import React, { useRef } from 'react';
import Salas from './Salas';
import Categorias from './Categorias';
import Imagen from './Imagen';

function Formulario() {
    const salasRef = useRef();
    const categoriasRef = useRef();
    const imagenRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Call submit functions of each child component
        salasRef.current.handleSubmit();
        categoriasRef.current.handleSubmit();
        imagenRef.current.handleSubmit();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Salas ref={salasRef} />
                <Categorias ref={categoriasRef} />
                <Imagen ref={imagenRef} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Formulario;