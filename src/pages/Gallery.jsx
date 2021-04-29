import Gallery from 'react-photo-gallery';
import photo1 from '../images/gallery/gallery (1).jpg';
import photo2 from '../images/gallery/gallery (2).jpg';
import photo3 from '../images/gallery/gallery (3).jpg';
import photo4 from '../images/gallery/gallery (4).jpg';
import photo5 from '../images/gallery/gallery (5).jpg';
import photo6 from '../images/gallery/gallery (6).jpg';

const GalleryPage = () => {
  const photos = [
    {
      src: photo1,
      width: 9,
      height: 16,
    },
    {
      src: photo2,
      width: 4,
      height: 3,
    },
    {
      src: photo3,
      width: 3,
      height: 4,
    },
    {
      src: photo4,
      width: 1,
      height: 1,
    },
    {
      src: photo5,
      width: 4,
      height: 3,
    },
    {
      src: photo6,
      width: 3,
      height: 4,
    },
  ];

  return (
    <section className="gallery">
      <h2 className="section-title" data-aos="fade-down">
        Our Photos
      </h2>
      <Gallery photos={photos} />
    </section>
  );
};

export default GalleryPage;
