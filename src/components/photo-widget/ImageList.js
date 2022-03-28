import ImageCard from './ImageCard';
import { StylesList } from './PhotoStyles';

const ImageList = ({ images, search }) => {

  const imageList = images.map(image => {
    return <ImageCard key={image.id} image={image} search={search} />;
  });
  console.log(images[0]);
  console.log(imageList);

  return <StylesList>{imageList}</StylesList>;
};

export default ImageList;