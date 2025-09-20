# MovieVerse

A modern React application for browsing and managing your favorite movies using The Movie Database (TMDb) API. Built with **Tailwind CSS v4** for responsive and maintainable styling.

## ✨ Features

- 🎬 Browse popular mov from TMDb
- 🔍 Search for movies with real-time results
- ❤️ Add/remove movies to/from favorites
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern dark theme with gradient backgrounds
- ⚡ Built with React 19 and Vite
- 🎯 Tailwind CSS v4 for utility-first styling
- 🔄 Loading states and error handling

## 🚀 Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **API**: The Movie Database (TMDb) API
- **State Management**: React Context API

## 📋 Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MovieVerse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get a free API key from TMDb**
   - Visit [The Movie Database (TMDb)](https://www.themoviedb.org/settings/api)
   - Create an account and request an API key
   - The key will be available in your account settings

4. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Add your TMDb API key:
   ```env
   VITE_TMDB_API_KEY=your_actual_api_key_here
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_TMDB_API_KEY` | Your TMDb API key | Yes | - |
| `VITE_TMDB_BASE_URL` | TMDb API base URL | No | `https://api.themoviedb.org/3` |

## 🎨 Styling

This project uses **Tailwind CSS v4** with the new `@tailwindcss/vite` plugin for optimal performance and smaller bundle sizes. All styling has been converted from traditional CSS to Tailwind utility classes for better maintainability.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer component
│   └── MovieCard.jsx   # Movie card component
├── pages/              # Page components
│   ├── Home.jsx        # Home page with movie grid
│   └── Favorites.jsx   # Favorites page
├── contexts/           # React context providers
│   └── MovieContext.jsx # Movie state management
├── services/           # API services
│   └── api.js          # TMDb API integration
└── index.css           # Global Tailwind styles
```


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request


