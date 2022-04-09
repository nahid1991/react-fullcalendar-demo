import './App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function App() {
  return (
    <div className="App" style={{padding: "0 100px 0 100px"}}>
      <FullCalendar
        themeSystem="Lux"
        fixedWeekCount={false}
        locale="de"
        headerToolbar={
          {
            left: 'prev',
            center: 'title',
            right: "next"
          }
        }
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        aspectRatio="1.7"
        events={[
          { title: 'event 1', date: '2022-04-07', color: '#44619A', textColor: 'white' },
          { title: 'event 3', date: '2022-04-07', color: '#E87E4F', textColor: 'white' },
          { title: 'event 2', date: '2022-04-08', color: '#F6B229', textColor: 'white'  }
        ]}
      />
    </div>
  );
}

export default App;
