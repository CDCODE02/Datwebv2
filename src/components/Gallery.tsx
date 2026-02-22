import { motion } from 'motion/react';

const images = [
  "https://i.ibb.co/hJS1vQ61/Whats-App-Image-2026-02-22-at-1-13-34-PM.jpg",
  "https://i.ibb.co/yFf0cbwM/Whats-App-Image-2026-02-22-at-1-13-34-PM-1.jpg",
  "https://i.ibb.co/5WsjN7hy/Whats-App-Image-2026-02-22-at-1-13-35-PM.jpg",
  "https://i.ibb.co/20JXJF2S/Whats-App-Image-2026-02-22-at-1-13-36-PM.jpg",
  "https://i.ibb.co/v6NyVn8S/Whats-App-Image-2026-02-22-at-1-13-35-PM-2.jpg"
];

export default function Gallery() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display mb-4">
            MEME <span className="text-neon-green">GALLERY</span>
          </h2>
          <div className="h-1 w-32 bg-neon-green mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl border-4 border-white/10 hover:border-neon-green transition-colors ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
              }`}
            >
              <div className="w-full h-full relative aspect-square">
                <img
                  src={src}
                  alt={`Dat Boi Meme ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-4xl animate-bounce">🐸</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
