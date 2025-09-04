import Image from "next/image";
import { useState } from "react";

const init = { src: "", isImage: false, name: "" };

const FileInput = ({
  text = "Datei(en) hinzufügen",
  icon = "upload",
  onChange,
  ...rest
}) => {
  const [file, setFile] = useState(init);
  function handleChange(event) {
    if (onChange) {
      onChange(event);
    }
    const {
      currentTarget: { files },
    } = event;

    const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];

    const isImage = acceptedImageTypes.includes(files[0]["type"]);
    const objectURL = URL.createObjectURL(files[0]);
    setFile({ src: objectURL, isImage, name: files[0].name });
  }

  function handleRemove() {
    setFile(init);
    if (onChange) {
      onChange({
        target: {
          files: [],
        },
      });
    }
  }

  return (
    <div
      className={`image-file-container ${
        file.src ? (file.isImage ? "show-image" : "show-file") : ""
      }`}
    >
      {file.src ? (
        <>
          <div className="icon-file-content" onClick={handleRemove}>
            <i className="mdi mdi-delete" />
          </div>
          {file.isImage ? (
            <Image src={file.src} alt="teleprint" layout="fill" />
          ) : (
            <span>{file.name}</span>
          )}
        </>
      ) : (
        <label className="file-uploader">
          {icon ? <i className={`mdi mdi-${icon}`} /> : null}
          <span>{text}</span>
          <input {...rest} type="file" onChange={handleChange} />
        </label>
      )}
    </div>
  );
};

export default FileInput;
