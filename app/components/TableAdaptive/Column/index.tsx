import "./style.css";

type TableColumnProps = {
    rate: string;
    price: number;
    buttonText: string;
    minuts: number;
    videoLength: number;
    transcription: string;
    protocol: string;
    downloadVideo: string;
    integration: string;
    priority: string;
    editing: string;
    export: string;
    share: string;
}

function TableColumn({
    rate, price, buttonText, minuts, videoLength, transcription, protocol, downloadVideo, integration, priority, editing, exportAbstract, share
}) {
    return (
        <div className="pricing">
            <div className="pricing__header">
                <span className="pricing__title">{rate}</span>
                <span className="pricing__price">{price} ₽ / мес</span>
            </div>
            <button className="pricing__button">{buttonText}</button>
            <div className="pricing__features">
                <div className="pricing__feature">{minuts} минут</div>
                <div className="pricing__feature">Загрузка видео до {videoLength} мин</div>
                <div className="pricing__feature">{transcription}</div>
                <div className="pricing__feature">{editing}</div>
                <div className="pricing__feature">{protocol}</div>
                <div className="pricing__feature">{exportAbstract}</div>
                <div className="pricing__feature">{integration}</div>
                <div className="pricing__feature">{priority} приоритет обработки</div>
                <div className="pricing__feature">Возможность делиться записью по ссылке</div>
                <div className="pricing__feature">Хранение файлов 3 месяца</div>
            </div>
        </div>
    );
}

export default TableColumn;