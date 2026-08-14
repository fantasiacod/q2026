'use client';

import { useEffect } from 'react';

export default function AdUnit() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="w-full my-2 flex justify-center min-h-[60px] h-[60px] overflow-hidden rounded-md bg-card/20 border border-border/40 relative">
      {/* Placeholder text for development mode */}
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 text-xs z-0">
        مساحة إعلانية - Google AdSense
      </div>
      
      {/* AdSense Unit */}
      <ins
        className="adsbygoogle z-10"
        style={{ display: 'block', width: '100%', height: '60px' }}
        data-ad-client="ca-pub-7665067472184122" // Replace with your AdSense Client ID
        data-ad-slot="XXXXXXXXXX" // Replace with your AdSense Slot ID
        data-ad-format="horizontal"
      />
    </div>
  );
}
