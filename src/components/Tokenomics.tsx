import { motion } from 'motion/react';
import { PieChart, Wallet, Lock } from 'lucide-react';

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 bg-dark-bg relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display text-white mb-4">
            TOKENOMICS
          </h2>
          <p className="font-mono text-gray-400">The math behind the meme</p>
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
              className="bg-card-bg border border-white/5 p-8 rounded-2xl hover:border-neon-green/50 transition-colors group"
            >
              <div className="mb-6 bg-dark-bg w-20 h-20 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-gray-500 font-mono text-sm mb-2">{item.title}</h3>
              <p className="text-4xl font-display text-white mb-4">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
