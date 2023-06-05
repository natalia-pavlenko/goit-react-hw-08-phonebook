import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components/Layout';

const ContactsPage = lazy(() => import('../../page/Contacts'));
const HomePage = lazy(()=> import('../../page/HomePage'));
const LoginPage = lazy(()=> import('../../page/Login'));
const RegisterPage = lazy(()=> import('../../page/Register'));  

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path='contacts' element ={<ContactsPage/>}/>
          <Route path='login' element={<LoginPage/>} />
          <Route path='register' element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </>
  );
};
export default App;
