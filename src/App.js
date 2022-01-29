import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotfoundPage from './components/NotfoundPage/NotfoundPage.jsx';

export default function App() {
  const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
  const Home = lazy(() => import('./routes/Home/Home.jsx'));
  const MoviesPage = lazy(() => import('./routes/MoviesPage/MoviesPage.jsx'));
  // const MovieDetailsPage = lazy(() => import("./routes/MovieDetailsPage/MovieDetailsPage.jsx"));
  //const Cast = lazy(() => import("./components/Cast/Cast.jsx"));
  //const Rewiews = lazy(() => import("./components/Reviews/Reviews.jsx"));

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesPage />} />

          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
