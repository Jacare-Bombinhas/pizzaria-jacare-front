import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import useMenu from "../hooks/useMenu"
import ItemCarrito from "./ItemCarrito"

// Always mounted: it lives off-screen and slides in/out through the "abierto" class.
const Carrito = () => {
  const { pedido, total, carrito, setCarrito, handleChangeCarrito, handleRealizarPedido } = useMenu()

  useEffect(() => {
    if (!carrito) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCarrito(false)
    }
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [carrito, setCarrito])

  const vacio = pedido.length === 0

  return (
    <>
      <div
        className={carrito ? "carrito_backdrop carrito_backdrop_abierto" : "carrito_backdrop"}
        onClick={() => setCarrito(false)}
        aria-hidden="true"
      />

      <aside
        className={carrito ? "modal_carrito modal_carrito_abierto" : "modal_carrito"}
        role="dialog"
        aria-label="Seu pedido"
        aria-hidden={!carrito}
      >
        <button className="cerrar_modal" aria-label="cerrar a ventana do pedido" onClick={handleChangeCarrito}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="3" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        <h2 className="titulo_carrito">Seu Pedido</h2>

        <div className="contenedor_mapeo">
          <AnimatePresence initial={false}>
            {pedido.map((item) => (
              <motion.div
                key={item._id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 60 }}
                transition={{ duration: 0.25 }}
              >
                <ItemCarrito item={item} />
              </motion.div>
            ))}
          </AnimatePresence>

          {vacio && <p className="carrito_vacio">Seu pedido está vazio</p>}
        </div>

        <div className="carrito_pie">
          <p className="cuenta_total">Total do pedido: <span>R${total}</span></p>

          <button
            className={vacio ? "realizar_orden" : "realizar_orden hover cursor_pointer"}
            onClick={vacio ? () => { } : () => { handleRealizarPedido() }}
            disabled={vacio}
            aria-label="Realizar o pedido"
          >Realizar pedido</button>

          <p className="leyenda1">Ao fazer o pedido, seu aplicativo WhatsApp será aberto e o pedido será solicitado por esse meio.</p>
          <p className="leyenda2">A taxa de entrega varia de acordo com a região.</p>
        </div>
      </aside>
    </>
  )
}

export default Carrito
