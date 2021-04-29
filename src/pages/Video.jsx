const Video = () => {
  return (
    <section className="video">
      <h2 className="section-title" data-aos="fade-down">
        When We Decide to be Together
      </h2>
      <video data-aos="fade">
        <source src="videos/video.webm" type="video/webm" />
        <source src="videos/video.mp4" type="video/mp4" />
      </video>
      <p data-aos="fade-up">Everything starts from here</p>
    </section>
  );
};

export default Video;
