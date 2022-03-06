import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {

  const imageList = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  console.log(images[0]);
  console.log(imageList);

  return <div className="image-list">{imageList}</div>;
};

export default ImageList;