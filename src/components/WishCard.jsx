const WishCard = (props) => {
  const { name, wish, date } = props;

  return (
    <div className="wish-card">
      <span className="wish-name">{name}</span>
      <span className="wish-text">{wish}</span>
      <span className="wish-date">{date}</span>
    </div>
  );
};

export default WishCard;
