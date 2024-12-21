import React, { useState, useEffect } from 'react';

const UploadPage = () => {
  const [file, setFile] = useState(null);

  // Clean up URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (file?.url) {
        URL.revokeObjectURL(file.url);
      }
    };
  }, [file,toggle]);

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

  return (
    <div className="bg-[url('/b12.jpg')] h-screen bg-cover bg-center overflow-auto">
    <div className='flex m-2'>
    <div>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
    <input class="block w-50 text-sm text-gray-900 border
     border-gray-300 rounded-lg cursor-pointer bg-gray-50
     " id="file_input" type="file" onChange={handleFileUpload} />
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
                top: 70,
                width: "100%",
                height: "100%",
                colorScheme: "dark light", 
                forceDarkMode: "true",     
                filter: "invert(1)", 
              }}
            type="application/pdf"
          />
        </div>
      )}
    </div>
  );
};

export default UploadPage;