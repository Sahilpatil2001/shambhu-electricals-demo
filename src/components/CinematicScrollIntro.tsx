import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 240;

const currentFrame = (index: number) => 
  `/hero-scroll-webp/ezgif-frame-${index.toString().padStart(3, '0')}.webp`;

export function CinematicScrollIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    canvas.width = 1920;
    canvas.height = 1080;
    
    // We cache images to avoid flickering
    const images: HTMLImageElement[] = [];
    
    const drawImage = (img: HTMLImageElement) => {
       context.clearRect(0, 0, canvas.width, canvas.height);
       context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // Preload all other images asynchronously
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const preloadImg = new Image();
      preloadImg.onload = () => {
         setImagesLoaded((prev) => prev + 1);
      };
      preloadImg.src = currentFrame(i);
      images[i] = preloadImg;
    }

    const updateImage = (index: number) => {
      if (images[index] && images[index].complete) {
        drawImage(images[index]);
      } else {
         const fallbackImg = new Image();
         fallbackImg.onload = () => {
            drawImage(fallbackImg);
         }
         fallbackImg.src = currentFrame(index);
         if (fallbackImg.complete) {
            drawImage(fallbackImg);
         }
      }
    };
    
    const handleScroll = () => {
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      // Scroll distance is the total height of the container minus the viewport height
      const scrollDistance = rect.height - window.innerHeight;
      
      let scrollFraction = 0;
      if (rect.top <= 0) {
         scrollFraction = Math.abs(rect.top) / scrollDistance;
      }
      
      if (scrollFraction < 0) scrollFraction = 0;
      if (scrollFraction > 1) scrollFraction = 1;
      
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(scrollFraction * FRAME_COUNT)
      );
      
      requestAnimationFrame(() => updateImage(frameIndex + 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger initial render after a tiny delay to ensure layout is done
    setTimeout(handleScroll, 50);
    
    // Also draw first frame explicitly if it loads later
    if (images[1]) {
       images[1].addEventListener('load', () => {
          if (container.getBoundingClientRect().top > 0) {
              updateImage(1);
          }
       });
       if (images[1].complete) {
          updateImage(1);
       }
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    null
    // <div ref={containerRef} className="relative w-full bg-black h-[400vh] z-20">
    //   <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
    //     <canvas 
    //       ref={canvasRef} 
    //       className="w-full h-full object-cover"
    //     />
    //     {imagesLoaded < 10 && (
    //        <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
    //          Loading animation...
    //        </div>
    //     )}
    //   </div>
    // </div>
  );
}
