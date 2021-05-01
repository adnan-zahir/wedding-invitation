import videoMp4 from '../videos/video.mp4';

const Video = () => {
  return (
    <section className="video">
      <h2 className="section-title" data-aos="fade-down">
        When We Decide to be Together
      </h2>
      <video data-aos="fade" controls height="250" width="300">
        <source src={videoMp4} type="video/mp4" />
      </video>
      <p data-aos="fade-up">Everything starts from here</p>
    </section>
  );
};

export default Video;
