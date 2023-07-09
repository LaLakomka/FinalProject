import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Router } from "./router/router";
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';
import { setScreenWidth } from '../src/store/slices/app';
import { getCompanyInfo } from '../src/store/slices/profile';



function App() {

  const companyQuantityInfo = useSelector(state => state.profile.companyInfo);
  const dispatch = useDispatch()
  const handleResize = () => {
    dispatch(setScreenWidth(window.innerWidth))
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
  })
  useEffect(()=>{
    const accessToken = localStorage.getItem('accessToken');
    if(accessToken && !companyQuantityInfo){
      dispatch(getCompanyInfo())
    }
  },[dispatch, companyQuantityInfo])
 
  return (
    <div class="App">
          <Header />
          <Router />
          <Footer />
    </div>
  );
}

export default App;
