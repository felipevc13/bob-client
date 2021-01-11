import * as S from './styled';
import React, { useState, useEffect } from 'react';
import { ptBR } from 'date-fns/locale';
import { DatePickerCalendar } from 'react-nice-dates';
import './calendario.css';
import { format } from 'date-fns';
import { navigate } from 'gatsby';
import { addDays, getDay, isSameDay } from 'date-fns';

const Calendario = ({ setDateCalendar, todasDatas, state }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [date, setDate] = useState(state);
  const data = new Date(date);
  const formattedDate = format(data, 'yyyy-MM-dd');

  const datasArrumadas = todasDatas.map((item) => {
    return addDays(new Date(item), 1);
  });

  useEffect(() => {
    setSelectedDates(datasArrumadas);
  }, []);

  const modifiers = {
    highlight: (date) =>
      selectedDates.some((selectedDate) => isSameDay(selectedDate, date)),
  };

  const modifiersClassNames = {
    highlight: '-highlight',
  };

  useEffect(() => {
    setDateCalendar(formattedDate);
    if (todasDatas.includes(formattedDate)) {
      navigate(`/${formattedDate}/`, {
        state: { data: date },
      });
    } else {
      navigate(`/`, {
        state: { data: date },
      });
    }
  }, [date]);

  return (
    <S.Wrapper>
      <DatePickerCalendar
        locale={ptBR}
        date={date}
        onDateChange={setDate}
        modifiers={modifiers}
        modifiersClassNames={modifiersClassNames}
      />
    </S.Wrapper>
  );
};

export default Calendario;
