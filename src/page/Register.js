import { useDispatch } from "react-redux";

export default function RegisterView() {
const dispatch = useDispatch ();
const [name, setName] = useState ('');
const [email, setEmail] = useState ('');
const [password, setPassword] = useState('');

}

const hendleSubmit = e => {
e.preventDefault();
dispatch(authOperations.register({name, email, password}));
setName('');
setEmail('');
setPassword();
}

return <div>
    <h1> страница регистрации</h1>
</div>