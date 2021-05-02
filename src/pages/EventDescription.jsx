import { useEffect, useState } from 'react';

const EventDescription = (props) => {
  const { dateData, location, schedule } = props;

  const [locationState, setLocationState] = useState({
    name: '',
    address: '',
    mapsLink: '',
  });

  const [scheduleState, setScheduleState] = useState({
    marriage: '',
    reception: {},
  });

  useEffect(() => {
    setLocationState(location);
    setScheduleState(schedule);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const monthList = [
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

  const dayList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <section className="event-description">
      <div className="desc-date" data-aos="fade">
        <span className="desc-date__day">
          {
            dayList[
              new Date(
                `${dateData.month}/${dateData.day}/${dateData.year}`
              ).getDay()
            ]
          }
        </span>
        <span className="desc-date__date">
          {dateData.day < 10 ? `0${dateData.day}` : dateData.day}
        </span>
        <span className="desc-date__month">
          {monthList[dateData.month - 1]}
        </span>
        <span className="desc-date__year">{dateData.year}</span>
      </div>
      <div className="desc-time" data-aos="fade-right">
        <span>Akad Nikah</span>
        <span>{scheduleState.marriage}</span>
      </div>
      <div className="desc-schedule" data-aos="fade-left">
        <span>Resepsi</span>
        {/* <span>Sesi 1 : 11.00 - 12.30 WIB</span>
        <span>&</span>
        <span>Sesi 2 : 13.00 - 14.30 WIB</span> */}
        {Object.keys(scheduleState.reception).map((rec) => (
          <span>
            {rec} : {scheduleState.reception[rec]}
          </span>
        ))}
        <p>{/* <strong>11:00 - 14.30</strong> */}</p>
      </div>
      <div className="desc-location" data-aos="fade">
        <span>{locationState.name}</span>
        <p>{locationState.address}</p>
        <a
          className="btn view-map-button"
          href={locationState.mapsLink}
          target="_blank"
          rel="noreferrer"
        >
          View Map
        </a>
      </div>
    </section>
  );
};

export default EventDescription;
