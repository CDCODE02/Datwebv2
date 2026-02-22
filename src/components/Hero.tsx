import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';
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
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-green/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-xl md:text-2xl font-mono text-neon-green mb-4">
            O SHIT WADDUP!
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-none mb-6">
            INTRODUCING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400 glow-text">
              $DATBOI
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 font-mono">
            The internet never forgets legends. It just waits for them to return.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
            <button className="bg-neon-green text-black font-display text-xl px-8 py-4 rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,0,0.4)]">
              BUY $DATBOI
            </button>
            <a href="https://dexscreener.com" target="_blank" rel="noreferrer" className="border border-white/20 text-white font-mono px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              VIEW CHART
            </a>
          </div>

          <div className="bg-card-bg border border-white/10 p-4 rounded-xl max-w-md mx-auto lg:mx-0">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-gray-500 text-sm">CA:</span>
              <code className="font-mono text-neon-green text-sm truncate flex-1">
                {ca}
              </code>
              <button
                onClick={copyToClipboard}
                className="text-gray-400 hover:text-white transition-colors"
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
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-3xl border-2 border-neon-green/30 flex items-center justify-center overflow-hidden relative group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-green/20 via-transparent to-transparent opacity-50"></div>
               <span className="text-9xl group-hover:scale-110 transition-transform duration-500">🐸🚲</span>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-neon-green text-black font-display text-xl p-4 rounded-lg rotate-12 shadow-lg"
            >
              HERE COME DAT BOI!
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
