import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import News from './components/News';
export default function App(){
   const pageSize=15

   const apiKey=process.env.REACT_APP_NEWS_API;
   const [progress, setProgress] = useState(0)

  
    return (
      
      <div>
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        shadow={true}
       
      />
        <Routes>
          <Route exact path='/' element={<News progress={setProgress}  apiKey={apiKey} ps={pageSize} country="in" category="general"/>}></Route>
          <Route exact path='/home' element={<News progress={setProgress} key="home" apiKey={apiKey} ps={pageSize} country="in" category="general"/>}></Route>
          <Route exact path='/business' element={<News progress={setProgress} key="business" apiKey={apiKey} ps={pageSize} country="in" category="business"/>}></Route>
          <Route exact path='/general' element={<News progress={setProgress} key="general" apiKey={apiKey} ps={pageSize} country="in" category="general"/>}></Route>
          <Route exact path='/health' element={<News progress={setProgress} key="health" apiKey={apiKey} ps={pageSize} country="in" category="health"/>}></Route>
          <Route exact path='/science' element={<News progress={setProgress} key="science" apiKey={apiKey} ps={pageSize} country="in" category="science"/>}></Route>
          <Route exact path='/sports' element={<News progress={setProgress} key="sports" apiKey={apiKey} ps={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path='/technology' element={<News progress={setProgress} key="technology" apiKey={apiKey} ps={pageSize} country="in" category="technology"/>}></Route>
        </Routes>
        
      </Router>
      </div>
    )
  
}
