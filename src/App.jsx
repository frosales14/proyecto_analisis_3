import { NavbarWithMegaMenu} from "./components/Navbar"
import { SimpleFooter } from "./components/Footer"

export const App = () => {
  return (
    <>
    <NavbarWithMegaMenu />
    <div className="h-screen bg-gray-200">Probando</div>
    <SimpleFooter />
    </>
  )
}

