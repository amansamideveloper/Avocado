import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import { data } from '../data'
import styles from '../styles/Home.module.css'

export default function Home({ services }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Petfinder next js project</title>
        <meta name="description" content="Generated by next js and developed by Amanuel" />

      </Head>

      <Intro />
      <Services services={services} />
      <Testimonials />

    </div>
  )
}
export const getStaticProps = () => {
  const services = data;
  return {
    props: {
      services
    }
  }
}