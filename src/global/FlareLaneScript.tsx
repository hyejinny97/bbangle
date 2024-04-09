'use client';

import Script from 'next/script';

const FlareLaneScript = () => {
  const handleScriptLoad = () => {
    window.FlareLane.initialize({ projectId: process.env.NEXT_PUBLIC_FLARELANE_PROJECT_ID });
  };

  return (
    <Script
      src="https://cdn.flarelane.com/WebSDK.js"
      strategy="lazyOnload"
      onLoad={handleScriptLoad}
    />
  );
};

export default FlareLaneScript;
