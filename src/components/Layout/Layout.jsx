import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import Navigation from 'components/Navigation/Navigation';

const Layout = () => {
  return (
    <section className="app-container">
      <Navigation />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </section>
  );
};

export default Layout;
