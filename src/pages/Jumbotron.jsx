import jumbotronPng from '../images/jumbotron/jumbotron.png';
import jumbotronSmallPng from '../images/jumbotron/jumbotron-small.webp';

const Jumbotron = () => {
  return (
    <section className="jumbotron full-height">
      <picture>
        <source media="(min-width: 900px)" srcSet={jumbotronPng} />
        <img src={jumbotronSmallPng} alt="Calon mempelai sedang bersama" />
      </picture>
      <h1 className="sub-title">The Wedding of</h1>
      <h1 className="title">Aku & Kamu</h1>
    </section>
  );
};

export default Jumbotron;
