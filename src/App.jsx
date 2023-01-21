import { useState, useEffect, useMemo, useCallback } from 'react';  // core of react
import TVShowDetail from './components/TVShowDetail/TVShowDetail'   // core of react

import { TVShowAPI } from './api/tv-show';
import { BACKDROP_BASE_URL } from './config';
import logoImg from './assets/images/logo.png';

// import './App.css' // Cambiar nombre de App.css a ./style.module.css
import s from "./style.module.css";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList && popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0])
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, [])

  console.log(currentTVShow)

  return (
    <div 
      className={s.main_container}
    >
      <div className={s.recomended_shows}>Recomended tv shows</div>
    </div>
  )
}

export default App;
