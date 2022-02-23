import React from "react";

const UploadContent = () => {
  return (
    <div>
      <div>
        <input type="file" name="file" id="file" class="inputFile" />
        <label for="file" class="inputLabel">
          Choose a file
        </label>
      </div>
    </div>
  );
};

export default UploadContent;
