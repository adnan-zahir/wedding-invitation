import profilePicture from '../images/profile-pic.png';
import instagramLogo from '../images/icons/instagram.png';
// import { useEffect, useState } from 'react';

const Profiles = (props) => {
  const { profileData } = props;

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
        <h3 className="profile-name">{profileData.bride.name}</h3>
        <small className="social">
          <a
            href={profileData.bride.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <img src={instagramLogo} alt="Instagram" className="social-icon" />
            {profileData.bride.socialTag}
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
        <h3 className="profile-name">{profileData.groom.name}</h3>
        <small className="social">
          <a
            href={profileData.groom.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            <img src={instagramLogo} alt="Instagram" className="social-icon" />
            {profileData.groom.socialTag}
          </a>
        </small>
      </div>
    </section>
  );
};

export default Profiles;
