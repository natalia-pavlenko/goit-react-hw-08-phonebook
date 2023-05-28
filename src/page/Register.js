// import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
const RegisterPage = () => {
  return <RegisterForm/>
}

export default RegisterPage;

// export default function Register() {
//   return (
//     <div>
//       <Helmet>
//         <titel>Registration</titel>
//       </Helmet>
//       <RegisterForm />
//     </div>
//   );
// }

// import { useDispatch } from "react-redux";

// export default function RegisterView() {
// const dispatch = useDispatch ();
// const [name, setName] = useState ('');
// const [email, setEmail] = useState ('');
// const [password, setPassword] = useState('');

// }

// const hendleSubmit = e => {
// e.preventDefault();
// dispatch(authOperations.register({name, email, password}));
// setName('');
// setEmail('');
// setPassword();
// }

// return <div>
//     <h1> страница регистрации</h1>
// </div>
