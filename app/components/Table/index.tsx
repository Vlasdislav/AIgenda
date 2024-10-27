import Button from "../Button";
import "./style.css";

export default function Table() {
    return (
        <div className="pricing__table">
            <div className="pricing__column pricing__column--header">
                <div className="pricing__cell pricing__cell--title">Тариф</div>
                <div className="pricing__cell pricing__cell--plan">Цена</div>
                <div className="pricing__cell pricing__cell--plan">Опции</div>
                <div className="pricing__cell pricing__cell--plan">Минуты</div>
                <div className="pricing__cell pricing__cell--plan">Длина видео</div>
                <div className="pricing__cell pricing__cell--plan">Транскрипция</div>
                <div className="pricing__cell pricing__cell--plan">Протокол встречи</div>
                <div className="pricing__cell pricing__cell--plan">Загрузка видео</div>
                <div className="pricing__cell pricing__cell--plan">Интеграция с площадками видеоконференций</div>
                <div className="pricing__cell pricing__cell--plan">Приоритет обработки</div>
                <div className="pricing__cell pricing__cell--plan">Редактирование транскрипции</div>
                <div className="pricing__cell pricing__cell--plan">Экспорт конспекта</div>
                <div className="pricing__cell pricing__cell--plan">Возможность делиться записью</div>
            </div>

            <div className="pricing__column">
                <div className="pricing__cell pricing__cell--plan-name">FREE</div>
                <div className="pricing__cell">0₽ / мес</div>
                <div className="pricing__cell"><Button text="Попробовать" /></div>
                <div className="pricing__cell">180</div>
                <div className="pricing__cell">40 мин</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Zoom, Google Meet, Телемост</div>
                <div className="pricing__cell">Низкий</div>
                <div className="pricing__cell">-</div>
                <div className="pricing__cell">-</div>
                <div className="pricing__cell">По ссылке</div>
            </div>

            <div className="pricing__column">
                <div className="pricing__cell pricing__cell--plan-name">START</div>
                <div className="pricing__cell">990₽ / мес</div>
                <div className="pricing__cell"><Button text="Купить" /></div>
                <div className="pricing__cell">540</div>
                <div className="pricing__cell">1,5 часа</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Zoom, Google Meet, Телемост</div>
                <div className="pricing__cell">Высокий</div>
                <div className="pricing__cell">-</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">По ссылке</div>
            </div>

            <div className="pricing__column">
                <div className="pricing__cell pricing__cell--plan-name pricing__cell--highlight"><span>MAX</span><span style={{fontWeight: "normal", fontSize: "12px", lineHeight: "12px", marginTop: "20px"}}>самый популярный</span></div>
                <div className="pricing__cell pricing__cell--highlight">1890₽ / мес</div>
                <div className="pricing__cell"><Button text="Купить" /></div>
                <div className="pricing__cell">1200</div>
                <div className="pricing__cell">4 часа</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Zoom, Google Meet, Телемост</div>
                <div className="pricing__cell">Высокий</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">По ссылке</div>
            </div>

            <div className="pricing__column">
                <div className="pricing__cell pricing__cell--plan-name">PRO MAX</div>
                <div className="pricing__cell">3190₽ / мес</div>
                <div className="pricing__cell"><Button text="Купить" /></div>
                <div className="pricing__cell">2400</div>
                <div className="pricing__cell">4 часа</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Zoom, Google Meet, Телемост</div>
                <div className="pricing__cell">Высокий</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">Да</div>
                <div className="pricing__cell">По ссылке</div>
            </div>
        </div>
    )
}
