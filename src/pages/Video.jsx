import videoMp4 from '../videos/video.mp4';
import videoWebm from '../videos/video.webm';

const Video = () => {
  return (
    <section className="video">
      <h2 className="section-title" data-aos="fade-down">
        When We Decide to be Together
      </h2>
      <video data-aos="fade" controls height="300" width="400">
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mpeg" />
      </video>
      <p data-aos="fade-up">Everything starts from here</p>
    </section>
  );
};

export default Video;
