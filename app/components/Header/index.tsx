import Button from '../Button';
import './style.css'

export default function Header() {
  return (
    <header className="header container">
      <img className="header__logo" src="/images/logo.svg" alt="AiGenda" />
      <nav className="header__nav">
        <a className="header__item" href="#">Why us?</a>
        <a className="header__item" href="#pricing">Pricing</a>
        <a className="header__item" href="#">FAQ</a>
        <a className="header__item" href="#">Contacts</a>
      </nav>
      <div className="header__buttons">
        <Button icon={<img src="./images/global.svg" alt="global" />} classes="gray" />
        <Button text="Log in" />
      </div>
      <div className="header__buttons header__buttons--adaptive">
        <Button icon={<img src="./images/login.svg" alt="login" />} classes="gray" />
        <Button icon={<img src="./images/Icon.svg" alt="icon" />} classes="gray" />
      </div>
    </header>
  );
}
  