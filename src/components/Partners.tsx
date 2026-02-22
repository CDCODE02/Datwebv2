import { motion } from 'motion/react';

export default function Partners() {
  return (
    <section className="py-24 bg-dark-bg border-y border-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-display text-white mb-16">
          PARTNERS
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center gap-4 group">
             <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                <span className="text-3xl">🦄</span>
             </div>
             <span className="font-display text-xl">Uniswap</span>
          </div>
          
          <div className="flex flex-col items-center gap-4 group">
             <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                <span className="text-3xl">🦅</span>
             </div>
             <span className="font-display text-xl">DexScreener</span>
          </div>

          <div className="flex flex-col items-center gap-4 group">
             <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                <span className="text-3xl">🦎</span>
             </div>
             <span className="font-display text-xl">CoinGecko</span>
          </div>
        </div>
      </div>
    </section>
  );
}
