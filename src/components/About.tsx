import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-card-bg relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display text-white mb-4">
              THE <span className="text-neon-green">LEGEND</span> RETURNS
            </h2>
            <div className="h-1 w-32 bg-neon-green mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
               <div className="aspect-[4/5] bg-dark-bg rounded-2xl border border-white/10 p-8 flex items-center justify-center">
                  <span className="text-9xl">👋</span>
               </div>
               <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-neon-green rounded-2xl -z-10" />
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-mono leading-relaxed text-gray-300">
                <span className="text-neon-green font-bold">"here come dat boi! o shit waddup!"</span>
              </p>
              <p className="text-gray-400 leading-relaxed">
                If you know, you know. The internet never forgets legends, it just waits for them to return. 
                $DATBOI isn’t trying to reinvent the meme. It’s bringing it back where it belongs.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Same chaotic energy. Same unstoppable presence. This time, it rides the blockchain.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
