import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import { FaFileAlt } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FcRemoveImage } from "react-icons/fc";

const ImageUploader = (props) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const imageFile = acceptedFiles[0];
    setUploadedImage(URL.createObjectURL(imageFile));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleRemove = () => {
    setUploadedImage(null);
  };

  return (
    <div style={dropzoneStyles} {...getRootProps()}>
      <input {...getInputProps()} />
      {uploadedImage ? (
        <>
          <img src={uploadedImage} alt="Uploaded" style={imagePreviewStyles} />
          <button onClick={handleRemove} style={removeButtonStyles}>
            <FcRemoveImage className='text-[#22508E]' />
          </button>
        </>
      ) : (
        <div className='flex justify-center items-center flex-col p-5 w-full'>
            {/* <FaFileAlt className='text-[#22508E] text-[6rem]' /> */}
            {props.icon}
            <h5 className='flex mt-3 text-[#22508E]'> <FaUpload className='me-3' /> Upload </h5>
        </div>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: '1px dashed #22508E',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: '#2f83e456'
};

const imagePreviewStyles = {
  maxWidth: '100%',
  maxHeight: '200px',
  margin: '10px 0',
};

const removeButtonStyles = {
  position: 'absolute',
  bottom: '10px',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '5px 10px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '2rem',
};

export default ImageUploader;