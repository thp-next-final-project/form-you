import { useSelector } from 'react-redux';
import Header from '../../components/header/index';
import Login from '../Login';
import Register from '../Register/index';

const Home = () => {
  const user:any = useSelector((state) => state);

  return (
    <>
      < Header />
      < Login />
      < Register />
      { user.isLogged &&
        <p>super je suis log !</p>
      }
    </>
  )
}

export default Home;