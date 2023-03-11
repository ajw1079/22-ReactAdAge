// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/common/Header';
import Footer from './pages/common/Footer';
import Main from './pages/components/Main';
import Category from './pages/components/Category';
import Detail from './pages/components/Detail';
import NotFound from './pages/components/NotFound';

//ref 사용성 테스트
import TestRef from "./pages/components/TestRef";
import './asset/scss/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route exact path="/category/:index" element={<Category/>}></Route>
        {/* 추후에 useParams() 함수 메서드를 통해서 던질값에 대해서는 변수명을 일치시킬 것 */}
        <Route exact path="/detail/:index" element={<Detail/>}></Route>

        {/* ref 사용성 테스트 : 이미지 넣고 미리보여주고 일부 삭제 */}
        <Route exact path="/test" element={<TestRef/>}></Route>
        <Route exact path="/*" element={<NotFound/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
