import Navbar from '@/components/elements/navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google';
import Footer from '@/components/elements/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Providers from './providers/provider';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Venstylez - Expert Tailoring Services',
  description: 'Welcome to Venstylez - Expert Tailoring Services',
  keywords: "tailor, tailoring, custom clothing, alterations, fashion",
  authors: [{ name: 'Venstylez' }],
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout(props : {
  children: React.ReactNode
  modal: React.ReactNode
}){
  console.log(props.modal)
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          {props.children}
          {props.modal}
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  )
}
