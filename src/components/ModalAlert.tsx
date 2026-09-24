
type ModalAlertProps = {
  message: string,
  onClick: () => void
}

export default function ModalAlert({message, onClick}: ModalAlertProps) {

  return (
    <div className="modal_alert">
      <p className="modal_alert_texto">{message}</p>
      <button className="modal_alert_boton" onClick={onClick}>OK</button>
    </div>
  )
}
