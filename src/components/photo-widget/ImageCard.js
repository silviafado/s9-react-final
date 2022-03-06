import { useState, useRef, useEffect, useLayoutEffect } from 'react';

const ImageCard = ({ key, image }) => {

  const [spans, setSpans] = useState(0);
  const imageRef = useRef(image);
  console.log(imageRef);
  const itemHeight = imageRef.current.height;
  //const itemValue = Math.ceil(itemHeight + 10);
  const { description, urls } = image;

  /*useEffect(() => {
    imageRef.current.addEventListener('load', setSpans(itemHeight));
    // eslint-disable-next-line
  }, []);*/

  useLayoutEffect(() => {
    imageRef.current.addEventListener('load', setSpans(itemHeight));
  }, [spans, itemHeight]);


  return (
    <div key={key}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
}

export default ImageCard;
