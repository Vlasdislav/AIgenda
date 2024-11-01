import styled from 'styled-components';
import Button from "../Button";

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PricingColumn = styled.div`
  border: 1px solid #D6D6D6;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 639px) {
    margin-bottom: 32px;
  }
`;

const PricingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 26px;
  line-height: 26px;
  font-family: 'Unbounded', sans-serif;
  padding: 8px;
  border-bottom: 1px solid #D6D6D6;

  @media (max-width: 639px) {
    font-size: 22px;
    line-height: 22px;
  }
`;

const PricingPlan = styled.div<{$highlight?: boolean}>`
  color: ${props => props.$highlight ? '#EC279D' : '#171717'};
`;

const PricingPrice = styled(PricingPlan)`
  font-size: 16px;

  @media (max-width: 639px) {
    font-size: 16px;
  }
`;

const PricingFeature = styled.div`
  padding: 8px;
  border-bottom: 1px solid #D6D6D6;
  display: flex;
  flex-direction: column;

  &:last-child {
    border-bottom: none;
  }

  &.with-tariff::after {
    content: 'При условии действия тарифа';
    display: inline-block;
    font-size: 12px;
    line-height: 12px;
    margin-top: 25px;
  }

  @media (max-width: 639px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

const HighlightText = styled(PricingPlan)`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  padding-top: 20px;
  display: inline-block;

  @media (max-width: 639px) {
    font-size: 8px;
    line-height: 8px;
    padding-top: 0;
  }
`;

const ButtonFeature = styled(PricingFeature)`
  padding: 16px 8px !important;
`;

type TableAdaptiveProps = {
  className?: string;
};

const TableAdaptive: React.FC<TableAdaptiveProps> = ({ className }) => {
  return (
    <TableWrapper className={className}>
      <PricingColumn>
        <PricingHeader>
          <PricingPlan>FREE</PricingPlan>
          <PricingPrice>0₽ / мес</PricingPrice>
        </PricingHeader>
        <ButtonFeature><Button text="Попробовать" /></ButtonFeature>
        <PricingFeature>180 минут</PricingFeature>
        <PricingFeature>Загрузка видео до 40 мин</PricingFeature>
        <PricingFeature>Есть транскрипция</PricingFeature>
        <PricingFeature>Редактирование транскрипции</PricingFeature>
        <PricingFeature>Протокол встречи</PricingFeature>
        <PricingFeature>Экспорт конспекта</PricingFeature>
        <PricingFeature>Интеграция Zoom, Google Meet, Telemost</PricingFeature>
        <PricingFeature>Низкий приоритет обработки</PricingFeature>
        <PricingFeature>Возможность делиться записью по ссылке</PricingFeature>
        <PricingFeature>Хранение файлов 3 месяца</PricingFeature>
      </PricingColumn>

      <PricingColumn>
        <PricingHeader>
          <PricingPlan>START</PricingPlan>
          <PricingPrice>990₽ / мес</PricingPrice>
        </PricingHeader>
        <ButtonFeature><Button text="Купить" /></ButtonFeature>
        <PricingFeature>540 минут</PricingFeature>
        <PricingFeature>Загрузка видео до 1,5 часа</PricingFeature>
        <PricingFeature>Есть транскрипция</PricingFeature>
        <PricingFeature>Редактирование транскрипции</PricingFeature>
        <PricingFeature>Протокол встречи</PricingFeature>
        <PricingFeature>Переименовывание до 5 спикеров</PricingFeature>
        <PricingFeature>Тэги</PricingFeature>
        <PricingFeature>Экспорт конспекта</PricingFeature>
        <PricingFeature>Возможность делиться записью по ссылке</PricingFeature>
        <PricingFeature>Интеграция Zoom, Google Meet, Telemost</PricingFeature>
        <PricingFeature>Высокий приоритет обработки</PricingFeature>
        <PricingFeature className="with-tariff">Хранение файлов 1 год</PricingFeature>
      </PricingColumn>

      <PricingColumn>
        <PricingHeader>
          <PricingPlan $highlight>MAX <br/> <HighlightText $highlight>самый популярный</HighlightText></PricingPlan>
          <PricingPrice $highlight>1890₽ / мес</PricingPrice>
        </PricingHeader>
        <ButtonFeature><Button text="Купить" /></ButtonFeature>
        <PricingFeature>1200 минут</PricingFeature>
        <PricingFeature>Загрузка видео до 4 часов</PricingFeature>
        <PricingFeature>Есть транскрипция</PricingFeature>
        <PricingFeature>Редактирование транскрипции</PricingFeature>
        <PricingFeature>Экспорт конспекта</PricingFeature>
        <PricingFeature>Протокол встречи</PricingFeature>
        <PricingFeature>Интеграция Zoom, Google Meet, Telemost</PricingFeature>
        <PricingFeature>Высокий приоритет обработки</PricingFeature>
        <PricingFeature className="with-tariff">Хранение файлов безлимитное</PricingFeature>
        <PricingFeature>Тэги</PricingFeature>
        <PricingFeature>Переименовывание до 20 спикеров</PricingFeature>
        <PricingFeature>Создание папок</PricingFeature>
        <PricingFeature>Возможность делиться записью по ссылке</PricingFeature>
      </PricingColumn>

      <PricingColumn>
        <PricingHeader>
          <PricingPlan>PRO MAX</PricingPlan>
          <PricingPrice>3190₽ / мес</PricingPrice>
        </PricingHeader>
        <ButtonFeature><Button text="Купить" /></ButtonFeature>
        <PricingFeature>2400 минут</PricingFeature>
        <PricingFeature>Загрузка видео до 4 часов</PricingFeature>
        <PricingFeature>Есть транскрипция</PricingFeature>
        <PricingFeature>Редактирование транскрипции</PricingFeature>
        <PricingFeature>Экспорт конспекта</PricingFeature>
        <PricingFeature>Протокол встречи</PricingFeature>
        <PricingFeature>Интеграция Zoom, Google Meet, Telemost</PricingFeature>
        <PricingFeature>Высокий приоритет обработки</PricingFeature>
        <PricingFeature className="with-tariff">Хранение файлов безлимитное</PricingFeature>
        <PricingFeature>Тэги</PricingFeature>
        <PricingFeature>Переименовывание до 40 спикеров</PricingFeature>
        <PricingFeature>Создание папок</PricingFeature>
        <PricingFeature>Возможность делиться записью по ссылке</PricingFeature>
      </PricingColumn>
    </TableWrapper>
  );
};

export default TableAdaptive;
