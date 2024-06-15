import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import HomePage from './pages/Home';
import Geonseol from './pages/Geonseol';
import Hansik from './pages/Hansik';
import IIban from './pages/IIban';
import Jegwa from './pages/Jegwa';
import JeongiSaneop from './pages/JeongiSaneop';
import Jeppang from './pages/Jeppang';
import Jige from './pages/Jige';
import Makeup from './pages/Makeup';
import Nail from './pages/Nail';
import Pibu from './pages/Pibu';
import Sobang from './pages/Sobang';
import JeongiGisa from './pages/JeongiGisa';
import JeongboGineung from './pages/JeongboGineung';
import JeongboGisa from './pages/JeongboGisa';

import BookDetails from './components/section/BookDetails';
import Main from './components/section/Main';
import Header from './components/section/Header';
import Footer from './components/section/Footer';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Main />
                <Routes>
                    {/* <Route path="/" element={<HomePage />} /> */}
                    <Route path="/" element={<Jige />} />
                    <Route path="/geonseol" element={<Geonseol />} />
                    <Route path="/hansik" element={<Hansik />} />
                    <Route path="/iiban" element={<IIban />} />
                    <Route path="/jegwa" element={<Jegwa />} />
                    <Route path="/jeongboGineung" element={<JeongboGineung />} />
                    <Route path="/jeongboGisa" element={<JeongboGisa />} />
                    <Route path="/JeongiGisa" element={<JeongiGisa />} />
                    <Route path="/jeongiSaneop" element={<JeongiSaneop />} />
                    <Route path="/jeppang" element={<Jeppang />} />
                    <Route path="/jige" element={<Jige />} />
                    <Route path="/makeup" element={<Makeup />} />
                    <Route path="/nail" element={<Nail />} />
                    <Route path="/pibu" element={<Pibu />} />
                    <Route path="/sobang" element={<Sobang />} />
                    <Route path="/:source/:filePrefix" element={<BookDetails />} /> {/* 동적 경로 설정 */}
                    <Route path="/:source/:filePrefix" element={<BookDetails />} /> {/* 동적 경로 설정 */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
