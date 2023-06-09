import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
