import Navbar from './components/Navbar';
import GameFrame from './components/GameFrame';
import ShareButtons from './components/ShareButtons';

export const metadata = {
  title: 'Incredibox Sprunki - Creative Music Game Experience',
  description: 'Experience Incredibox Sprunki, a unique online music creation game. Create your own music by dragging and dropping musical elements, enjoy the music making.',
  keywords: 'Incredibox Sprunki, music game, music creation, online game, creative music',
};

interface PageProps {
  searchParams?: {
    id?: string;
  };
}

export default function Home({ searchParams }: PageProps) {
  // Use the provided ID or fallback to default
  const gameId = searchParams?.id || "1099928310";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900">
      <Navbar />
      
      {/* Game Section */}
      <section className="pt-12 md:pt-14 px-2 md:px-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-2 md:mb-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-10 mb-10 text-white animate-fade-in">
              Welcome to Incredibox Sprunki
            </h1>
          </div>
          {/** game container */}
          <div className="w-[90vw] sm:w-[95vw] md:w-[65vw]  mx-auto">
            {/** game frame */}
            <div className="relative">
              <GameFrame id={gameId} />
              {/** share */}
              <div className="mt-4 flex flex-col sm:flex-row justify-end items-center gap-1 sm:gap-3">
                <p className="text-base md:text-lg text-purple-200 whitespace-nowrap">
                  Create Your Musical World
                </p>
                <div className="flex-shrink-0">
                  <ShareButtons 
                    title="Check out my musical creation on Incredibox Sprunki! 🎵"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Games Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">More Sprunki Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gameId !== "765852361" && (
              <a 
                href="/?id=765852361"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-transform hover:scale-105"
              >
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-4">Sprunki Adventure</h3>
                  <div className="aspect-video bg-black/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">🎮</span>
                  </div>
                  <p className="mb-4">Embark on a musical journey with Sprunki in this exciting adventure game.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-75">ID: 765852361</span>
                    <span className="bg-purple-500 px-3 py-1 rounded-full text-sm">Play Now</span>
                  </div>
                </div>
              </a>
            )}

            {gameId !== "854427620" && (
              <a 
                href="/?id=854427620"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-transform hover:scale-105"
              >
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-4">Sprunki Remix</h3>
                  <div className="aspect-video bg-black/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">🎵</span>
                  </div>
                  <p className="mb-4">Mix and match different musical styles in this remix-focused version of Sprunki.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-75">ID: 854427620</span>
                    <span className="bg-purple-500 px-3 py-1 rounded-full text-sm">Play Now</span>
                  </div>
                </div>
              </a>
            )}

            {gameId !== "571862130" && (
              <a 
                href="/?id=571862130"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-transform hover:scale-105"
              >
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-4">Sprunki Classic</h3>
                  <div className="aspect-video bg-black/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">🎹</span>
                  </div>
                  <p className="mb-4">Experience the original Sprunki gameplay with classic sounds and features.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-75">ID: 571862130</span>
                    <span className="bg-purple-500 px-3 py-1 rounded-full text-sm">Play Now</span>
                  </div>
                </div>
              </a>
            )}

            {gameId !== "1099928310" && (
              <a 
                href="/?id=1099928310"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-transform hover:scale-105"
              >
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-4">Sprunki Main</h3>
                  <div className="aspect-video bg-black/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">🎼</span>
                  </div>
                  <p className="mb-4">Return to the main Sprunki game with all its original features.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-75">ID: 1099928310</span>
                    <span className="bg-purple-500 px-3 py-1 rounded-full text-sm">Play Now</span>
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <a
            href="#about"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">About the Game</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white">
              <h3 className="text-xl font-bold mb-4">Creative Music Making</h3>
              <p>Create unique musical combinations through simple drag-and-drop operations, unleash your musical creativity.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white">
              <h3 className="text-xl font-bold mb-4">Intuitive Interface</h3>
              <p>Clean and easy-to-use interface design makes music creation effortless.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white">
              <h3 className="text-xl font-bold mb-4">Share Your Work</h3>
              <p>Save and share your musical creations after completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white">
              <h3 className="text-xl font-bold mb-4">Diverse Musical Elements</h3>
              <p>Rich library of musical materials including various styles of sound effects and rhythms.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm text-white">
              <h3 className="text-xl font-bold mb-4">Real-time Music Mixing</h3>
              <p>Hear your creation effects instantly, adjust and optimize anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Incredibox Sprunki. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
