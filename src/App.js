import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFound from './NotFound';
import NavBar from './components/NavBar';
import NewsSection from './components/NewsSection';
import LoadingBar from 'react-top-loading-bar'
import Search from './components/Search';
import { UserContext } from './components/ContextCreator';

export default function App() {

  const [country, setCountry] = useState('country=in');

  const [state, setState] = useState({
    progress: 10
  });

  const api_key = process.env.REACT_APP_NEWS_API_KEY;

  const setProgress = (progress) => {
    setState({ progress: progress });
  }

  return (
    <UserContext.Provider value={setCountry}>

        <BrowserRouter>
          <NavBar />
          <LoadingBar
            height={2}
            color='#f11946'
            progress={state.progress}
          />
          <Routes>
            <Route exact path="/" element={<NewsSection setProgress={setProgress} api_key={api_key} key='general' category='general' pageSize={10} country={country} />} />
            <Route exact path="/sports" element={<NewsSection setProgress={setProgress} api_key={api_key} key='sports' category='sports' pageSize={10} country={country} />} />
            <Route exact path="/health" element={<NewsSection setProgress={setProgress} api_key={api_key} key='health' category='health' pageSize={10} country={country} />} />
            <Route exact path="/science" element={<NewsSection setProgress={setProgress} api_key={api_key} key='science' category='science' pageSize={10} country={country} />} />
            <Route exact path="/business" element={<NewsSection setProgress={setProgress} api_key={api_key} key='business' category='business' pageSize={10} country={country} />} />
            <Route exact path="/technology" element={<NewsSection setProgress={setProgress} api_key={api_key} key='technology' category='technology' pageSize={10} country={country} />} />
            <Route exact path="/entertainment" element={<NewsSection setProgress={setProgress} api_key={api_key} key='entertainment' category='entertainment' pageSize={10} country={country} />} />
            <Route exact path="/search" element={<Search setProgress={setProgress} api_key={api_key} />} />
            <Route exact path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

    </UserContext.Provider>
  );
}