import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-toastify';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ width: 1200, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="bottom-right" reversOrder={false} /> */}
    </div>
  );
};
