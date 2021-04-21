import { Header } from '../components/Header';
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return(
  <div>
    
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
