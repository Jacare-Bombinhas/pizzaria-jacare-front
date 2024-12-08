import { Outlet } from "react-router-dom"

import styles from "../styles/layouts/LoginLayout.module.css"

export default function LoginLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
      </header>

      <section className={styles.section}>
        <Outlet />
      </section>
    </div>
  )
}
