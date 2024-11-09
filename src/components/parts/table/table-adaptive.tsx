import styled from 'styled-components';
import ButtonTable from './ui/button-table';

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

const PricingPlan = styled.div<{ $highlight?: boolean }>`
  color: ${props => props.$highlight ? '#EC279D' : '#171717'};

  &.highlight {
    color: #EC279D;
  }
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

type Plan = {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
  withTariffNote?: number;
};

const plans: Plan[] = [
  {
    name: 'FREE',
    price: '0₽ / мес',
    features: [
      '180 минут',
      'Загрузка видео до 40 мин',
      'Есть транскрипция',
      'Редактирование транскрипции',
      'Протокол встречи',
      'Экспорт конспекта',
      'Интеграция Zoom, Google Meet, Telemost',
      'Низкий приоритет обработки',
      'Возможность делиться записью по ссылке',
      'Хранение файлов 3 месяца',
    ],
  },
  {
    name: 'START',
    price: '990₽ / мес',
    features: [
      '540 минут',
      'Загрузка видео до 1,5 часа',
      'Есть транскрипция',
      'Редактирование транскрипции',
      'Протокол встречи',
      'Переименовывание до 5 спикеров',
      'Тэги',
      'Экспорт конспекта',
      'Возможность делиться записью по ссылке',
      'Интеграция Zoom, Google Meet, Telemost',
      'Высокий приоритет обработки',
      'Хранение файлов 1 год',
    ],
    withTariffNote: 11,
  },
  {
    name: 'MAX',
    price: '1890₽ / мес',
    features: [
      '1200 минут',
      'Загрузка видео до 4 часов',
      'Есть транскрипция',
      'Редактирование транскрипции',
      'Экспорт конспекта',
      'Протокол встречи',
      'Интеграция Zoom, Google Meet, Telemost',
      'Высокий приоритет обработки',
      'Хранение файлов безлимитное',
      'Тэги',
      'Переименовывание до 20 спикеров',
      'Создание папок',
      'Возможность делиться записью по ссылке',
    ],
    highlight: true,
    withTariffNote: 8,
  },
  {
    name: 'PRO MAX',
    price: '3190₽ / мес',
    features: [
      '2400 минут',
      'Загрузка видео до 4 часов',
      'Есть транскрипция',
      'Редактирование транскрипции',
      'Экспорт конспекта',
      'Протокол встречи',
      'Интеграция Zoom, Google Meet, Telemost',
      'Высокий приоритет обработки',
      'Хранение файлов безлимитное',
      'Тэги',
      'Переименовывание до 40 спикеров',
      'Создание папок',
      'Возможность делиться записью по ссылке',
    ],
    withTariffNote: 8,
  },
];

const TableAdaptive: React.FC = () => {
  return (
    <TableWrapper>
      {plans.map((plan, index) => (
        <PricingColumn key={index}>
          <PricingHeader>
            <PricingPlan $highlight={plan.highlight}>{plan.name} {plan.highlight && <><br/><HighlightText $highlight>самый популярный</HighlightText></>}</PricingPlan>
            <PricingPrice $highlight={plan.highlight}>{plan.price}</PricingPrice>
          </PricingHeader>
          <ButtonFeature><ButtonTable text={plan.name === 'FREE' ? "Попробовать" : "Купить"} /></ButtonFeature>
          {plan.features.map((feature, i) => (
            <PricingFeature key={i} className={plan.withTariffNote && i === plan.withTariffNote ? 'with-tariff' : ''}>
              {feature}
            </PricingFeature>
          ))}
        </PricingColumn>
      ))}
    </TableWrapper>
  );
};

export default TableAdaptive;
