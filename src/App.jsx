import axios from 'axios';
import { useEffect, useState } from 'react';
import Date from './pages/Date';
import EventDescription from './pages/EventDescription';
import GalleryPage from './pages/Gallery';
import Jumbotron from './pages/Jumbotron';
import Profiles from './pages/Profiles';
import Video from './pages/Video';
import WeddingWishes from './pages/WeddingWishes';
import DATA from './data/DATA.json';

const App = () => {
  const [date, setDate] = useState({
    day: 1,
    month: 1,
    year: 2000,
  });
  const [updatedDate, setUpdatedDate] = useState({});
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    fetchDate();
  }, []);

  useEffect(() => {
    dateToString();
    setUpdatedDate(date);
  }, [date]);

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

  const fetchDate = async () => {
    const { data } = await axios.get(`${DATA.databaseUrl}/date`);
    setDate(data);
  };

  const dateToString = () => {
    const dateData = date;
    const dayString =
      dateData.day < 10 ? `0${dateData.day}` : `${dateData.day}`;
    const monthString = monthList[dateData.month - 1];
    const yearString = `${dateData.year}`;
    setDateString(`${dayString} ${monthString} ${yearString}`);

    if (dateData === {} || !dateData) setDateString('No Date');
  };

  return (
    <div className="App">
      <Jumbotron />
      <Profiles />
      <Date dateString={dateString} dateData={updatedDate} />
      <Video />
      <EventDescription dateData={updatedDate} />
      <GalleryPage />
      <WeddingWishes />
      <footer>
        <h2>Thank You</h2>
      </footer>
    </div>
  );
};

export default App;
