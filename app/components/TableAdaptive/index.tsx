import Button from "../Button";
import "./style.css";

type TableAdaptiveProps = {
    className?: string;
}

const TableAdaptive: React.FC<TableAdaptiveProps> = ({className}) => {
    return (
        <div className={className}>
            <div className="pricing__table">
                <div className="pricing__column">
                    <div className="pricing__header">
                        <div className="pricing__plan">FREE</div>
                        <div className="pricing__price">0₽ / мес</div>
                    </div>
                    <div className="pricing__feature pricing__feature_button"><Button text="Попробовать" /></div>
                        <div className="pricing__features">
                        <div className="pricing__feature">180 минут</div>
                        <div className="pricing__feature">Загрузка видео до 40 мин</div>
                        <div className="pricing__feature">Есть транскрипция</div>
                        <div className="pricing__feature">Редактирование транскрипции</div>
                        <div className="pricing__feature">Протокол встречи</div>
                        <div className="pricing__feature">Экспорт конспекта</div>
                        <div className="pricing__feature">Интеграция Zoom, Google Meet, Telemost</div>
                        <div className="pricing__feature">Низкий приоритет обработки</div>
                        <div className="pricing__feature">Возможность делиться записью по ссылке</div>
                        <div className="pricing__feature">Хранение файлов 3 месяца</div>
                    </div>
                </div>

                <div className="pricing__column">
                    <div className="pricing__header">
                        <div className="pricing__plan">START</div>
                        <div className="pricing__price">990₽ / мес</div>
                    </div>
                    <div className="pricing__feature pricing__feature_button"><Button text="Купить" /></div>
                    <div className="pricing__features">
                        <div className="pricing__feature">540 минут</div>
                        <div className="pricing__feature">Загрузка видео до 1,5 часа</div>
                        <div className="pricing__feature">Есть транскрипция</div>
                        <div className="pricing__feature">Редактирование транскрипции</div>
                        <div className="pricing__feature">Протокол встречи</div>
                        <div className="pricing__feature">Переименовывание до 5 спикеров</div>
                        <div className="pricing__feature">Тэги</div>
                        <div className="pricing__feature">Экспорт конспекта</div>
                        <div className="pricing__feature">Возможность делиться записью по ссылке</div>
                        <div className="pricing__feature">Интеграция Zoom, Google Meet, Telemost</div>
                        <div className="pricing__feature">Высокий приоритет обработки</div>
                        <div className="pricing__feature pricing__feature_with-tariff">Хранение файлов 1 год</div>
                    </div>
                </div>

                <div className="pricing__column">
                    <div className="pricing__header">
                        <div className="pricing__plan pricing__header_max">MAX <br/> <span className="pricing__header_max-mini">самый популярный</span></div>
                        <div className="pricing__price pricing__header_max">1890₽ / мес</div>
                    </div>
                    <div className="pricing__feature pricing__feature_button"><Button text="Купить" /></div>
                    <div className="pricing__features">
                        <div className="pricing__feature">1200 минут</div>
                        <div className="pricing__feature">Загрузка видео до 4 часов</div>
                        <div className="pricing__feature">Есть транскрипция</div>
                        <div className="pricing__feature">Редактирование транскрипции</div>
                        <div className="pricing__feature">Экспорт конспекта</div>
                        <div className="pricing__feature">Протокол встречи</div>
                        <div className="pricing__feature">Интеграция Zoom, Google Meet, Telemost</div>
                        <div className="pricing__feature">Высокий приоритет обработки</div>
                        <div className="pricing__feature pricing__feature_with-tariff">Хранение файлов безлимитное</div>
                        <div className="pricing__feature">Тэги</div>
                        <div className="pricing__feature">Переименовывание до 20 спикеров</div>
                        <div className="pricing__feature">Создание папок</div>
                        <div className="pricing__feature">Возможность делиться записью по ссылке</div>
                    </div>
                </div>

                <div className="pricing__column">
                    <div className="pricing__header">
                        <div className="pricing__plan">PRO MAX</div>
                        <div className="pricing__price">3190₽ / мес</div>
                    </div>
                    <div className="pricing__feature pricing__feature_button"><Button text="Купить" /></div>
                        <div className="pricing__features">
                        <div className="pricing__feature">2400 минут</div>
                        <div className="pricing__feature">Загрузка видео до 4 часов</div>
                        <div className="pricing__feature">Есть транскрипция</div>
                        <div className="pricing__feature">Редактирование транскрипции</div>
                        <div className="pricing__feature">Экспорт конспекта</div>
                        <div className="pricing__feature">Протокол встречи</div>
                        <div className="pricing__feature">Интеграция Zoom, Google Meet, Telemost</div>
                        <div className="pricing__feature">Высокий приоритет обработки</div>
                        <div className="pricing__feature pricing__feature_with-tariff">Хранение файлов безлимитное</div>
                        <div className="pricing__feature">Тэги</div>
                        <div className="pricing__feature">Переименовывание до 40 спикеров</div>
                        <div className="pricing__feature">Создание папок</div>
                        <div className="pricing__feature">Возможность делиться записью по ссылке</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableAdaptive;
