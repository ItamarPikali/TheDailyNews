import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './components/home';
import Contact from './components/contact';
import Header from './components/header';
import PostComponent from './components/posts';
import Albums from './components/home/albums';
import MainLayout from './layouts/mainLayout';
import SingleAlbumComponent from './components/albums';

const Router = () => {
  return(
    <BrowserRouter>
      <Header/>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="albums" element={<Albums/>}/>
          <Route path='article/:id' element={<PostComponent/>}/>
          <Route path='album/:id' element={<SingleAlbumComponent/>}/>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default Router;