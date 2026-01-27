import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition">
            Kanika
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
