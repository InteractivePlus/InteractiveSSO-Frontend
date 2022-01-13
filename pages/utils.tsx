


import Head from 'next/head'

export const Header = () => (
    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>

)

export const SSOContainer = (props) => (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <Header />
        <div className="flex flex-col items-center justify-center px-20 flex-auto md:w-[550px] w-full" >
            {props.children}
        </div>
    </div>
)


export const SSOBody = (props) => (
    <div className="border border-slate-100	 shadow-md rounded-md flex flex-col mx-auto w-full overflow-hidden bg-white" >
        
        {props.children} 
             
    </div>
)

export const Footer = () => (
    <footer className="flex items-center justify-center w-full h-24 border-t">
    <a
      className="flex items-center justify-center"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
    </a>
  </footer>
)

