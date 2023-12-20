import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loginUser, fetchUsers } from '../redux/actions';
import { RootState } from '../redux/store';
import Layout from '../components/Layout';
import UsersTable from '../components/UsersTable';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state: RootState) => state.isAuthenticated);

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  const handleLogin = () => {
    dispatch(loginUser());
  };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return (
    <Layout>
      <h1>Home</h1>
      {isAuthenticated ? (
        <UsersTable />
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </Layout>
  );
};

export default Home;
