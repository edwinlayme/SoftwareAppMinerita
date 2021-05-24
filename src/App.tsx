import React,{useEffect} from 'react';
import TopMenu from './components/topMenu/TopMenu';
import useFetch from './hooks/useFetch';
import { urlApiUser } from './utils/constant';
import Users from './components/users/Users';

function App() {
     const users = useFetch(urlApiUser,null);
  console.log(users);
  return (
    <div>
     <TopMenu />
     <Users users={users}/>
   </div>
  );
}

export default App;
