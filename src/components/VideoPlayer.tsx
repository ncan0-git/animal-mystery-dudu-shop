import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoPlayerProps {
  thumbnailSrc: string;
  videoSrc: string;
  alt: string;
  className?: string;
}

export const VideoPlayer = ({ thumbnailSrc, videoSrc, alt, className = "" }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setShowVideo(true);
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowVideo(false);
  };

  return (
    <div className={`relative ${className}`}>
      {!showVideo ? (
        // Thumbnail with play button
        <div className="relative group cursor-pointer" onClick={handlePlay}>
          <img 
            src={thumbnailSrc} 
            alt={alt} 
            className="w-full h-auto object-contain rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
            <Button
              size="lg"
              className="bg-white/90 hover:bg-white text-black rounded-full p-4 shadow-lg"
            >
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </Button>
          </div>
        </div>
      ) : (
        // Video player
        <div className="relative">
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-auto object-contain rounded-2xl shadow-lg"
            onEnded={handleVideoEnd}
            controls
            autoPlay
          />
          {isPlaying && (
            <Button
              onClick={handlePause}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            >
              <Pause className="w-4 h-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};