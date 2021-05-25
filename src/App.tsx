import React,{useEffect} from 'react';
import TopMenu from './components/topMenu/TopMenu';
import useFetch from './hooks/useFetch';

import SideBar from './components/menu/SideBar';
import AppRouter from './routers/AppRouter';

export default function App() {
return (
    <>
   <AppRouter/>
   </>
  );
}