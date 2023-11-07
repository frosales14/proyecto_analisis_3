import { NavbarWithMegaMenu } from "./Navbar";
import { SimpleFooter } from "./Footer";
import {Activos} from "./balance/Activos";
import {Pasivos} from "./balance/Pasivos";
import {PatrimonioNeto} from "./balance/Patrimonio Neto";
import { useState } from "react";


export const Balance = () => {
  const [openComponent, setOpenComponent] = useState(false);

  const showComponent = (nameComponent) => {
    setOpenComponent(nameComponent);
  }

  return (
    <>
      <NavbarWithMegaMenu />
      <div className="mb-4 justify-center flex">
      <button
        onClick={() => showComponent('Activos')}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors m-8">
        Activos
      </button>

      <button
        onClick={() => showComponent('Pasivos')}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors m-8"
      >
        Pasivos
      </button>
      <button
        onClick={() => showComponent('PatrimonioNeto')}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors m-8"
      >
        Patrimonio Neto
      </button>
      </div>
      {openComponent === 'Activos' && <Activos />}
      {openComponent === 'Pasivos' && <Pasivos />}
      {openComponent === 'PatrimonioNeto' && <PatrimonioNeto />}
      <SimpleFooter />
    </>
  );
};
