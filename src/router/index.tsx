import Calendar from 'src/pages/Calendar';
import Chat from 'src/pages/Chat';
import Inventory from 'src/pages/Inventory';
import Page404 from 'src/pages/NotFound';
import Dashboard from 'src/pages/Dashboard';
import AuthLayout from 'src/layout/AuthLayout';
import AuthSignIn from 'src/pages/AuthSignIn';
import AuthSignUp from 'src/pages/AuthSignUp';
import MainLayout from 'src/layout/MainLayout';

export const router = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    ),
  },
  {
    path: '/calendar',
    element: (
      <MainLayout>
        <Calendar />
      </MainLayout>
    ),
  },
  {
    path: '/inventory',
    element: (
      <MainLayout>
        <Inventory />
      </MainLayout>
    ),
  },
  {
    path: '/chat',
    element: (
      <MainLayout>
        <Chat />
      </MainLayout>
    ),
  },
  {
    path: '/signin',
    element: (
      <AuthLayout title="Sign In to Start Surfing">
        <AuthSignIn />
      </AuthLayout>
    ),
  },
  {
    path: '/signup',
    element: (
      <AuthLayout title="Sign In to Start Surfing">
        <AuthSignUp />
      </AuthLayout>
    ),
  },
  {
    path: '*',
    element: (
      <MainLayout>
        <Page404 />
      </MainLayout>
    ),
  },
];
