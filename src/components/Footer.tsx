import { Twitter, Send, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="social" className="bg-white py-16 border-t border-black/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mb-6 border-2 border-black overflow-hidden">
            <img src="https://i.ibb.co/SwcBcQ8d/PNG-01.png" alt="Dat Boi Logo" className="w-full h-full object-cover" />
          </div>
          
          <h2 className="text-3xl font-display text-black mb-8">
            JOIN THE <span className="text-neon-green">MOVEMENT</span>
          </h2>

          <div className="flex gap-6 mb-12">
            <a href="https://x.com/Datboicoin_erc" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-neon-green hover:text-black transition-all border border-black/10">
              <Twitter size={24} className="text-black" />
            </a>
            <a href="https://t.me/Datboicoin_eth" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-neon-green hover:text-black transition-all border border-black/10">
              <Send size={24} className="text-black" />
            </a>
            <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-neon-green hover:text-black transition-all border border-black/10">
              <MessageCircle size={24} className="text-black" />
            </a>
          </div>

          <p className="text-gray-600 font-mono text-sm font-bold">
            Copyright $DATBOI © 2026. All rights reserved.
          </p>
          <p className="text-gray-500 font-mono text-xs mt-2 max-w-md">
            $DATBOI is a memecoin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
