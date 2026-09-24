import ReactModal from "react-modal"
import useMenu from "../hooks/useMenu"
import Portada from "../components/Portada"
import Navegacion from "../components/Navegacion"
import Menu from "../components/Menu"
import Contacto from "../components/Contacto"
import ModalProducto from "../components/ModalProducto"
import Carrito from "../components/Carrito"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import ModalAlert from "../components/ModalAlert"
import "../styles/landing.css"

function App() {
  const {modal, handleCerrarModal, alertPizza, setAlertPizza} = useMenu()

  return (
    <>
      <Portada />
      <Navegacion />
      <Menu />
      <Contacto />
      {modal && (
        <ReactModal
          isOpen={modal}
          className="modal modal_landing"
          overlayClassName="overlay overlay_landing"
          ariaHideApp={false}
          onRequestClose={handleCerrarModal}
        >
          <ModalProducto />
        </ReactModal>
      )}
      <Carrito />
      {alertPizza && (
        <ReactModal
          isOpen={alertPizza}
          className="modal modal_landing"
          overlayClassName="overlay overlay_landing"
          ariaHideApp={false}
          onRequestClose={() => setAlertPizza(false)}
        >
          <ModalAlert message="Primeiro você deve adicionar os sabores restantes à pizza" onClick={() => setAlertPizza(false)}/>
        </ReactModal>
      )}
      <ToastContainer autoClose={1000} pauseOnHover={false}/>
    </>
  )
}

export default App
