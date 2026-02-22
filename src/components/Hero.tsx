import { motion } from 'motion/react';
import { Copy, Check, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const ca = "0x000000000000000000000000000000000000dead"; // Placeholder

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
          <h2 className="text-xl md:text-2xl font-mono text-black font-bold mb-4 tracking-widest">
            O SHIT WADDUP!
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-none mb-6 text-white drop-shadow-[0_4px_0_rgba(0,0,0,1)]">
            INTRODUCING <br />
            <span className="text-black drop-shadow-none">
              $DATBOI
            </span>
          </h1>
          
          <p className="text-black/80 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 font-mono font-bold">
            The internet never forgets legends. It just waits for them to return.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
            <button className="group bg-black text-white font-display text-xl px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all shadow-xl flex items-center gap-3">
              BUY $DATBOI
              <ShoppingCart className="w-6 h-6 transition-colors" />
            </button>
            <a href="https://dexscreener.com" target="_blank" rel="noreferrer" className="border-2 border-black text-black font-mono font-bold px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all">
              VIEW CHART
            </a>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-black/10 p-4 rounded-xl max-w-md mx-auto lg:mx-0 shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-neon-green text-sm">CA:</span>
              <code className="font-mono text-black text-sm truncate flex-1">
                {ca}
              </code>
              <button
                onClick={copyToClipboard}
                className="text-gray-400 hover:text-black transition-colors"
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
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Placeholder for Dat Boi Image */}
            <div className="w-full h-full bg-white rounded-3xl border-4 border-black flex items-center justify-center overflow-hidden relative group shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
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
              className="absolute -top-10 -right-10 bg-white text-black font-display text-xl p-4 rounded-lg rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black"
            >
              HERE COME DAT BOI!
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
