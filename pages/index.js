import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit natus
        debitis, amet nisi cupiditate recusandae doloremque sint expedita
        molestias neque dicta eum adipisci consequuntur dolor nobis fugiat
        consequatur sapiente facere!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit natus
        debitis, amet nisi cupiditate recusandae doloremque sint expedita
        molestias neque dicta eum adipisci consequuntur dolor nobis fugiat
        consequatur sapiente facere!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit natus
        debitis, amet nisi cupiditate recusandae doloremque sint expedita
        molestias neque dicta eum adipisci consequuntur dolor nobis fugiat
        consequatur sapiente facere!
      </p>
      <Footer />
    </div>
  )
}
