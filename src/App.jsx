import Tarjeta from './tarjeta'
import './App.css'

function App() {
  return (
    <main>
      <h1>Tarjetas de presentación</h1>

      <section className="tarjetas">
        <Tarjeta
          nombre="Anthony Hopkins"
          profesion="Desarrollador Web"
          imagen="/imagenes/anthony.webp"
          descripcion="Desarrollo sitios web modernos y funcionales."
        />

        <Tarjeta
          nombre="Johnny Depp"
          profesion="Diseñador Gráfico"
          imagen="/imagenes/johnny.webp"
          descripcion="Creo experiencias visuales y creativas."
        />

        <Tarjeta
          nombre="Will Smith"
          profesion="Fotógrafo"
          imagen="/imagenes/will.webp"
          descripcion="Capturo momentos y cuento historias."
        />
      </section>
    </main>
  )
}

export default App