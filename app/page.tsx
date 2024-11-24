import Navbar from './components/Navbar';
import GameFrame from './components/GameFrame';
import ShareButtons from './components/ShareButtons';
export const metadata = {
  title: 'Incredibox Sprunki - Creative Music Game Experience',
  description: 'Experience Incredibox Sprunki, a unique online music creation game. Create your own music by dragging and dropping musical elements, enjoy the music making.',
  keywords: 'Incredibox Sprunki, music game, music creation, online game, creative music',
};

export default function Home() {
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
              <GameFrame />
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
