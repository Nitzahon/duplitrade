import './App.css';

import GraphFrame from './components/GraphFrame/GraphFrame';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import { isMobile } from 'react-device-detect';

import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useRef } from 'react';
function App() {
  const isMobileScreen = useSelector((state) => state.broker.isMobile)
  const dispatch = useDispatch();
  const tO = useRef(false);
  const handleResize =  useCallback(
    () => {
      let screenWidth = window.innerWidth;
      if (!isMobile) {
        if (!isMobileScreen && screenWidth < 721) {
          dispatch({ type: 'broker/mobileUpdate', payload: true })
        } else if (isMobileScreen && screenWidth >= 721) { 
          dispatch({ type: 'broker/mobileUpdate', payload: false })
        }
      }
    }
    ,
    [ isMobileScreen, dispatch ],
  )
  //prevent resize from firing more than 10 times a second
  useEffect(() => {
    let resEvent = () => {
      if(tO.current !== false){
        clearTimeout(tO.current);
      }
      tO.current = setTimeout(handleResize, 25)
    } 
    window.addEventListener("resize", resEvent, false);
    return () => {
      window.removeEventListener("resize",resEvent,false)
    }
  }, [handleResize]);
  
  return (
    <div className="App">
      <div className='container'>
        <Header />
        <SideBar />
        <GraphFrame />
      </div>
    </div>
  );
}

export default App;
