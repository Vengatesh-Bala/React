import React, { useRef } from 'react';
import { RxUpload } from "react-icons/rx";

function Test2() {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    // Do something with the file, such as upload it to a server
    console.log(file);
  };

  return (
    <div className='uploader-body'>


      <form className='uploader-form'>


        <div>
          <RxUpload size='25px' color='blue'/> <input type="file" label='Select logo' ref={fileInputRef} />
          <button className='upload-btn' onClick={handleFileUpload}>Upload</button>
        </div>
      </form>
    </div>
  );
}

export default Test2;
