import { motion } from 'motion/react';

export default function Partners() {
  return (
    <section className="py-24 border-y border-black/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-display text-black mb-16">
          PARTNERS
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex flex-col items-center gap-4 group">
             <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <span className="text-3xl">🦄</span>
             </div>
             <span className="font-display text-xl text-black">Uniswap</span>
          </div>
          
          <div className="flex flex-col items-center gap-4 group">
             <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <span className="text-3xl">🦅</span>
             </div>
             <span className="font-display text-xl text-black">DexScreener</span>
          </div>

          <div className="flex flex-col items-center gap-4 group">
             <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <span className="text-3xl">🦎</span>
             </div>
             <span className="font-display text-xl text-black">CoinGecko</span>
          </div>
        </div>
      </div>
    </section>
  );
}
