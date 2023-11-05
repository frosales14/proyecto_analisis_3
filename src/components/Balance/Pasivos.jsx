export const Pasivos = () => {
    return (
      <>
        <NavbarWithMegaMenu />
        
        <div class="bg-gray-100 p-4">
    <form class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-4">
        <label for="cpagar" class="block text-gray-600 font-semibold">Cuentas por Pagar:</label>
        <input
          type="text"
          id="cpagar"
          name="cpagar"
          class="border border-gray-300 rounded p-2 w-full"
          placeholder="0.00"
        />
      </div>
  
      <div class="mb-4">
        <label for="dcortoplazo" class="block text-gray-600 font-semibold">Deudas a Corto Plazo:</label>
        <input
          type="text"
          id="dcortoplazo"
          name="dcortoplazo"
          class="border border-gray-300 rounded p-2 w-full"
          placeholder="0.00"
        />
      </div>
      <div class="mb-4">
        <label for="obfincor" class="block text-gray-600 font-semibold">Obligaciones Financieras Corrientes:</label>
        <input
          type="text"
          id="obfincor"
          name="obfincor"
          class="border border-gray-300 rounded p-2 w-full"
          placeholder="0.00"
        />
      </div>
  
      <div class="mb-4">
        <label for="impagar" class="block text-gray-600 font-semibold">Impuestos a Pagar:</label>
        <input
          type="text"
          id="impagar"
          name="impagar"
          class="border border-gray-300 rounded p-2 w-full"
          placeholder="0.00"
        />
      </div>
  
      <div class="mb-4">
        <label for="salbepar" class="block text-gray-600 font-semibold">Salarios y Beneficios por Pagar:</label>
        <input
          type="text"
          id="salbepar"
          name="salbepar"
          class="border border-gray-300 rounded p-2 w-full"
          placeholder="0.00"
        />
      </div>
  
      <div class="mb-4">
        <label for="intpagar" class="block text-gray-600 font-semibold">Intereses por Pagar:</label>
        <input
          type="text"
          id="intpagar"
          name="intpagar"
          class="border border-gray-300 rounded p-2 w-full"
          placeholder="0.00"
        />
      </div>
      <div class="mb-4">
        <label for="divpagar" class="block text-gray-600 font-semibold">Dividendos por Pagar:</label>
        <input
          type="text"
          id="divpagar"
          name="divpagar"
          class="border border-gray-300 rounded p-2 w-full"
          placeholder="0.00"
        />
      </div>

      <div class="mb-4">
        <label for="otrasobligaciones" class="block text-gray-600 font-semibold">Otras Obligaciones Corrientes:</label>
        <input
          type="text"
          id="otrasobligaciones"
          name="otrasobligaciones"
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