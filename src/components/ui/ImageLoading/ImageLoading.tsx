import { FC, HTMLAttributes, useState } from 'react';

import SkeletonLoading from 'src/components/SkeletonLoading';

interface ImageLoadingProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

const ImageLoading: FC<ImageLoadingProps> = ({ src, alt = '', ...restProps }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <SkeletonLoading isLoading={isLoading} type="image">
        <img src={src} alt={alt} {...restProps} />
      </SkeletonLoading>
      {isLoading && (
        <img
          src={src}
          alt="loading image"
          style={{ display: 'none' }}
          onLoad={handleImageLoad}
          {...restProps}
        />
      )}
    </>
  );
};

export default ImageLoading;
