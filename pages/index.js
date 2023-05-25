import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout/Layout'

import Landingpage from '@/components/Landingpage'
import Contactus from '@/pages/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   <Layout>
  <Landingpage/>

  </Layout>
  
    </>
 
  )
}
