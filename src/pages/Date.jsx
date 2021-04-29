import Countdown from '../components/Countdown';
import saveTheDate from '../images/save-the-date.gif';

const Date = (props) => {
  return (
    <section className="date">
      <h2 className="section-title" data-aos="fade-down">
        {props.dateString}
      </h2>
      <img
        src={saveTheDate}
        alt="Save The Date"
        className="save-the-date"
        data-aos="flip-right"
      />
      <Countdown dateData={props.dateData} />
    </section>
  );
};

export default Date;
