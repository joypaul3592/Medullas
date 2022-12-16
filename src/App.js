import './App.css';
import Navbar from './Components/Sheard/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Sheard/Footer/Footer';
import SignUp from './Components/Sheard/UserLogin/SignUp/SignUp';
import Login from './Components/Sheard/UserLogin/Login/Login';
import Contact from './Components/Contact/Contact';
import Blog from './Page/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Students from './Components/Dashboard/Students/Students';
import AddQuiz from './Components/Dashboard/AddQuiz/AddQuiz';
import AddBlog from './Components/Dashboard/AddBlog/AddBlog';
import "@fontsource/noto-serif-bengali";
import Home from './Page/Home/Home';
import AdmissoinFrom from './Page/AdmissoinFrom/AdmissoinFrom';
import OnlineSupport from './Page/OnlineSupport/OnlineSupport';
import Sakha from './Page/Sakha/Sakha';
import BookShop from './Page/BookShop/BookShop';
import Result from './Page/Result/Result';
import Course from './Page/Course/Course';
import BscCourse from './Page/Course/BscCourse/BscCourse';
import DiplomaCourseC from './Components/CourseCom/DiplomaCourseC/DiplomaCourseC';
import MidWifCourse from './Page/Course/MidWifCourse/MidWifCourse';
import NiyogCourse from './Page/Course/NiyogCourse/NiyogCourse';
import ExamCourse from './Page/Course/ExamCourse/ExamCourse';
import BookFrom from './Components/BookFrom/BookFrom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TeacherTeam from './Page/TeacherTeam/TeacherTeam';


function App() {
  return (
    <div style={{ fontFamily: "Noto Serif Bengali" }} className='app '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/support' element={<OnlineSupport />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/bookfrom' element={<BookFrom />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/adfrom' element={<AdmissoinFrom />}></Route>
        <Route path='/sakha' element={<Sakha />}></Route>
        <Route path='/bookshop' element={<BookShop />}></Route>
        <Route path='/result' element={<Result />}></Route>
        <Route path='/course' element={<Course />}></Route>
        <Route path='/bsccourse' element={<BscCourse />}></Route>
        <Route path='/diplomacourse' element={<DiplomaCourseC />}></Route>
        <Route path='/midwifcourse' element={<MidWifCourse />}></Route>
        <Route path='/niyogcourse' element={<NiyogCourse />}></Route>
        <Route path='/examcourse' element={<ExamCourse />}></Route>
        <Route path='/teacherteam' element={<TeacherTeam />}></Route>



        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route path='students' element={<Students></Students>}></Route>
          <Route path='addquiz' element={<AddQuiz></AddQuiz>}></Route>
          <Route path='addblog' element={<AddBlog></AddBlog>}></Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
