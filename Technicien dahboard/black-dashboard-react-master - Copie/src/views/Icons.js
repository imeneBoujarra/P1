import React, { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';

const Icons = () => {
  const [result, setResult] = useState('');
  const [capturedPictures, setCapturedPictures] = useState([]);
  const qrReaderRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleCapturePicture = () => {
    const videoElement = qrReaderRef.current.getVideoElement();
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL();
    setCapturedPictures([...capturedPictures, dataURL]);
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <QrReader
        ref={qrReaderRef}
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result && <p>QR Code Result: {result}</p>}
      
      <button onClick={handleCapturePicture}>Capture Picture</button>

      {capturedPictures.length > 0 && (
        <div>
          <h3>Captured Pictures:</h3>
          <ul>
            {capturedPictures.map((picture, index) => (
              <li key={index}>
                <img src={picture} alt={`Captured Picture ${index}`} style={{ maxWidth: '200px' }} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Icons;
