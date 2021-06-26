import { useState, useEffect } from 'react';
import styled from 'styled-components';
//import PropTypes from 'prop-types';

import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';

export default function Calendar({ onSetShowCalendar, onSetSelectDate }) {
  const totalDaysOfEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const totalDaysOfEachMonthIfLeapYear = [
    31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return startDate === 0 ? 7 : startDate;
  }

  function isLeapYear() {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(year)
    ? totalDaysOfEachMonthIfLeapYear
    : totalDaysOfEachMonth;

  return (
    <Modal>
      <div className='modal_open'>
        <CalendarView>
          <Header>
            <Button onClick={() => setDate(new Date(year, month - 1, day))}>
              <MdNavigateBefore className='icon' />
            </Button>
            <div>
              {months[month]} {year}
            </div>
            <Button onClick={() => setDate(new Date(year, month + 1, day))}>
              <MdNavigateNext className='icon' />
            </Button>
          </Header>
          <Body>
            {weekdays.map((d) => (
              <Day key={d}>
                <strong>{d}</strong>
              </Day>
            ))}
            {Array(days[month] + (startDay - 1))
              .fill(null)
              .map((_, index) => {
                const d = index - (startDay - 2);
                const formatted = `${d}/${month + 1}/${year}`;
                return (
                  <Day
                    key={index}
                    isToday={d === today.getDate()}
                    isSelected={d === day}
                    onClick={() => {
                      setDate(new Date(year, month, d));
                      onSetSelectDate(formatted);
                    }}
                  >
                    {d > 0 ? d : ''}
                  </Day>
                );
              })}
          </Body>
        </CalendarView>
        <ButtonClose onClick={() => onSetShowCalendar(false)}>OK</ButtonClose>
      </div>
      <div className='modal_open--overlay'></div>
    </Modal>
  );
}

/* Calendar.propTypes = {
  onSetShowCalendar: PropTypes.func,
  onSetSelectDate: PropTypes.func,
}; */

const Modal = styled.div`
  position: relative;
  .modal_open {
    display: flex;
    flex-flow: column wrap;
    background-color: var(--grey-lightest);
    border-radius: 0.5rem;
    max-width: 26rem;
    margin: auto;
    padding: 1rem;
    position: absolute;
    z-index: 999;
  }
  .modal_open--overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 99;
  }
`;

const CalendarView = styled.section`
  display: grid;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-dark);
  color: var(--grey-lightest);
  font-weight: bold;
  padding: 0.5rem 0.5rem 0.25rem 0.5rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: var(--grey-lightest);
  .icon {
    font-size: 2rem;
  }
  cursor: pointer;
`;

const Body = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  background-color: ${(props) => props.isSelected && 'var(--secondary-light)'};
  border: ${(props) => props.isToday && '1px solid var(--grey-lightest)'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.2%;
  height: 2.5rem;
  cursor: pointer;
`;

const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  color: var(--primary-darkest);
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
  margin-top: 1rem;
  cursor: pointer;
`;
