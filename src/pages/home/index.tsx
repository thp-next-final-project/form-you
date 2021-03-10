import { useSelector } from 'react-redux';

const Home = () => {
  const user:any = useSelector((state) => state);

  return (
    <>
      { (user.isLogged &&
        <p>super je suis log !</p>) ||
        <p>s'agirait d'grandir et dce connecter</p> 
      }
    </>
  )
}

export default Home;