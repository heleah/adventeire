import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MdNavigateBefore } from 'react-icons/md';
import { MdNavigateNext } from 'react-icons/md';

export default function Calendar({
  onSetShowCalendar,
  selectDate,
  onSetSelectDate,
  sight,
  dateSightCombos,
  setDateSightCombos,
}) {
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

  function handleModalOK() {
    const newCombo = { date: selectDate, sight: sight };
    setDateSightCombos([...dateSightCombos, newCombo]);
    onSetShowCalendar(false);
  }

  return (
    <Modal>
      <div className='modal_open'>
        <CalendarView>
          <Header>
            <Button onClick={() => setDate(new Date(year, month - 1, day))}>
              <MdNavigateBefore className='icon' />
            </Button>
            <MonthYear>
              {months[month]} {year}
            </MonthYear>
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
                const dFormatted =
                  d.toString().length === 1 ? '0' + d.toString() : d;
                const monthFormatted =
                  (month + 1).toString().length === 1
                    ? '0' + (month + 1).toString()
                    : month + 1;
                const formatted = `${dFormatted}/${monthFormatted}/${year}`;
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
        <ButtonCloseWrapper>
          <ButtonClose onClick={handleModalOK}>OK</ButtonClose>
          <ButtonClose onClick={() => onSetShowCalendar(false)}>
            Cancel
          </ButtonClose>
        </ButtonCloseWrapper>
      </div>
      <div className='modal_open--overlay'></div>
    </Modal>
  );
}

Calendar.propTypes = {
  onSetShowCalendar: PropTypes.func,
  selectDate: PropTypes.string,
  onSetSelectDate: PropTypes.func,
  sight: PropTypes.object,
  dateSightCombos: PropTypes.array,
  setDateSightCombos: PropTypes.func,
};

const Modal = styled.div`
  position: relative;
  .modal_open {
    z-index: 999;
    display: flex;
    flex-flow: column wrap;
    position: absolute;
    margin: auto;
    padding: 1rem;
    max-width: 26rem;
    border-radius: 0.5rem;
    background-color: var(--grey-lightest);
  }
  .modal_open--overlay {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const CalendarView = styled.section`
  display: grid;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: var(--primary-dark);
  color: var(--grey-lightest);
  font-weight: bold;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: var(--grey-lightest);
  cursor: pointer;
  .icon {
    font-size: 2rem;
  }
`;

const MonthYear = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Body = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.2%;
  height: 2.5rem;
  background-color: ${(props) => props.isSelected && 'var(--secondary-light)'};
  border: ${(props) => props.isToday && '1px solid var(--grey-lightest)'};
  cursor: pointer;
`;

const ButtonCloseWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-end;
`;

const ButtonClose = styled.button`
  margin-top: 1rem;
  text-align: right;
  border: none;
  background-color: transparent;
  color: var(--primary-darkest);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;
