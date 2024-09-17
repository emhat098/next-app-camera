'use client';

import React, { useState } from 'react';
import QrReader from 'react-qr-reader-es6';

const QrScanner = () => {
  const [qrData, setQrData] = useState('No result');

  const handleError = (error: any) => {
    console.error(error);
  };

  return (
    <div>
      <QrReader
        onScan={(data) => {
          setQrData(data ?? 'No result');
          console.log(data);
        }}
        onError={handleError}
        style={{
          width: 400,
          height: 400,
        }}
      />
      <p>QR Data: {qrData}</p>
    </div>
  );
};

export default QrScanner;