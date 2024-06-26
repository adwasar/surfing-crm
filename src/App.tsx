import {useEffect, useState , FC } from 'react';
import { useDispatch } from 'react-redux';
import {  useLocation, useNavigate,useRoutes } from 'react-router-dom';
import cookies from 'js-cookie';

import './localization/i18n.ts';
import { router } from './router';
import { loginSuccess, logout } from './store/slice/authSlice';

interface AppProps {}

const App: FC<AppProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = cookies.get('token');
      const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

      if (token) {
        dispatch(loginSuccess(token));
        setIsLoading(false);
      } else {
        dispatch(logout());
        if (!isAuthPage) {
          navigate('/signin');
        }
        setIsLoading(false);
      }
    };
    checkAuth();
  }, [dispatch, navigate, location.pathname]);


  const routers = useRoutes(router);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <>{routers}</>;
};

export default App;
