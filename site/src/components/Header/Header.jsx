import styles from "./Header.module.css"
import logo from "../../assets/brothertech.png"

export const Header = () => {
  return <>
    <header className={(styles.red)}>
    <div id="app"/>
      <div className="logo">
        <img src={logo} alt="logo brothertech" />
      </div>
    </header>
    </>
}

export default Header