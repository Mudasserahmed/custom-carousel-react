import React, { useEffect, useState } from "react";

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlider();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const handleNextSlider = () => {
    if (currentSlider == randomImages.length - 1) {
      setCurrentSlider(0);
    } else {
      setCurrentSlider(currentSlider + 1);
    }
  };
  const handlePreviousSlider = () => {
    if (currentSlider === 0) {
      setCurrentSlider(randomImages.length - 1);
    } else {
      setCurrentSlider(currentSlider - 1);
    }
  };

  const randomImages = [
    "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?cs=srgb&dl=pexels-roberto-nickson-2486168.jpg&fm=jpg",
    "data:image/jpeg;base64,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",
    "https://img.freepik.com/free-photo/glowing-lines-human-heart-3d-shape-dark-background-generative-ai_191095-1435.jpg",
    "https://wallpapers.com/images/hd/cute-aesthetic-spongebob-cartoon-y4f87ri8d22pdhaa.jpg",
    "https://t4.ftcdn.net/jpg/05/72/82/85/360_F_572828530_ofzCYowQVnlOwkcoBJnZqT36klbJzWdn.jpg",
  ];
  return (
    <div>
      <h1> Crousal using React</h1>
      <div
        style={{
          display: "flex ",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <button
          onClick={() => handlePreviousSlider()}
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          <img
            className="button-class"
            src="https://cdn1.iconfinder.com/data/icons/duotone-essentials/24/chevron_backward-512.png"
            width={50}
            height={50}
          />
        </button>
        <img src={randomImages[currentSlider]} width={700} height={500} />
        <button
          onClick={() => handleNextSlider()}
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          <img
            className="button-class"
            src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
