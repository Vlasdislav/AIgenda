"use client"

import styled from 'styled-components';
import Button from '../Button';

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #FAFAFA;
  border-radius: 20px;
  overflow: hidden;
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

  &.highlight {
    color: #EC279D;
  }

  &.highlight-mini {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    padding-top: 25px;
    display: inline-block;
  }

  &.max {
    background-color: #ffffff;
  }

  &.button {
    padding: 20px 16px;
  }
`;

const ColumnHeader = styled(TableRow)`
  font-weight: 600;
  font-size: 27px;
  line-height: 27px;
  font-family: 'Unbounded', sans-serif;
  padding: 20px;
  border-top: none;
`;

const TableDesktop = () => {
  return (
    <TableWrapper>
      <ColumnHeader>Тариф</ColumnHeader>
      <ColumnHeader>FREE</ColumnHeader>
      <ColumnHeader>START</ColumnHeader>
      <ColumnHeader className="highlight">MAX <br/><span className="highlight-mini">самый популярный</span></ColumnHeader>
      <ColumnHeader>PRO MAX</ColumnHeader>

      <TableRow className="title">Цена</TableRow>
      <TableRow className="price">0₽ / мес</TableRow>
      <TableRow className="price">990₽ / мес</TableRow>
      <TableRow className="price highlight">1890₽ / мес</TableRow>
      <TableRow className="price">3190₽ / мес</TableRow>

      <TableRow className="title">Опции</TableRow>
      <TableRow className="button"><Button text="Попробовать" /></TableRow>
      <TableRow className="button"><Button text="Купить" /></TableRow>
      <TableRow className="button max"><Button text="Купить" /></TableRow>
      <TableRow className="button"><Button text="Купить" /></TableRow>

      <TableRow className="title">Минуты</TableRow>
      <TableRow>180</TableRow>
      <TableRow>540</TableRow>
      <TableRow className="max">1200</TableRow>
      <TableRow>2400</TableRow>

      <TableRow className="title">Длина видео</TableRow>
      <TableRow>40 мин</TableRow>
      <TableRow>1,5 часа</TableRow>
      <TableRow className="max">4 часа</TableRow>
      <TableRow>4 часа</TableRow>

      <TableRow className="title">Транскрипция</TableRow>
      <TableRow>Да</TableRow>
      <TableRow>Да</TableRow>
      <TableRow className="max">Да</TableRow>
      <TableRow>Да</TableRow>

      <TableRow className="title">Протокол встречи</TableRow>
      <TableRow>Да</TableRow>
      <TableRow>Да</TableRow>
      <TableRow className="max">Да</TableRow>
      <TableRow>Да</TableRow>

      <TableRow className="title">Загрузка видео</TableRow>
      <TableRow>Да</TableRow>
      <TableRow>Да</TableRow>
      <TableRow className="max">Да</TableRow>
      <TableRow>Да</TableRow>

      <TableRow className="title">Интеграция с площадками видеоконференций</TableRow>
      <TableRow>Zoom, Google Meet, Телемост</TableRow>
      <TableRow>Zoom, Google Meet, Телемост</TableRow>
      <TableRow className="max">Zoom, Google Meet, Телемост</TableRow>
      <TableRow>Zoom, Google Meet, Телемост</TableRow>

      <TableRow className="title">Приоритет обработки</TableRow>
      <TableRow>Низкий</TableRow>
      <TableRow>Высокий</TableRow>
      <TableRow className="max">Высокий</TableRow>
      <TableRow>Высокий</TableRow>

      <TableRow className="title">Редактирование транскрипции</TableRow>
      <TableRow>-</TableRow>
      <TableRow>-</TableRow>
      <TableRow className="max">Да</TableRow>
      <TableRow>Да</TableRow>

      <TableRow className="title">Экспорт конспекта</TableRow>
      <TableRow>-</TableRow>
      <TableRow>Да</TableRow>
      <TableRow className="max">Да</TableRow>
      <TableRow>Да</TableRow>

      <TableRow className="title">Возможность делиться записью</TableRow>
      <TableRow>По ссылке</TableRow>
      <TableRow>По ссылке</TableRow>
      <TableRow className="max">По ссылке</TableRow>
      <TableRow>По ссылке</TableRow>
    </TableWrapper>
  );
}

export default TableDesktop;
