import { useState } from 'react';

interface ProfileImageProps {
  alt?: string;
  className?: string;
  imageClassName?: string;
}

const LOCAL_PROFILE_PHOTO = '/photo.png';
const FALLBACK_PROFILE_PHOTO = '/photo.png';

export default function ProfileImage({
  alt = 'Akash Kumar profile photo',
  className = 'w-full h-full',
  imageClassName = 'w-full h-full object-cover',
}: ProfileImageProps) {
  const [imageSrc, setImageSrc] = useState(LOCAL_PROFILE_PHOTO);

  return (
    <div className={className}>
      <img
        src={imageSrc}
        alt={alt}
        className={imageClassName}
        style={{ objectPosition: 'center 18%' }}
        onError={() => {
          if (imageSrc !== FALLBACK_PROFILE_PHOTO) {
            setImageSrc(FALLBACK_PROFILE_PHOTO);
          }
        }}
      />
    </div>
  );
}
