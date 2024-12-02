import Navbar from './components/Navbar';
import GameFrame from './components/GameFrame';
import ShareButtons from './components/ShareButtons';

export const metadata = {
  title: 'Incredibox Sprunki - Creative Music Game Experience',
  description: 'Experience Incredibox Sprunki, a unique online music creation game. Create your own music by dragging and dropping musical elements, enjoy the music making.',
  keywords: 'Incredibox Sprunki, music game, music creation, online game, creative music',
};

interface PageProps {
  searchParams?: Promise<{
    id?: string;
  }>;
}

export default async function Home({ searchParams }: PageProps) {
  // Use the provided ID or fallback to default
  const { id: gameId = "1099928310" } = await searchParams || {};
  // const gameId = searchParams?.id || "1099928310";

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
                href="/"
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
      {/* Highlights Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
              Featured Player Creations
            </h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              Explore infinite creativity and experience amazing works from our players. Every note tells a unique story, every melody begins a new adventure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="aspect-video relative">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/Fzb-DEwithk" title="Incredibox Sprunki Night Time VS All Can&#39;t Sleep | Normal VS Horror" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="aspect-video relative">
              <iframe width="1280" height="720" src="https://www.youtube.com/embed/dW9szUGEdGA" title="Incredibox Sprunki - Fun Time! (Official Music Video)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="aspect-video relative">
              <iframe width="1280" height="720" src="https://www.youtube.com/embed/4SvdT8KJaxI" title="Incredibox Sprunki - Fun Bot Return to PHASE 1 | Incredibox Sprunki Animation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How to Play Section */}
      <section className="py-12 px-4 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">How to Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4 text-center">👆</div>
              <h3 className="text-xl font-bold mb-3 text-white text-center">1. Select Characters</h3>
              <p className="text-purple-100">Choose from different musical characters, each with their unique sound and style. Drag them onto the stage to start creating your beats.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4 text-center">🎵</div>
              <h3 className="text-xl font-bold mb-3 text-white text-center">2. Mix and Match</h3>
              <p className="text-purple-100">Combine different characters to create unique rhythms and melodies. Experiment with different combinations to find your perfect sound.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4 text-center">💫</div>
              <h3 className="text-xl font-bold mb-3 text-white text-center">3. Create Magic</h3>
              <p className="text-purple-100">Unlock special animations and bonus content by discovering the right combinations. Record and share your musical creations with friends!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">What is Incredibox Sprunki?</h3>
              <p className="text-purple-100">Incredibox Sprunki is an interactive music game where you can create your own beats and melodies by combining different musical characters. It's a fun and creative way to make music without any prior musical experience.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">Do I need musical experience to play?</h3>
              <p className="text-purple-100">Not at all! Incredibox Sprunki is designed to be intuitive and fun for everyone. Just drag and drop characters to create music - no musical knowledge required!</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">Can I save my creations?</h3>
              <p className="text-purple-100">Yes! You can record your musical creations and share them with others. Each creation gets a unique code that others can use to listen to your music.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">What's different about each version?</h3>
              <p className="text-purple-100">Each version of Sprunki (Adventure, Remix, Classic) offers different musical styles, characters, and special animations. Try them all to discover your favorite!</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">Is there a mobile version?</h3>
              <p className="text-purple-100">Currently, Incredibox Sprunki works best on desktop browsers. We recommend using a computer for the optimal music-making experience.</p>
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
