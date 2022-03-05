import { useState, createRef, useEffect } from 'react';

const ImageCard = ({ key, image }) => {

  const [spans, setSpans] = useState({ height: 0, value: 0 });
  const imageRef = createRef();
  const itemHeight = imageRef.current.clientHeight;
  const itemValue = Math.ceil(itemHeight / 10);
  const { description, urls } = image;

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans({ height: itemHeight, value: itemValue }));
    // eslint-disable-next-line
  }, []);

  return (
    <div key={key} style={{ gridRowEnd: `span ${spans.value}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
}

export default ImageCard;
