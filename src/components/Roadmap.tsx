import { motion } from 'motion/react';

export default function Roadmap() {
  const phases = [
    {
      id: "01",
      title: "FOUNDATION",
      items: ["Build Community", "Social Campaign", "Strategic Partnerships"]
    },
    {
      id: "02",
      title: "EXPANSION",
      items: ["Engage KOLs", "Viral Marketing", "Community Governance"]
    },
    {
      id: "03",
      title: "GROWTH",
      items: ["Meme Contests", "CEX Listings", "Future Developments"]
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-display text-white text-center mb-20">
          DAT<span className="text-neon-green">MAP</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full hover:border-neon-green transition-colors">
                <div className="text-6xl font-display text-white/5 absolute top-4 right-4">
                  {phase.id}
                </div>
                <h3 className="text-2xl font-display text-neon-green mb-6">
                  PHASE {phase.id}: <br />
                  <span className="text-white">{phase.title}</span>
                </h3>
                <ul className="space-y-4">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300 font-mono">
                      <span className="w-2 h-2 bg-neon-green rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
