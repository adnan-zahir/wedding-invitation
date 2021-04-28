const Video = () => {
  return (
    <section className="video">
      <h2 className="section-title">When We Decide to be Together</h2>
      <video>
        <source src="videos/video.webm" type="video/webm" />
        <source src="videos/video.mp4" type="video/mp4" />
      </video>
      <p>Everything starts from here</p>
    </section>
  );
};

export default Video;
