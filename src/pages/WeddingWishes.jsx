import { useEffect, useState } from 'react';
import FetchWeddingData from '../api/weddingInvitationApi';
import WishCard from '../components/WishCard';

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
      const data = await FetchWeddingData.getWishes();
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

    document.getElementById('wishesForm').reset();
    alert(`Sent! ${weddingWish.name}`);
  };

  const postWish = async (weddingWish) => {
    try {
      const data = await FetchWeddingData.postWish(weddingWish);
      setWishes([...wishes, data]);
    } catch (err) {
      throw new Error(`There's a problem : ${err.message}`);
    }
  };

  return (
    <section className="wedding-wishes">
      <h2 className="section-title" data-aos="fade-down">
        Wedding Wishes
      </h2>
      <form
        className="wishes-form"
        id="wishesForm"
        onSubmit={onSubmitHandler}
        data-aos="fade"
      >
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
