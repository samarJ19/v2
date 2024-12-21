import React, { useState, useEffect } from 'react';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [toggle ,setToggle] = useState(0);
  // Clean up URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (file?.url) {
        URL.revokeObjectURL(file.url);
      }
    };
  }, [file]);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      // Clean up previous URL if it exists
      if (file?.url) {
        URL.revokeObjectURL(file.url);
      }
      
      setFile({
        name: uploadedFile.name,
        url: URL.createObjectURL(uploadedFile)
      });
    }
  };
  const handleToggle = (e) => {
    if(e.target.checked){
        setToggle(1);
    } else{
        setToggle(0);
    }
  };
  return (
    <div className="bg-[url('/b12.jpg')] h-screen bg-cover bg-center overflow-auto">
    <div className='flex m-2'>
    <div>
    <label class="block mb-2 text-lg font-medium bg-gray-50 bg-opacity-35 rounded-md text-center text-gray-900 " for="file_input">Upload file</label>
    <input class="block w-50 text-sm text-gray-900 p-1
      rounded-lg cursor-pointer bg-gray-50 bg-opacity-25
     " id="file_input" type="file" onChange={handleFileUpload} />
    </div>
    <div className='mx-4'>
    <label className="inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" onChange={(e)=>{handleToggle(e)}} className="sr-only peer"/>
    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    <span className="ms-3 text-md font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
    </label>
    </div>
    </div>
    
      {file && (
        <div className=" p-4 rounded">
          <p className="mb-2">File: {file.name}</p>
          <embed 
            src={file.url} 
            style={{
                position: "absolute",
                left: 0,
                top: 80,
                width: "100%",
                height: "100%",
                colorScheme: "dark light", 
                forceDarkMode: "true",     
                filter: `invert(${toggle})`, 
              }}
            type="application/pdf"
          />
        </div>
      )}
    </div>
  );
};

export default UploadPage;