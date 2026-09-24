
const Portada = () => {

  return (
    <div className="foto_inicio" id="portada">
      {window.matchMedia("(min-width: 430px)").matches && (
        <img src="/assets/logo.svg" alt="logo" className="logo" />
      )}

      <h1 className="titulo">Pizzaria Jacaré</h1>

      <a className="scroll_cue" href="#menu" aria-label="ir a menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </div>
  )
}

export default Portada
