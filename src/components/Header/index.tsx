// Packages
import { NavLink } from 'react-router-dom'

// Styles
import { HeaderContainer } from './styles'

// Assets
import logoIgnite from '../../assets/logo-ignite.svg'

// Components
import { Timer, Scroll } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
