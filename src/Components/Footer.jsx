import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300 py-8 text-center border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-8">
        <p className="mb-4 text-sm">© 2024 MovieList. All rights reserved.</p>
        <div className="flex justify-center gap-8 flex-wrap">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">GitHub</a>
          <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">TMDb</a>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">React</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
