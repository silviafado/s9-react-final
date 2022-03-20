import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images, search }) => {

  const imageList = images.map(image => {
    return <ImageCard key={image.id} image={image} search={search} />;
  });
  console.log(images[0]);
  console.log(imageList);

  return <div className="image-list">{imageList}</div>;
};

export default ImageList;