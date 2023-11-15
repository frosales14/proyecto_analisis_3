import React, { useState } from 'react';

const RotacionInventario = () => {
  const [costoVentas, setCostoVentas] = useState('');
  const [inventarioPromedio, setInventarioPromedio] = useState('');
  const [rotacionInventario, setRotacionInventario] = useState(null);
  const [error, setError] = useState('');
  const [comentario, setComentario] = useState('');

  const handleCostoVentasChange = (e) => {
    setCostoVentas(e.target.value);
  };

  const handleInventarioPromedioChange = (e) => {
    setInventarioPromedio(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!costoVentas.trim() || !inventarioPromedio.trim()) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    setError('');

    // Calcula la rotación de inventario
    const costoVentasFloat = parseFloat(costoVentas);
    const inventarioPromedioFloat = parseFloat(inventarioPromedio);

    if (costoVentasFloat <= 0 || inventarioPromedioFloat <= 0) {
      setError('El costo de ventas o el inventario promedio debe ser mayor que cero.');
      setRotacionInventario(null);
      return;
    }

    const rotacionInventarioCalculada = costoVentasFloat / inventarioPromedioFloat;
    setRotacionInventario(rotacionInventarioCalculada.toFixed(2));

    // Establecer comentario según el resultado
    if (rotacionInventarioCalculada >= 4) {
      setComentario('La rotación de inventario es alta. ¡Excelente gestión de inventario!');
    } else {
      setComentario('La rotación de inventario puede ser mejorada. Se recomienda optimizar la gestión de inventario.');
    }
  };

  const handleReset = () => {
    setCostoVentas('');
    setInventarioPromedio('');
    setRotacionInventario(null);
    setError('');
    setComentario('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Rotación de Inventario</h1>
        <div className="w-full max-w-md p-4 bg-white rounded-md shadow-md">
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Costo de Ventas:
              <input
                type="text"
                value={costoVentas}
                onChange={handleCostoVentasChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese el monto del costo de ventas"
              />
            </label>
            <label className="block mb-2">
              Inventario Promedio:
              <input
                type="text"
                value={inventarioPromedio}
                onChange={handleInventarioPromedioChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese el monto del inventario promedio"
              />
            </label>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Calcular
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Limpiar
              </button>
            </div>

            {rotacionInventario !== null && (
              <div className="mt-4">
                <p>
                  Rotación de Inventario: <strong>{rotacionInventario}</strong>
                </p>
                <p className="mt-2">
                  Comentario: {comentario}
                </p>
              </div>
            )}

            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RotacionInventario;
