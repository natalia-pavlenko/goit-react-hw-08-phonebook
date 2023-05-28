import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Header } from './AppBar.styled';


export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  // console.log(isLoggedIn);
  return (
    <Header>
      <Navigation />
      <AuthNav/>
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </Header>
  );
};
