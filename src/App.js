import './styles/App.css';
import './styles/AppBarMUI.css';
import './styles/BottomAppBarMUI.css'
import AppBarMUI from './components/AppBarMUI';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Congrats } from './components/congratsPurchase';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Home from './components/home';
import BottomAppBarMUI from './components/BottomAppBarMUI';
import AboutUs from './components/about_us';
import Reservations from './components/reservations';
import DoctorCardExtended from './components/doctorCardExtended';
import SignInForm from './components/signIn';
import SignUpForm from './components/signUp';
import ForgotPass from './components/forgotPass';
import Insurances from './components/Insurances';
import  Profile  from "./components/profileUser";
import Snack from './components/snackbar';
import userActions from './redux/actions/usersActions';
import PlansDoctor from './components/plansDoctor';
import AssociatedPlans from './components/associatedPlans'

export const urlBackend = "http://localhost:5000"


function App() {
  const dispatch = useDispatch()
  const showNav = useSelector(store => store.storeUser.appReducer.showNav)
  const user = useSelector(store => store.storeUser.userReducer.user)
  const userToken = localStorage.getItem("tokenSession")
  
  useEffect(()=>{
    if(userToken!==null){
      // console.log("user en app: ",user)
      dispatch(userActions.VerifyTokenSession(userToken))
    }
// eslint-disable-next-line 
  },[])

  return (
    <div className="App">

      <Snack />
      <div className='nav_menuOpen' onMouseOver={() => dispatch({ type: "showNav", payload: true })}></div>
      
      <CSSTransition
        in={showNav}
        timeout={500} // Duración de la animación en milisegundos
        classNames="fade" // Nombre de la clase CSS para la transición
        unmountOnExit
      >
        <AppBarMUI />
      </CSSTransition>

      <BrowserRouter>
        <AppBarMUI />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/Insurances' element={<Insurances />} />
          <Route path='/about_us' element={<AboutUs />} />
          <Route path='/reservations' element={<Reservations />} />
          {!user && <Route path='/signIn' element={<SignInForm />} />}
          {!user && <Route path='/signUp' element={<SignUpForm />} />}
          <Route path='/forgotPass' element={<ForgotPass />} />
          <Route path='/doctorExtend/:id' element={<DoctorCardExtended />} />
          <Route path='/profile' element ={<Profile />}/>
          <Route path='/congratsPurchase/:idPlan' element ={<Congrats />} />
          <Route path="/plansDoctor/:string" element={<PlansDoctor />} />
          <Route path="/associatedPlans/" element={<AssociatedPlans />} />
        </Routes>
        <BottomAppBarMUI />
      </BrowserRouter>
    </div>
  );
}

export default App;
