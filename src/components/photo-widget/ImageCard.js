import { useState, useRef, useEffect } from 'react';

const ImageCard = ({ key, image }) => {
  const [height, setHeight] = useState(0);
  const imageRef = useRef(image);

  const { description, urls } = image;

  useEffect(() => {
    imageRef.current.addEventListener('load', () => {
      const itemHeight = imageRef.current.clientHeight;
      const spans = Math.ceil(itemHeight / 10);
      setHeight(spans);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div key={key} style={{ gridRowEnd: `span ${height}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
}

export default ImageCard;