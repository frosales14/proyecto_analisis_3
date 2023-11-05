import { NavbarWithMegaMenu } from "./Navbar";
import { SimpleFooter } from "./Footer";

export const Balance = () => {
  return (
    <>
      <NavbarWithMegaMenu />
      <div class="mb-4">
      <button
        type="submit"
        class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors m-8"
      >
        Activos
      </button>

      <button
        type="submit"
        class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors m-8"
      >
        Pasivos
      </button>
      <button
        type="submit"
        class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors m-8"
      >
        Patrimonio Neto
      </button>
      </div>
      <SimpleFooter />
    </>
  );
};
