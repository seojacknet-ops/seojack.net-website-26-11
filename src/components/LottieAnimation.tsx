"use client";

import { useEffect, useState } from "react";

interface LottieAnimationProps {
  animationUrl: string;
  fallbackIcon: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function LottieAnimation({ 
  animationUrl, 
  fallbackIcon, 
  className = "",
  width = 180,
  height = 180
}: LottieAnimationProps) {
  const [showFallback, setShowFallback] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set a timeout to show fallback if iframe doesn't load
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setShowFallback(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoaded]);

  if (showFallback) {
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-6xl animate-bounce">
          {fallbackIcon}
        </div>
      </div>
    );
  }

  return (
    <div className={className} style={{ width, height }}>
      <iframe
        src={animationUrl}
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none',
          borderRadius: '12px'
        }}
        title="Lottie Animation"
        onLoad={() => setIsLoaded(true)}
        onError={() => setShowFallback(true)}
      />
    </div>
  );
}
