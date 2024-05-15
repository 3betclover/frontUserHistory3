import React, { useState } from 'react';

function Imagen() {
    const [imagenes, setImagenes] = useState([]);

const handleImageUpload = (event) => {
    if (event.target.files.length > 5) {
        alert('No puedes seleccionar más de 5 imágenes a la vez.');
        event.target.value = null; // Reset the file input
        return;
    }
    setImagenes(event.target.files);
};

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        let totalSize = 0; // Total size of all images

        // Check if the number of images exceeds the limit
        if (imagenes.length > 5) {
            alert('No puedes subir más de 5 imágenes a la vez.');
            return;
        }

        for (let i = 0; i < imagenes.length; i++) {
            totalSize += imagenes[i].size; // Add the size of each image to the total
            formData.append('imagenes', imagenes[i]);
        }

        // Check if the total size of images exceeds the limit (15MB)
        if (totalSize > 15 * 1024 * 1024) {
            alert('El tamaño total de las imágenes no puede superar los 15MB.');
            return;
        }

        fetch('http://localhost:8080/imagenes/add', {
            method: 'POST',
            body: formData
        }).then(() => {
            console.log('new imagen is added');
            setImagenes([]);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Imagenes:
                    <input type="file" multiple onChange={handleImageUpload} />
                </label>
            </form>
        </div>
    );
}

export default Imagen;