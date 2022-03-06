import { useState, useRef, useEffect } from 'react';

const ImageCard = ({ key, image }) => {

  const [spans, setSpans] = useState(0);
  const imageRef = useRef(image);
  console.log(imageRef);
  const itemHeight = imageRef.current.height;
  const { description, urls } = image;

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans(itemHeight));
    // eslint-disable-next-line
  }, []);

  return (
    <div key={key}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
}

export default ImageCard;
