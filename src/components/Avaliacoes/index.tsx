"use client";
import React, { useEffect, useRef } from 'react';

const ElfsightWidget = () => {
  const divRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.onload = () => {
      if (divRef.current && window.ElfsightApps) {
        window.ElfsightApps.init();


      }
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }


      if (divRef.current && window.ElfsightApps) {
        window.ElfsightApps.destroyApp(divRef.current);
      }
    };
  }, []);



  return (
    <div ref={divRef} className="elfsight-app-47faf601-94f1-4bc1-86bd-53d7dc3e70b5" data-elfsight-app-lazy>
    </div>
  );
};

export default ElfsightWidget;

