import React from "react";
import { Blob } from "./styles";
import { useSelector } from "react-redux";

function ColorBlob() {
  const getFolderColor = useSelector((state) => state.folder.blobColor);

  return <Blob blobColor={getFolderColor} />;
}

export default ColorBlob;
