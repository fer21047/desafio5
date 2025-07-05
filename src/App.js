
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import './App.css';

// Puedes mover estas funciones a archivos independientes si crece tu proyecto.
function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bienvenidos a la Página de Inicio</h1>
      <p className="text-gray-700">Explora nuestra web para más información.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Acerca de Nosotros</h2>
      <p className="text-gray-700">Somos una empresa dedicada a ofrecer soluciones tecnológicas.</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2 className="text-xl font-bold text-red-600">404 - Página no encontrada</h2>
      <p>La ruta que buscas no existe. Regresa al <a href="/" className="text-blue-500 underline">inicio</a>.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta base que usa el Layout con sus hijos */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Ruta no encontrada */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
