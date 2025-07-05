import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100">
      <header className="bg-red-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Mi Sitio Web</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              Acerca de
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-red-600 text-white text-center py-4">
        <p>Derechos Reservados © 2025</p>
      </footer>
    </div>
  );
};

export default Layout;
