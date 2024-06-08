import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

import ChatRoomSendButton from 'src/components/chat/ChatRoom/ChatRoomSendButton';
import InputFile from './InputFile';

import s from './AddEquipmentPhoto.module.scss';

interface AddEquipmentPhotoProps {
  closeModal: () => void;
}

const AddEquipmentPhoto: FC<AddEquipmentPhotoProps> = ({ closeModal }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const photosRef = useRef<HTMLDivElement>(null);
  const scrollToRight = () => {
    if (photosRef.current) {
      photosRef.current.scrollLeft = photosRef.current.scrollWidth;
    }
  };
  useEffect(() => {
    setTimeout(() => {
      scrollToRight();
    }, 100);
  }, [images]);

  const imageExtensionsRegex = /\.(jpg|jpeg|png|gif|bmp)$/i;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];

      const isImageFile = imageExtensionsRegex.test(file.name);
      if (isImageFile) {
        setSelectedFile(file);
        const imageUrl = URL.createObjectURL(file);
        setImages(prevImages => [...prevImages, imageUrl]);
        scrollToRight();
      }
    }
  };

  return (
    <section className={s.photoAdd}>
      <div className={s.container}>
        <div className={s.photoAdd__input}>
          {selectedFile ? (
            <div className={s.photos} ref={photosRef}>
              {images.map(image => (
                <img key={image} src={image} />
              ))}
            </div>
          ) : (
            <InputFile onChange={handleFileChange} />
          )}
        </div>
        <div className={s.photoAdd__input}>
          <InputFile onChange={handleFileChange} />
        </div>
      </div>
      <ChatRoomSendButton onClick={closeModal} />
    </section>
  );
};

export default AddEquipmentPhoto;
