import { motion } from 'motion/react';
import { Copy, Check, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const ca = "CA ALT"; // Placeholder

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-base md:text-2xl font-mono text-black font-bold mb-4 tracking-widest">
            O SHIT WADDUP!
          </h2>
          <h1 className="text-xl sm:text-4xl md:text-7xl lg:text-8xl font-display leading-none mb-6 text-black drop-shadow-[0_2px_0_rgba(255,255,255,1)] md:drop-shadow-[0_4px_0_rgba(255,255,255,1)] w-full max-w-full">
            <span className="whitespace-nowrap">INTRODUCING</span> <br />
            <span className="text-white drop-shadow-[0_2px_0_rgba(0,0,0,1)] md:drop-shadow-[0_4px_0_rgba(0,0,0,1)]">
              $DATBOI
            </span>
          </h1>
          
          <p className="text-black/80 text-base md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 font-mono font-bold px-4">
            The internet never forgets legends. It just waits for them to return.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 w-full">
            <button className="group bg-black text-white font-display text-lg md:text-xl px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all shadow-xl flex items-center gap-3 w-full sm:w-auto justify-center">
              BUY $DATBOI
              
            </button>
            <a href="https://dexscreener.com" target="_blank" rel="noreferrer" className="border-2 border-black text-black font-mono font-bold px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all w-full sm:w-auto text-center text-lg md:text-xl">
              VIEW CHART
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-black/10 p-4 rounded-xl max-w-md mx-auto lg:mx-0 shadow-2xl w-full">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-neon-green text-sm flex-shrink-0">CA:</span>
              <code className="font-mono text-black text-xs sm:text-sm truncate flex-1 min-w-0">
                {ca}
              </code>
              <button
                onClick={copyToClipboard}
                className="text-gray-400 hover:text-black transition-colors flex-shrink-0"
              >
                {copied ? <Check size={18} className="text-neon-green" /> : <Copy size={18} />}
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="relative w-4/5 md:w-full aspect-square max-w-lg mx-auto">
            {/* Placeholder for Dat Boi Image */}
            <div className="w-full h-full bg-white rounded-3xl border-4 border-black flex items-center justify-center overflow-hidden relative group shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-green/40 via-transparent to-transparent opacity-50"></div>
               <img 
                 src="https://i.ibb.co/SwcBcQ8d/PNG-01.png" 
                 alt="Dat Boi" 
                 className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500 animate-custom-bounce"
               />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-10 bg-white text-black font-display text-xs md:text-xl p-2 md:p-4 rounded-lg rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black z-20 whitespace-nowrap"
            >
              HERE COME DAT BOI!
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
