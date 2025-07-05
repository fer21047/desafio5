import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Barra de navegación */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">Fernando Moncada Juárez</div>
        <div className="space-x-6">
          <button className="hover:underline">Inicio</button>
          <button className="hover:underline">Información</button>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-center mt-20 px-4">
        <h1 className="text-3xl font-semibold mb-8">
          Bienvenidos a mi página de inicio
        </h1>
        <div className="flex space-x-16">
          <img src={viteLogo} alt="Vite logo" className="h-24 w-24" />
          <img src={reactLogo} alt="React logo" className="h-24 w-24" />
        </div>
      </main>
    </div>
  )
}

export default App
