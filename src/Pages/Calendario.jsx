import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import '../Styles/calendario.css';

moment.locale('pt-br');
const localizer = momentLocalizer(moment);

const eventos = [
  {
    id: 1,
    title: 'Aula de React Hooks',
    start: new Date(2025, 6, 7, 10, 0, 0),
    end: new Date(2025, 6, 7, 11, 30, 0),
    type: 'aula',
  },
  {
    id: 2,
    title: 'Reunião de planejamento',
    start: new Date(2025, 6, 8, 14, 0, 0),
    end: new Date(2025, 6, 8, 15, 0, 0),
    type: 'evento',
  },
    {
    id: 3,
    title: 'Prova de Matemática',
    start: new Date(2025, 6, 10, 9, 0, 0),
    end: new Date(2025, 6, 10, 11, 0, 0),
    type: 'evento',
  },
];

const eventStyleGetter = (event) => {
  const style = {
    backgroundColor: event.type === 'aula' ? '#3174ad' : '#4caf50',
    borderRadius: '5px',
    opacity: 0.8,
    color: 'white',
    border: '0px',
    display: 'block',
  };
  return {
    style: style,
  };
};

export default function Calendario(){
    return(
        <div className="calendario-container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Calendário de Eventos</h1>
      <Calendar
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        messages={{
          next: "Próximo",
          previous: "Anterior",
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
          agenda: "Agenda",
          date: "Data",
          time: "Hora",
          event: "Evento",
        }}
      />
    </div>
        
    );
}