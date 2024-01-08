import Image from 'next/image'
import styles from './page.module.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

export default function Home() {
  return (
     <PrimeReactProvider>
        <main className={styles.main}>
     
     
    </main>
    </PrimeReactProvider>
    
  )
}
