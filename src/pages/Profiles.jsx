import profilePicture from '../images/profile-pic.png';
import instagramLogo from '../images/icons/instagram.png';

const Profiles = (props) => {
  const { profile } = props;

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
        <h3 className="profile-name">{profile.bride.name}</h3>
        <small className="social">
          <a
            href={profile.bride.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <img src={instagramLogo} alt="Instagram" className="social-icon" />
            {profile.bride.socialTag}
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
        <h3 className="profile-name">{profile.groom.name}</h3>
        <small className="social">
          <a
            href={profile.groom.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <img src={instagramLogo} alt="Instagram" className="social-icon" />
            {profile.groom.socialTag}
          </a>
        </small>
      </div>
    </section>
  );
};

export default Profiles;
