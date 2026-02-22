import { motion } from 'motion/react';
import { PieChart, Wallet, Lock } from 'lucide-react';

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display text-black mb-4 drop-shadow-sm">
            TOKENOMICS
          </h2>
          <p className="font-mono text-black/80 font-bold">The math behind the meme</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "TOTAL SUPPLY",
              value: "420.69 T",
              icon: <PieChart className="w-12 h-12 text-neon-green" />,
              desc: "Trillion tokens, because of course."
            },
            {
              title: "TAXES",
              value: "0/0",
              icon: <Wallet className="w-12 h-12 text-neon-green" />,
              desc: "No buy tax. No sell tax. Pure freedom."
            },
            {
              title: "LIQUIDITY",
              value: "BURNED",
              icon: <Lock className="w-12 h-12 text-neon-green" />,
              desc: "LP tokens burnt to a crisp. Safu."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black border-4 border-white p-8 rounded-2xl shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] transition-all group"
            >
              <div className="mb-6 bg-white/10 w-20 h-20 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-neon-green font-mono text-sm mb-2 font-bold">{item.title}</h3>
              <p className="text-4xl font-display text-white mb-4">{item.value}</p>
              <p className="text-gray-300 text-sm font-mono">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
