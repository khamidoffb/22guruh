import Logo from "./MicroComponents/Logo"
import Mode from "./MicroComponents/Mode"
import Search from "./MicroComponents/Search"
import Menu from "./MicroComponents/Menu"
import css from './Header.module.css'
import { useState } from "react"
function Header() {
    let [mode, setMode] = useState(true)
    return (
        <header className={
            mode ? css.headlight : css.headdark
        }>
            <Logo />
            <Menu />
            <div style={{display: 'flex', gap: '30px'}}>
                <Search />
                <Mode mode={mode} setMode={setMode} />
            </div>
        </header>
    )
}
export default Header