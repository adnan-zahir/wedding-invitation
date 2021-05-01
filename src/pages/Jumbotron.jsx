import jumbotronWebp from '../images/jumbotron/jumbotron.webp';
import jumbotronPng from '../images/jumbotron/jumbotron.png';
import jumbotronSmallWebp from '../images/jumbotron/jumbotron-small.webp';
import jumbotronSmallPng from '../images/jumbotron/jumbotron-small.webp';

const Jumbotron = () => {
  return (
    <section className="jumbotron full-height">
      <picture>
        <source media="(min-width: 900px)" srcSet={jumbotronWebp} />
        <source media="(min-width: 900px)" srcSet={jumbotronPng} />
        <source media="(max-width: 899px)" srcSet={jumbotronSmallWebp} />
        <img src={jumbotronSmallPng} alt="Calon mempelai sedang bersama" />
      </picture>
      <h1 className="sub-title">The Wedding of</h1>
      <h1 className="title">Aku & Kamu</h1>
    </section>
  );
};

export default Jumbotron;
