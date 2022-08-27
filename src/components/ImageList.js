import React from "react";

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((image,index) => {
        return (<img key ={index} src={image.urls.regular} alt="Search Image" srcset="" style={{width: "400px", height:"200px"}}/>);
      })}
    </div>
  );
};

export default ImageList;
