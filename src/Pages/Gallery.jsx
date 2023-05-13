import React, { useState, useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll(".gallery-img");
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setLoading(false);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  return (
    <div className="wrapper">
      {loading && <div className="loader">Loading...</div>}
      <img
        src="https://source.unsplash.com/random/600x600?water"
        alt=""
        className="gallery-img"
      />
      <img
        src="https://source.unsplash.com/random/600x600?summer"
        alt=""
        className="gallery-img"
      />
      <img
        src="https://source.unsplash.com/random/600x600?plants"
        alt=""
        className="gallery-img"
      />
      <img
        src="https://source.unsplash.com/random/600x600?snow"
        alt=""
        className="gallery-img"
      />
      <img
        src="https://source.unsplash.com/random/600x600?roses"
        alt=""
        className="gallery-img"
      />
      <img
        src="https://source.unsplash.com/random/600x600?sky"
        alt=""
        className="gallery-img"
      />
      <img
        src="https://source.unsplash.com/random/600x600?nature"
        alt=""
        className="gallery-img"
      />
      <img
        src="https://source.unsplash.com/random/600x600?blossom"
        alt=""
        className="gallery-img"
      />
      <img
        src="https://source.unsplash.com/random/600x600?ice"
        alt=""
        className="gallery-img"
      />
      <img
        src="https://source.unsplash.com/random/600x600?spring"
        alt=""
        className="gallery-img"
      />
    </div>
  );
};

export default Gallery;
