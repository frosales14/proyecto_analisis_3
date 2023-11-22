import React, { useState } from 'react';

const MargenBrutoUtilidad = () => {
  const [ingresos, setIngresos] = useState('');
  const [costos, setCostos] = useState('');
  const [margenBruto, setMargenBruto] = useState(null);
  const [error, setError] = useState('');
  const [comentario, setComentario] = useState('');

  const handleIngresosChange = (e) => {
    setIngresos(e.target.value);
  };

  const handleCostosChange = (e) => {
    setCostos(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!ingresos.trim() || !costos.trim()) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    setError('');

    // Calcula el margen bruto de utilidad
    const ingresosFloat = parseFloat(ingresos);
    const costosFloat = parseFloat(costos);

    if (costosFloat >= ingresosFloat) {
      setError('Los costos no pueden ser iguales o mayores que los ingresos.');
      setMargenBruto(null);
      return;
    }

    const margenBrutoCalculado = ((ingresosFloat - costosFloat) / ingresosFloat) * 100;
    setMargenBruto(margenBrutoCalculado.toFixed(2));

    // Establecer comentario según el resultado
    if (margenBrutoCalculado >= 50) {
      setComentario('El margen bruto de utilidad es saludable. ¡Buen trabajo!');
    } else {
      setComentario('El margen bruto de utilidad puede ser mejorado. Se recomienda revisar los costos.');
    }
  };

  const handleReset = () => {
    setIngresos('');
    setCostos('');
    setMargenBruto(null);
    setError('');
    setComentario('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Margen Bruto de Utilidad</h1>
        <div className="w-full max-w-md p-4 bg-white rounded-md shadow-md">
          <form onSubmit={handleSubmit}>
            <label className="block mb-2">
              Ingresos:
              <input
                type="text"
                value={ingresos}
                onChange={handleIngresosChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese el monto de ingresos"
              />
            </label>
            <label className="block mb-2">
              Costos:
              <input
                type="text"
                value={costos}
                onChange={handleCostosChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Ingrese el monto de costos"
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

            {margenBruto !== null && (
              <div className="mt-4">
                <p>
                  Margen Bruto de Utilidad: <strong>{margenBruto}%</strong>
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

export default MargenBrutoUtilidad;
