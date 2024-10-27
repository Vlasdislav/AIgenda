import './style.css';

export default function Footer() {
  return (
    <footer className="footer container">
      <img src="./images/Logo.svg" alt="AiGenda" />
      <div className="footer__nav">
        <a href="#" className="footer__link">How does it work?</a>
        <a href="#" className="footer__link">Why us?</a>
        <a href="#" className="footer__link">FAQ</a>
        <a href="#" className="footer__link">Contacts</a>
      </div>
      <div className="footer__nav">
        <a href="#" className="footer__social-network">
          <img src="./images/social-networks/instagram.svg" alt="inst" />
        </a>
        <a href="#" className="footer__social-network">
          <img src="./images/social-networks/x.svg" alt="x" />
        </a>
        <a href="#" className="footer__social-network">
          <img src="./images/social-networks/telegram.svg" alt="tel" />
        </a>
        <a href="#" className="footer__social-network">
          <img src="./images/social-networks/in.svg" alt="in" />
        </a>
      </div>
    </footer>
  );
}
  