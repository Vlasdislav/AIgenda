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
                        <span className="protocol__badge"><span style={{fontFamily: "Noah, sans-serif", fontSize: "12px", lineHeight: "12px"}}>обработано</span><span style={{fontSize: "15px", lineHeight: "15px"}}>1 млн часов</span></span>
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
                    <div className="pricing__column pricing__column--header pricing__column--primary">Тариф</div>
                    <div className="pricing__column pricing__column--header">FREE</div>
                    <div className="pricing__column pricing__column--header">START</div>
                    <div className="pricing__column pricing__column--header pricing__column--highlight"><span>MAX</span><span style={{fontFamily: "Noah", fontSize: "18px", marginTop: "20px", fontWeight: "500"}}>самый популярный</span></div>
                    <div className="pricing__column pricing__column--header">PRO MAX</div>

                    <div className="pricing__row pricing__row--price pricing__column--primary" style={{borderTop: "1px solid #D6D6D6"}}>Цена</div>
                    <div className="pricing__row pricing__row--price">0₽ / мес</div>
                    <div className="pricing__row pricing__row--price">990₽ / мес</div>
                    <div className="pricing__row pricing__row--price pricing__column--highlight">1890₽ / мес</div>
                    <div className="pricing__row pricing__row--price">3190₽ / мес</div>

                    <div className="pricing__row pricing__column--primary">Опции</div>
                    <div className="pricing__row pricing__row--button"><Button text="Попробовать"/></div>
                    <div className="pricing__row pricing__row--button"><Button text="Купить"/></div>
                    <div className="pricing__row pricing__row--button pricing__row--highlight"><Button text="Купить"/></div>
                    <div className="pricing__row pricing__row--button"><Button text="Купить"/></div>

                    <div className="pricing__row pricing__column--primary">Минуты</div>
                    <div className="pricing__row">180</div>
                    <div className="pricing__row">540</div>
                    <div className="pricing__row pricing__row--highlight">1200</div>
                    <div className="pricing__row">2400</div>

                    <div className="pricing__row pricing__column--primary">Длина видео</div>
                    <div className="pricing__row">40 мин</div>
                    <div className="pricing__row">1,5 часа</div>
                    <div className="pricing__row pricing__row--highlight">4 часа</div>
                    <div className="pricing__row">4 часа</div>

                    <div className="pricing__row pricing__column--primary">Транскрипция</div>
                    <div className="pricing__row">Да</div>
                    <div className="pricing__row">Да</div>
                    <div className="pricing__row pricing__row--highlight">Да</div>
                    <div className="pricing__row">Да</div>

                    <div className="pricing__row pricing__column--primary">Протокол встречи</div>
                    <div className="pricing__row">Да</div>
                    <div className="pricing__row">Да</div>
                    <div className="pricing__row pricing__row--highlight">Да</div>
                    <div className="pricing__row">Да</div>

                    <div className="pricing__row pricing__column--primary">Загрузка видео</div>
                    <div className="pricing__row">Да</div>
                    <div className="pricing__row">Да</div>
                    <div className="pricing__row pricing__row--highlight">Да</div>
                    <div className="pricing__row">Да</div>

                    <div className="pricing__row pricing__column--primary">Интеграция с площадками видеоконференций</div>
                    <div className="pricing__row">Zoom, Google Meet, Телемост</div>
                    <div className="pricing__row">Zoom, Google Meet, Телемост</div>
                    <div className="pricing__row pricing__row--highlight">Zoom, Google Meet, Телемост</div>
                    <div className="pricing__row">Zoom, Google Meet, Телемост</div>

                    <div className="pricing__row pricing__column--primary">Приоритет обработки</div>
                    <div className="pricing__row">Низкий</div>
                    <div className="pricing__row">Высокий</div>
                    <div className="pricing__row pricing__row--highlight">Высокий</div>
                    <div className="pricing__row">Высокий</div>

                    <div className="pricing__row pricing__column--primary">Редактирование транскрипции</div>
                    <div className="pricing__row">-</div>
                    <div className="pricing__row">-</div>
                    <div className="pricing__row pricing__row--highlight">Да</div>
                    <div className="pricing__row">Да</div>

                    <div className="pricing__row pricing__column--primary">Экспорт конспекта</div>
                    <div className="pricing__row">-</div>
                    <div className="pricing__row">Да</div>
                    <div className="pricing__row pricing__row--highlight">Да</div>
                    <div className="pricing__row">Да</div>

                    <div className="pricing__row pricing__column--primary">Возможность делиться записью</div>
                    <div className="pricing__row">По ссылке</div>
                    <div className="pricing__row">По ссылке</div>
                    <div className="pricing__row pricing__row--highlight">По ссылке</div>
                    <div className="pricing__row">По ссылке</div>
                </div>
            </section>
      </main>
    )
}