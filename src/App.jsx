import { useCallback, useEffect, useState } from 'react';
import Date from './pages/Date';
import EventDescription from './pages/EventDescription';
import GalleryPage from './pages/Gallery';
import Jumbotron from './pages/Jumbotron';
import Profiles from './pages/Profiles';
import Video from './pages/Video';
import WeddingWishes from './pages/WeddingWishes';
import Aos from 'aos';
import AudioControl from './components/AudioControl';
import FetchWeddingData from './api/weddingInvitationApi';

const App = () => {
  const [profileData, setProfileData] = useState({
    bride: {},
    groom: {},
  });
  // const [weddingData, setWeddingData] = useState({});
  const [dateString, setDateString] = useState('');
  const [date, setDate] = useState({
    day: 1,
    month: 1,
    year: 2000,
  });
  const [locationData, setLocationData] = useState({
    name: '',
    address: '',
    mapsLink: '',
  });
  const [scheduleData, setScheduleData] = useState({
    marriage: '',
    reception: {},
  });

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

    if (date === {} || !date) setDateString('No Date');
  }, []);

  const fetchData = async () => {
    try {
      const data = await FetchWeddingData.getDatas();
      setProfileData(data.profile);
      // setWeddingData(data);
      dateToString(data.date);
      setDate(data.date);
      setLocationData(data.location);
      setScheduleData(data.schedule);
      console.log(data);
    } catch (err) {
      throw new Error(err.message);
    }
    // FetchWeddingData.getDatas()
    //   .then((data) => {
    //     setWeddingData(data);
    //     dateToString(data.date);
    //     setDate(data.date);
    //     setProfileData(data.profile);
    //     setLocationData(data.location);
    //     setScheduleData(data.schedule);
    //     console.log(data);
    //   })
    //   .catch((err) => console.error(err));
  };

  useEffect(() => {
    Aos.init({
      duration: 500,
      offset: 100,
      easing: 'ease-in-sine',
      disable: 'mobile',
    });

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Jumbotron />
      <Profiles profileData={profileData} />
      <Date dateString={dateString} dateData={date} />
      <Video />
      <EventDescription
        dateData={date}
        location={locationData}
        schedule={scheduleData}
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
