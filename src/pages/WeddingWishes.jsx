import axios from 'axios';
import { useEffect, useState } from 'react';
import WishCard from '../components/WishCard';
import DATA from '../data/DATA.json';

const WeddingWishes = () => {
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

  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    fetchWishes();
  }, []);

  const fetchWishes = async () => {
    try {
      const { data } = await axios.get(`${DATA.databaseUrl}/wishes`);
      setWishes(data);
    } catch (err) {
      alert(`There's a problem : ${err}`);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const dateObject = new Date();
    const weddingWish = {
      name: document.getElementById('nameInput').value,
      wish: document.getElementById('wishInput').value,
      date: `${dateObject.getDate()} ${
        monthList[dateObject.getMonth()]
      } ${dateObject.getFullYear()}`,
    };

    postWish(weddingWish);
  };

  const postWish = async (weddingWish) => {
    try {
      const data = await axios.post(`${DATA.databaseUrl}/wishes`, weddingWish);
      return data;
    } catch (err) {
      alert(`There's a problem : ${err}`);
    }
  };

  return (
    <section className="wedding-wishes">
      <h2 className="section-title" data-aos="fade-down">
        Wedding Wishes
      </h2>
      <form className="wishes-form" onSubmit={onSubmitHandler} data-aos="fade">
        <input
          type="text"
          className="name"
          id="nameInput"
          placeholder="Nama"
          required
        />
        <textarea
          name="wish-input"
          className="wish-input"
          id="wishInput"
          placeholder="Tulis harapanmu untuk calon mempelai"
          required
        ></textarea>
        <input type="submit" value="Kirim" className="btn" />
      </form>
      <div className="wishes-list" data-aos="fade">
        {wishes.map((wish) => (
          <WishCard
            key={wish.id}
            name={wish.name}
            wish={wish.wish}
            date={wish.date}
          />
        ))}
      </div>
    </section>
  );
};

export default WeddingWishes;
