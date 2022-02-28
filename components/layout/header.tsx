import styles from 'scss/layout/header.module.scss'
import Logo from 'img/logo-d.svg'
import { Container, A, Img } from 'comps/common'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.contentWrp}>
          <A href="/" className={styles.logoWrp}>
            <Img src={Logo} alt="logo" />
          </A>

          <ul className={styles.navList}>
            <NavItem href="/about" label="About" />
            <NavItem href="/docs" label="Docs" />
            <NavItem href="/examples" label="Examples" />
            <NavItem href="/contact" label="Contact" />
            <NavItem
              href="https://github.com/kundanb/akriti"
              label="View on GitHub"
              isBtn
            />
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header

interface NavItemProps {
  href: string
  label: string
  isBtn?: boolean
}

const NavItem = (props: NavItemProps) => (
  <li>
    <A
      href={props.href}
      className={props.isBtn ? styles.navBtn : styles.navLink}
      content={props.label}
    />
  </li>
)
