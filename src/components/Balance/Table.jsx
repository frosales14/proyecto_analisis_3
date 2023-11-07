
export const Table = () => {
  return (
    <>
      <div className="bg-gray-100 p-4 flex items-center justify-center h-full">
        <form className="bg-white p-6 rounded-lg shadow-md w-full">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="pr-4 text-gray-600 font-semibold">Efectivo:</td>
                <td>
                  <input
                    type="text"
                    id="efectivo"
                    name="efectivo"
                    className="border border-gray-300 rounded p-2 w-full"
                    placeholder="0.00"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4 text-gray-600 font-semibold">Cuentas por Cobrar:</td>
                <td>
                  <input
                    type="text"
                    id="cuentas"
                    name="cuentas"
                    className="border border-gray-300 rounded p-2 w-full"
                    placeholder="0.00"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4 text-gray-600 font-semibold">Inventario:</td>
                <td>
                  <input
                    type="text"
                    id="inventario"
                    name="inventario"
                    className="border border-gray-300 rounded p-2 w-full"
                    placeholder="0.00"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4 text-gray-600 font-semibold">Valores Negociables:</td>
                <td>
                  <input
                    type="text"
                    id="negociables"
                    name="negociables"
                    className="border border-gray-300 rounded p-2 w-full"
                    placeholder="0.00"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4 text-gray-600 font-semibold">Anticipos y Depositos:</td>
                <td>
                  <input
                    type="text"
                    id="antidepo"
                    name="antidepo"
                    className="border border-gray-300 rounded p-2 w-full"
                    placeholder="0.00"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4 text-gray-600 font-semibold">Activos Disponibles para Venta:</td>
                <td>
                  <input
                    type="text"
                    id="dispventa"
                    name="dispventa"
                    className="border border-gray-300 rounded p-2 w-full"
                    placeholder="0.00"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4 text-gray-600 font-semibold">Inventario a Corto Plazo:</td>
                <td>
                  <input
                    type="text"
                    id="invcorto"
                    name="invcorto"
                    className="border border-gray-300 rounded p-2 w-full"
                    placeholder="0.00"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4 text-gray-600 font-semibold">Otros Activos Corrientes:</td>
                <td>
                  <input
                    type="text"
                    id="otroactivo"
                    name="otroactivo"
                    className="border border-gray-300 rounded p-2 w-full"
                    placeholder="0.00"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4"></td>
                <td>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                  >
                    Calcular
                  </button>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border border-gray-300 rounded p-2 m-9"
                    placeholder="Total Activos Corrientes"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};
