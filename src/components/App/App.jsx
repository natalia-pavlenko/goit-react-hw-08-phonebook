import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from 'components/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';



const ContactsPage = lazy(() => import('../../page/Contacts'));
const HomePage = lazy(()=> import('../../page/HomePage'));
const LoginPage = lazy(()=> import('../../page/Login'));
const RegisterPage = lazy(()=> import('../../page/Register'));  

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
dispatch(refreshUser())
  },[dispatch])
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path='contacts' element ={<PrivateRoute component = {<ContactsPage/>} redirectTo='/login'/>}/>
          <Route path='login' element={<RestrictedRoute component = {<LoginPage/>} redirectTo='/contacts'/>}/>
          <Route path='register' element={<RestrictedRoute component = {<RegisterPage/>} redirectTo='/contacts'/>}/> 
        </Route>
      </Routes>
    </>
  );
};
export default App;
