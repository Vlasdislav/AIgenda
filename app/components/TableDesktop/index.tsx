import Button from "../Button";
import "./style.css";

type TableDesktopProps = {
    className?: string;
};

const TableDesktop: React.FC<TableDesktopProps> = ({className}) => {
    return (
        <div className={className}>
            <div className="pricing__table">
                <div className="pricing__row pricing__row_title pricing__column_header">Тариф</div>
                <div className="pricing__row pricing__column_header">FREE</div>
                <div className="pricing__row pricing__column_header">START</div>
                <div className="pricing__row pricing__row_max pricing__column_header pricing__row_highlight">MAX <br/> <span className="pricing__row_highlight-mini">самый популярный</span></div>
                <div className="pricing__row pricing__column_header">PRO MAX</div>

                <div className="pricing__row pricing__row_title">Цена</div>
                <div className="pricing__row pricing__row_price">0₽ / мес</div>
                <div className="pricing__row pricing__row_price">990₽ / мес</div>
                <div className="pricing__row pricing__row_max pricing__row_price pricing__row_highlight">1890₽ / мес</div>
                <div className="pricing__row pricing__row_price">3190₽ / мес</div>

                <div className="pricing__row pricing__row_title">Опции</div>
                <div className="pricing__row pricing__row_button"><Button text="Попробовать" /></div>
                <div className="pricing__row pricing__row_button"><Button text="Купить" /></div>
                <div className="pricing__row pricing__row_button pricing__row_max"><Button text="Купить" /></div>
                <div className="pricing__row pricing__row_button"><Button text="Купить" /></div>

                <div className="pricing__row pricing__row_title">Минуты</div>
                <div className="pricing__row">180</div>
                <div className="pricing__row">540</div>
                <div className="pricing__row pricing__row_max">1200</div>
                <div className="pricing__row">2400</div>

                <div className="pricing__row pricing__row_title">Длина видео</div>
                <div className="pricing__row">40 мин</div>
                <div className="pricing__row">1,5 часа</div>
                <div className="pricing__row pricing__row_max">4 часа</div>
                <div className="pricing__row">4 часа</div>

                <div className="pricing__row pricing__row_title">Транскрипция</div>
                <div className="pricing__row">Да</div>
                <div className="pricing__row">Да</div>
                <div className="pricing__row pricing__row_max">Да</div>
                <div className="pricing__row">Да</div>

                <div className="pricing__row pricing__row_title">Протокол встречи</div>
                <div className="pricing__row">Да</div>
                <div className="pricing__row">Да</div>
                <div className="pricing__row pricing__row_max">Да</div>
                <div className="pricing__row">Да</div>

                <div className="pricing__row pricing__row_title">Загрузка видео</div>
                <div className="pricing__row">Да</div>
                <div className="pricing__row">Да</div>
                <div className="pricing__row pricing__row_max">Да</div>
                <div className="pricing__row">Да</div>

                <div className="pricing__row pricing__row_title">Интеграция <br/> с&nbsp;площадками <br/> видеоконференций</div>
                <div className="pricing__row">Zoom, Google <br/> Meet, Телемост</div>
                <div className="pricing__row">Zoom, Google <br/> Meet, Телемост</div>
                <div className="pricing__row pricing__row_max">Zoom, Google <br/> Meet, Телемост</div>
                <div className="pricing__row">Zoom, Google <br/> Meet, Телемост</div>

                <div className="pricing__row pricing__row_title">Приоритет обработки</div>
                <div className="pricing__row">Низкий</div>
                <div className="pricing__row">Высокий</div>
                <div className="pricing__row pricing__row_max">Высокий</div>
                <div className="pricing__row">Высокий</div>

                <div className="pricing__row pricing__row_title">Редактирование транскрипции</div>
                <div className="pricing__row">-</div>
                <div className="pricing__row">-</div>
                <div className="pricing__row pricing__row_max">Да</div>
                <div className="pricing__row">Да</div>

                <div className="pricing__row pricing__row_title">Экспорт конспекта</div>
                <div className="pricing__row">-</div>
                <div className="pricing__row">Да</div>
                <div className="pricing__row pricing__row_max">Да</div>
                <div className="pricing__row">Да</div>

                <div className="pricing__row pricing__row_title">Возможность делиться записью</div>
                <div className="pricing__row">По ссылке</div>
                <div className="pricing__row">По ссылке</div>
                <div className="pricing__row pricing__row_max">По ссылке</div>
                <div className="pricing__row">По ссылке</div>
            </div>
        </div>
    )
}

export default TableDesktop;
