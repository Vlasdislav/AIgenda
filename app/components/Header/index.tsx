import Button from '../Button';
import './style.css'

export default function Header() {
  return (
    <header className="header container">
      <img className="header__logo" src="/images/logo.svg" alt="AiGenda" />
      <nav className="header__nav">
        <a className="header__item" href="#">Why us?</a>
        <a className="header__item" href="#">Pricing</a>
        <a className="header__item" href="#">FAQ</a>
        <a className="header__item" href="#">Contacts</a>
      </nav>
      <div className="header__buttons">
        <Button icon={<img src="./images/global.svg" alt="global" />} color="gray" />
        <Button text="Log in" />
      </div>
    </header>
  );
}
  