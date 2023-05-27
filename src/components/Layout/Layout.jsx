import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
