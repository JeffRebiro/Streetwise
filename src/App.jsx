import { useState } from 'react'
import {Route, Routes, BrowserRouter} from "react-router-dom"
import './App.css'
import Home from './components/Home';
import Agriculture from './components/Agriculture';
import Business from './components/Business';
import Cars from './components/Cars';
import Fashion from './components/Fashion';
import Sports from './components/Sports';
import Vacations from './components/Vacations';
import Post_detail from './components/Post_detail';
import UpdatePost from './components/UpdatePost';
import AddPost from './components/AddPost';




function App() {
  

  return (
    <>
    <BrowserRouter>
    <div>
    <link rel="icon" href="/assets/img/favicon.png"/>
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/assets/css/animate.css"/>
    <link rel="stylesheet" href="/assets/css/owl.carousel.min.css"/>
    <link rel="stylesheet" href="/assets/css/themify-icons.css"/>
    <link rel="stylesheet" href="/assets/css/liner_icon.css"/>
    <link rel="stylesheet" href="/assets/css/search.css"/>
    <link rel="stylesheet" href="/assets/css/style.css"/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Agriculture" element={<Agriculture/>}></Route>
      <Route path="/Business" element={<Business/>}></Route>
      <Route path="/Cars" element={<Cars/>}></Route>
      <Route path="/Fashion" element={<Fashion/>}></Route>
      <Route path="/Sports" element={<Sports/>}></Route>
      <Route path="/Vacations" element={<Vacations/>}></Route>
      <Route path="/Post_detail/:id" element={<Post_detail/>}></Route>
      <Route path="/UpdatePost/:id" element={<UpdatePost/>}></Route>
      <Route path="/AddPost" element={<AddPost/>}></Route>

    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App;
