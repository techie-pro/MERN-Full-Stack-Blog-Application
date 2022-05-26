import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import { AboutPage } from './pages/AboutPage';
import { ArticleListPage } from './pages/ArticleListPage';
import { ArticlePage } from './pages/ArticlePage';
import { Navbar } from './Navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div id='page-body'>
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/article-list' exact element={<ArticleListPage />} />
          <Route path='/article/:name' exact element={<ArticlePage />} />
          <Route path='/about' exact element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
