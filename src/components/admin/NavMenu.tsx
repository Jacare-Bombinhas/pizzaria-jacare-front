import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import styles from "@/styles/components/NavMenu.module.css"



export default function NavMenu() {

  return (
    <Menu>
      <div className={styles.popover}>
        <MenuButton className={styles.popover_button}>
          <Bars3Icon className={styles.bars3Icon} />
        </MenuButton>

        <MenuItems className={styles.popover_panel}>
          <div className={styles.contenedor_popover}>
            <p className={styles.texto_usuario}>Hola: Usuario</p>
            <MenuItem>
              <Link
                to='/admin/categories'
                className={styles.texto_boton_menu}
              >Categorías
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/admin"
                className={styles.texto_boton_menu}
              >Productos
              </Link>
            </MenuItem>
            <MenuItem>
              <button
                className={styles.texto_boton_menu}
                type='button'
                onClick={() => { }}
              >
                Cerrar Sesión
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </div>
    </Menu>
  )
}