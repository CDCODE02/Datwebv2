import { Twitter, Send, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="social" className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center text-3xl mb-6">
            🐸
          </div>
          
          <h2 className="text-3xl font-display text-white mb-8">
            JOIN THE <span className="text-neon-green">MOVEMENT</span>
          </h2>

          <div className="flex gap-6 mb-12">
            <a href="https://x.com/Datboicoin_erc" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-neon-green hover:text-black transition-all">
              <Twitter size={24} />
            </a>
            <a href="https://t.me/Datboicoin_eth" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-neon-green hover:text-black transition-all">
              <Send size={24} />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-neon-green hover:text-black transition-all">
              <MessageCircle size={24} />
            </a>
          </div>

          <p className="text-gray-600 font-mono text-sm">
            Copyright $DATBOI © 2026. All rights reserved.
          </p>
          <p className="text-gray-700 font-mono text-xs mt-2 max-w-md">
            $DATBOI is a memecoin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
