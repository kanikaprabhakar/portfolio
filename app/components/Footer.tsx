export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kanika Prabhakar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/kanikaprabhakar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/kanikaprabhakar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              LinkedIn
            </a>
            <a href="mailto:kanikaprabhakar2005@gmail.com" className="text-gray-400 hover:text-white transition">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
