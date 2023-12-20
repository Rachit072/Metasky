import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loginUser } from '../redux/actions';
import { RootState } from '../redux/store';
import Layout from '../components/Layout';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleLogin = () => {
    dispatch(loginUser());
  };

  return (
    <Layout>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </Layout>
  );
};

export default Login;
