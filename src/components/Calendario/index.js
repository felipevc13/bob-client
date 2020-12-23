import * as S from './styled';
import React, { useState, useEffect } from 'react';
import { ptBR } from 'date-fns/locale';
import { DatePickerCalendar } from 'react-nice-dates';
import './calendario.css';
import { format } from 'date-fns';

const Calendario = ({ setDateCalendar }) => {
  const [date, setDate] = useState(new Date());

  const data = new Date(date);
  const formattedDate = format(data, 'yyyy-MM-dd');

  useEffect(() => {
    setDateCalendar(formattedDate);
  }, [formattedDate]);

  return (
    <S.Wrapper>
      <DatePickerCalendar
        locale={ptBR}
        date={date}
        onDateChange={setDate}
        startDate={data}
      />
    </S.Wrapper>
  );
};

export default Calendario;
