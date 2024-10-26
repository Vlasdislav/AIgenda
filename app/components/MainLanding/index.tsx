import Button from "../Button";
import "./style.css";

export default function MainLanding() {
    return (
        <main className="main">
            <section className="main__protocol container">
                <div className="protocol__content">
                    <h2 className="protocol__title">Автоматический протокол встречи</h2>
                    <p className="protocol__description">AiGenda быстро и качественно переводит речь в текст и создает автоматический протокол встречи при помощи искусственного интеллекта</p>
                    <Button text="Начать работу" />
                    <div className="protocol__badges">
                        <span className="protocol__badge"><span style={{fontSize: "22px", lineHeight: "22px"}}>98%</span><span style={{fontSize: "12px", lineHeight: "12px"}}>точность</span></span>
                        <span className="protocol__badge" style={{fontSize: "15px", lineHeight: "15px"}}><span>Лучше,</span><span>чем ChatGPT*</span></span>
                        <span className="protocol__badge"><span style={{fontFamily: "Noah, san-serif", fontSize: "12px", lineHeight: "12px"}}>обработано</span><span style={{fontSize: "15px", lineHeight: "15px"}}>1 млн часов</span></span>
                    </div>
                </div>
                <div className="protocol__image">
                    <img src="./images/CallingApp.svg" alt="Конференция с AiGenda Bot" />
                </div>
            </section>
            <section className="main__pricing container">
                <h2 className="pricing__title">Разные тарифы для разных задач</h2>
                <p className="pricing__description">Подписка на сервис AiGenda станет выгодной инвестицией для любого бизнеса с регулярными онлайн встречами</p>
                
                <div className="pricing__table">
                    <div className="pricing__column pricing__column--header">Тариф</div>
                    <div className="pricing__column pricing__column--header">FREE</div>
                    <div className="pricing__column pricing__column--header">START</div>
                    <div className="pricing__column pricing__column--header">MAX</div>
                    <div className="pricing__column pricing__column--header">PRO MAX</div>

                    <div className="pricing__row">Цена</div>
                    <div className="pricing__row">0₽ / мес</div>
                    <div className="pricing__row">990₽ / мес</div>
                    <div className="pricing__row pricing__row--highlight">1890₽ / мес</div>
                    <div className="pricing__row">3190₽ / мес</div>

                    <div className="pricing__row">Опции</div>
                    <div className="pricing__row"><Button text="Попробовать"/></div>
                    <div className="pricing__row"><Button text="Купить"/></div>
                    <div className="pricing__row"><Button text="Купить"/></div>
                    <div className="pricing__row"><Button text="Купить"/></div>

                    <div className="pricing__row">Минуты</div>
                    <div className="pricing__row">180</div>
                    <div className="pricing__row">540</div>
                    <div className="pricing__row">1200</div>
                    <div className="pricing__row">2400</div>

                </div>
            </section>
      </main>
    )
}