export const Activos = () => {
  return (
    <>
      <NavbarWithMegaMenu />
      
      <div class="bg-gray-100 p-4">
  <form class="bg-white p-6 rounded-lg shadow-md">
    <div class="mb-4">
      <label for="efectivo" class="block text-gray-600 font-semibold">Efectivo:</label>
      <input
        type="text"
        id="efectivo"
        name="efectivo"
        class="border border-gray-300 rounded p-2 w-full"
        placeholder="0.00"
      />
    </div>

    <div class="mb-4">
      <label for="cuentas" class="block text-gray-600 font-semibold">Cuentas por Cobrar:</label>
      <input
        type="text"
        id="cuentas"
        name="cuentas"
        class="border border-gray-300 rounded p-2 w-full"
        placeholder="0.00"
      />
    </div>
    <div class="mb-4">
      <label for="inventario" class="block text-gray-600 font-semibold">Inventario:</label>
      <input
        type="text"
        id="inventario"
        name="inventario"
        class="border border-gray-300 rounded p-2 w-full"
        placeholder="0.00"
      />
    </div>

    <div class="mb-4">
      <label for="negociables" class="block text-gray-600 font-semibold">Valores Negociables:</label>
      <input
        type="text"
        id="negociables"
        name="negociables"
        class="border border-gray-300 rounded p-2 w-full"
        placeholder="0.00"
      />
    </div>

    <div class="mb-4">
      <label for="antidepo" class="block text-gray-600 font-semibold">Anticipos y Depositos:</label>
      <input
        type="text"
        id="antidepo"
        name="antidepo"
        class="border border-gray-300 rounded p-2 w-full"
        placeholder="0.00"
      />
    </div>

    <div class="mb-4">
      <label for="dispventa" class="block text-gray-600 font-semibold">Activos Disponibles para Venta:</label>
      <input
        type="text"
        id="dispventa"
        name="dispventa"
        class="border border-gray-300 rounded p-2 w-full"
        placeholder="0.00"
      />
    </div>

    <div class="mb-4">
      <label for="invcorto" class="block text-gray-600 font-semibold">Inventario a Corto Plazo:</label>
      <input
        type="text"
        id="invcorto"
        name="invcorto"
        class="border border-gray-300 rounded p-2 w-full"
        placeholder="0.00"
      />
    </div>

    <div class="mb-4">
      <label for="otroactivo" class="block text-gray-600 font-semibold">Otros Activos Corrientes:</label>
      <input
        type="text"
        id="otroactivo"
        name="otroactivo"
        class="border border-gray-300 rounded p-2 w-full"
        placeholder="0.00"
      />
    </div>

    <div class="mb-4">
      <button
        type="submit"
        class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Calcular
      </button>
      <input
        type="text"
        id="name"
        name="name"
        class="border border-gray-300 rounded p-2 m-9"
        placeholder="Total Activos Corrientes"
      />


    </div>
  </form>
</div>

      <SimpleFooter />
    </>


  );
};