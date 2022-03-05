import '../photo-widget/ImageList.css';
import ImageCard from '../photo-widget/ImageCard';

const ArtList = ({ images }) => {
    const artList = images.map(image => {
        return <ImageCard key={image.id} image={image} />;
    });

    return <div className="image-list">{artList}</div>;
};

export default ArtList;