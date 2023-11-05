export const PatrimonioNeto = () => {
    return (
      <>
        <NavbarWithMegaMenu />
        
        <div class="bg-gray-100 p-4">
    <form class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-4">
        <label for="capsoc" class="block text-gray-600 font-semibold">Capital Social:</label>
        <input
          type="text"
          id="capsoc"
          name="capsoc"
          class="border border-gray-300 rounded p-2 w-full"
          placeholder="0.00"
        />
      </div>
  
      <div class="mb-4">
        <label for="reservas" class="block text-gray-600 font-semibold">Reservas:</label>
        <input
          type="text"
          id="reservas"
          name="reservas"
          class="border border-gray-300 rounded p-2 w-full"
          placeholder="0.00"
        />
      </div>
      <div class="mb-4">
        <label for="utilreten" class="block text-gray-600 font-semibold">Utilidades Retenidas:</label>
        <input
          type="text"
          id="utilreten"
          name="utilreten"
          class="border border-gray-300 rounded p-2 w-full"
          placeholder="0.00"
        />
      </div>
  
      <div class="mb-4">
        <label for="resultejer" class="block text-gray-600 font-semibold">Resultados del Ejercicio:</label>
        <input
          type="text"
          id="resultejer"
          name="resultejer"
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