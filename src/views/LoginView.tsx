import styles from "@/styles/views/LoginView.module.css"
import { useState } from "react"
import ErrorMessage from "../components/admin/ErrorMessage"

export default function LoginView() {
  const [name, setname] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleOnSubmit = () => {
    if(name || password === "") {
      setError(true)
    }
  }

  return (
    <form 
      className={styles.login_container}
      onSubmit={() => {handleOnSubmit}}
      noValidate
    >
      <div className={styles.contenedor_label_input}>
        <label htmlFor="name" className={styles.label}>
          Nombre de Usuario
        </label>
        <input
          id="name"
          className={styles.input}
          type="text"
          placeholder="Usuario"
          value={name}
          onChange={(e) => {setname(e.target.value)}}
        />

        {error && name === "" && (
          <ErrorMessage>El nombre es obligatorio</ErrorMessage>
        )}
      </div>

      <div className={styles.contenedor_label_input}>
        <label htmlFor="contraseña" className={styles.label}>
          Contaseña
        </label>
        <input
          id="contraseña"
          className={styles.input}
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />

        {error && name === "" && (
          <ErrorMessage>El nombre es obligatorio</ErrorMessage>
        )}
      </div>

      <button type="submit" className={styles.boton_submit}>Iniciar sesión</button>
    </form>
  )
}
