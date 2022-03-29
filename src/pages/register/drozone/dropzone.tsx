import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import img_skelton from "../../../assets/images/register/image_skleton.png";
import { Wrapper } from "./dropzone.e";

function Dropzone() {
  const [files, setFiles] = useState([]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    maxFiles: 1,
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const image = files.map((file: any) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          style={{ width: "100%", height: "200px" }}
          alt="preview"
        />
      </div>
    </div>
  ));

  return (
    <Wrapper {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      {files[0] ? (
        image
      ) : (
        <>
          <img src={img_skelton} alt="sd" className="download" />
          <p>
            Rasmni yuklash uchun
            <label className="browse" htmlFor="file">
              bu yerga
            </label>
            bosing
          </p>
          <div className="example">Fayllar: JPG, JPEG2000, PNG</div>
        </>
      )}
      <input {...getInputProps()} />
    </Wrapper>
  );
}

export default Dropzone;
