import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-purple-300 transition">
            Incredibox Sprunki
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-white hover:text-purple-300 transition">
              About
            </Link>
            <Link href="#features" className="text-white hover:text-purple-300 transition">
              Features
            </Link>
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
