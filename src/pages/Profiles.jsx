import profilePicture from '../images/profile-pic.png';
import instagramLogo from '../images/icons/instagram.svg';

const Profiles = () => {
  return (
    <section className="profiles">
      <h2 className="section-title" data-aos="fade-down">
        The Bride and The Groom
      </h2>
      <div className="profile" data-aos="fade-right">
        <img
          src={profilePicture}
          alt="Pengantin Wanita"
          className="profile-photo"
        />
        <h3 className="profile-name">Aku</h3>
        <small className="social">
          <a href="#" className="profile-link">
            <img src={instagramLogo} alt="Instagram" className="social-icon" />
            @aku
          </a>
        </small>
      </div>
      <span className="ampersand">&</span>
      <div className="profile" data-aos="fade-left">
        <img
          src={profilePicture}
          alt="Pengantin Pria"
          className="profile-photo"
        />
        <h3 className="profile-name">Kamu</h3>
        <small className="social">
          <a href="#" className="profile-link">
            <img src={instagramLogo} alt="Instagram" className="social-icon" />
            @kamu
          </a>
        </small>
      </div>
    </section>
  );
};

export default Profiles;
