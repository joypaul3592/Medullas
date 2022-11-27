import './App.css';
import Navbar from './Components/Sheard/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Footer from './Components/Sheard/Footer/Footer';
import SignUp from './Components/Sheard/UserLogin/SignUp/SignUp';
import Login from './Components/Sheard/UserLogin/Login/Login';
import Support from './Components/Support/Support';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Students from './Components/Dashboard/Students/Students';
import AddQuiz from './Components/Dashboard/AddQuiz/AddQuiz';
import AddBlog from './Components/Dashboard/AddBlog/AddBlog';
import QuizRoom from './Components/QuizRoom/QuizRoom';



function App() {
  return (
    <div className='app '>
      <Navbar />



      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/support' element={<Support />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/quizroom' element={<QuizRoom />}></Route>



        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route path='students' element={<Students></Students>}></Route>
          <Route path='addquiz' element={<AddQuiz></AddQuiz>}></Route>
          <Route path='addblog' element={<AddBlog></AddBlog>}></Route>
        </Route>





      </Routes>
      <Footer />
    </div>
  );
}

export default App;
