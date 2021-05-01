const EventDescription = (props) => {
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

  const { dateData, location, schedule } = props;

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
        <span>{schedule.marriage}</span>
      </div>
      <div className="desc-schedule" data-aos="fade-left">
        <span>Resepsi</span>
        {/* <span>Sesi 1 : 11.00 - 12.30 WIB</span>
        <span>&</span>
        <span>Sesi 2 : 13.00 - 14.30 WIB</span> */}
        {schedule.reception.map((rec) => (
          <span>
            {Object.keys(schedule.reception)[rec]} : {rec}
          </span>
        ))}
        <p>{/* <strong>11:00 - 14.30</strong> */}</p>
      </div>
      <div className="desc-location" data-aos="fade">
        <span>{location.name}</span>
        <p>{location.address}</p>
        <a
          className="btn view-map-button"
          href={location.mapsLink}
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
