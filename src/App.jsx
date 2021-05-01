import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Date from './pages/Date';
import EventDescription from './pages/EventDescription';
import GalleryPage from './pages/Gallery';
import Jumbotron from './pages/Jumbotron';
import Profiles from './pages/Profiles';
import Video from './pages/Video';
import WeddingWishes from './pages/WeddingWishes';
import DATA from './data/DATA.json';
import Aos from 'aos';
import AudioControl from './components/AudioControl';

const App = () => {
  const [date, setDate] = useState({
    day: 1,
    month: 1,
    year: 2000,
  });
  const [updatedDate, setUpdatedDate] = useState({});
  const [dateString, setDateString] = useState('');
  const [weddingData, setWeddingData] = useState({});
  const [updatedWeddingData, setUpdatedWeddingData] = useState({});

  const dateToString = useCallback((date) => {
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

    const dateData = date;
    const dayString =
      dateData.day < 10 ? `0${dateData.day}` : `${dateData.day}`;
    const monthString = monthList[dateData.month - 1];
    const yearString = `${dateData.year}`;
    setDateString(`${dayString} ${monthString} ${yearString}`);

    if (dateData === {} || !dateData) setDateString('No Date');
  }, []);

  useEffect(() => {
    fetchData();
    Aos.init({
      duration: 500,
      offset: 100,
      easing: 'ease-in-sine',
      disable: 'mobile',
    });
  }, []);

  useEffect(() => {
    dateToString(date);
    setUpdatedDate(date);
    setUpdatedWeddingData(weddingData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${DATA.databaseUrl}/weddingData`);
      console.log(data);
      setDate(data.date);
      setWeddingData(data);
    } catch (err) {
      alert(`There's a problem : ${err}`);
    }
  };

  return (
    <div className="App">
      <Jumbotron />
      <Profiles profile={updatedWeddingData.profile} />
      <Date dateString={dateString} dateData={updatedDate} />
      <Video />
      <EventDescription
        dateData={updatedDate}
        location={updatedWeddingData.location}
        schedule={updatedWeddingData.schedule}
      />
      <GalleryPage />
      <WeddingWishes />
      <AudioControl />
      <footer>
        <h2>Thank You</h2>
      </footer>
    </div>
  );
};

export default App;
