import React from "react";
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const [images, setImages] = React.useState([]);
  const videoConstraints = {
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);

  const takePhoto = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImages([...images, imageSrc]);
    console.log(imageSrc);
  }, [webcamRef, images]);

  return (
    <div className="App">
      <nav id="navbar">Pwa Camera</nav>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "space-between",
        }}
      >
        <Webcam
          audio={false}
          height="20%"
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="100%"
          videoConstraints={videoConstraints}
        />
        <div
          style={{
            width: "100%",
            padding: "10px",
            display: "flex",
            flexWrap: "wrap",
          }}
          classNam="imagesContainer"
        >
          {images.length &&
            images.map((image) => (
              <img
                src={image}
                style={{ width: "100px", height: "100px", margin: "10px" }}
                alt="clicked images"
              />
            ))}
        </div>
        <button id="camera-btn" onClick={takePhoto}>
          Take Photo
        </button>
      </main>
    </div>
  );
}

export default App;
