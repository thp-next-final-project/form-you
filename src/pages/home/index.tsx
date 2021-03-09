import { useSelector } from 'react-redux';

const Home = () => {
  const user:any = useSelector((state) => state);

  return (
    <>
      { user.isLogged &&
        <p>super je suis log !</p>
      }
    </>
  )
}

export default Home;