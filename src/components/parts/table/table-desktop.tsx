import styled from 'styled-components';
import React from 'react';
import ButtonTable from './ui/button-table';

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #FAFAFA;
  border-radius: 20px;
  border: 1px solid #D6D6D6;
  font-size: 22px;
  line-height: 22px;
  color: #171717;
`;

const TableRow = styled.div`
  border-right: 1px solid #D6D6D6;
  border-top: 1px solid #D6D6D6;
  padding: 20px;

  &:nth-child(5n) {
    border-right: none;
  }

  &.price {
    font-weight: 700;
    border-top: none;
  }

  &.title {
    color: #0047FF;
    padding-top: 10px;
    font-weight: bold;
    width: 310px;
  }

  &.max {
    background-color: #ffffff;
  }

  &.button {
    padding: 20.5px 16px;
  }

  &.highlight {
    color: #EC279D;
  }

  @media (max-width: 1500px) {
    font-size: 18px;

    &.title {
      width: 200px;
    }
  }
`;

const ColumnHeader = styled(TableRow)`
  font-weight: 600;
  font-size: 27px;
  line-height: 27px;
  font-family: 'Unbounded', sans-serif;
  padding: 20px;
  border-top: none;

  @media (max-width: 1500px) {
    font-size: 24px
  }
`;

const HighlightText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  padding-top: 25px;
  display: inline-block;
`;

const pricingData = [
  { plan: 'FREE', price: '0₽ / мес', options: ['Попробовать', '180', '40 мин', 'Да', 'Да', 'Да', 'Zoom, Google Meet, Телемост', 'Низкий', '-', '-', 'По ссылке'] },
  { plan: 'START', price: '990₽ / мес', options: ['Купить', '540', '1,5 часа', 'Да', 'Да', 'Да', 'Zoom, Google Meet, Телемост', 'Высокий', '-', 'Да', 'По ссылке'] },
  { plan: 'MAX', price: '1890₽ / мес', options: ['Купить', '1200', '4 часа', 'Да', 'Да', 'Да', 'Zoom, Google Meet, Телемост', 'Высокий', 'Да', 'Да', 'По ссылке'], highlight: true },
  { plan: 'PRO MAX', price: '3190₽ / мес', options: ['Купить', '2400', '4 часа', 'Да', 'Да', 'Да', 'Zoom, Google Meet, Телемост', 'Высокий', 'Да', 'Да', 'По ссылке'] },
];

const namesRows = ['Минуты', 'Длина видео', 'Транскрипция', 'Протокол встречи', 'Загрузка видео', 'Интеграция с площадками видеоконференций', 'Приоритет обработки', 'Редактирование транскрипции', 'Экспорт конспекта', 'Возможность делиться записью']

const TableDesktop = () => {
  return (
    <TableWrapper>
      <ColumnHeader>Тариф</ColumnHeader>
      {pricingData.map((data, index) => (
        <ColumnHeader key={index} className={data.highlight ? 'highlight' : ''}>
          {data.plan}
          {data.highlight && <HighlightText>самый популярный</HighlightText>}
        </ColumnHeader>
      ))}

      <TableRow className="title">Цена</TableRow>
      {pricingData.map((data, index) => (
        <TableRow key={index} className={`price ${data.highlight ? 'highlight' : ''}`}>
          {data.price}
        </TableRow>
      ))}

      <TableRow className="title">Опции</TableRow>
      {pricingData.map((data, index) => (
        <TableRow key={index} className={`button ${data.highlight ? 'max' : ''}`}>
          <ButtonTable text={data.options[0]} />
        </TableRow>
      ))}

      {namesRows.map((title, idx) => (
        <React.Fragment key={idx}>
          <TableRow className="title">{title}</TableRow>
          {pricingData.map((data, index) => (
            <TableRow key={index} className={data.highlight ? 'max' : ''}>
              {data.options[idx + 1]}
            </TableRow>
          ))}
        </React.Fragment>
      ))}
    </TableWrapper>
  );
}

export default TableDesktop;
