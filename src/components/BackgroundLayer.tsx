import { motion } from 'framer-motion';

interface BackgroundLayerProps {
  darkMode: boolean;
}

export default function BackgroundLayer({ darkMode }: BackgroundLayerProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1.5s' }}
      />
      
      {/* 3D Grid pattern */}
      <div className="absolute inset-0 perspective-container pointer-events-none">
        <div
          className={`absolute inset-[-100%] bottom-[-50%] animated-3d-grid ${
            darkMode ? 'opacity-30' : 'opacity-[0.15]'
          }`}
          style={{
            backgroundImage: `linear-gradient(${darkMode ? 'rgba(59,130,246,0.5)' : 'rgba(59,130,246,0.3)'} 2px, transparent 2px), linear-gradient(90deg, ${darkMode ? 'rgba(59,130,246,0.5)' : 'rgba(59,130,246,0.3)'} 2px, transparent 2px)`,
            backgroundSize: '100px 100px',
          }}
        />
        {/* Horizon & Edge Fade */}
        <div className={`absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-gray-950 via-gray-950/80' : 'from-gray-50 via-gray-50/80'} to-transparent`} />
        <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-gray-950 via-gray-950/20' : 'from-gray-50 via-gray-50/20'} to-transparent`} />
      </div>
    </div>
  );
}
