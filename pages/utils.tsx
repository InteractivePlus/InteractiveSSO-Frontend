


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
        <div className="flex flex-col items-center justify-center md:px-20 px-8 flex-auto md:w-[550px] w-full" >
            {props.children}
        </div>
    </div>
)


export const SSOBody = (props) => (
    <div className="border border-slate-100	 shadow-md rounded-md flex flex-col mx-auto w-full overflow-hidden bg-white" >

        {props.children}

    </div>
)


export const Form = (props) => (
    <div className="flex justify-center mt-8">
        <div className="rounded-md shadow-sm -space-y-px w-64 justify-center">
            <div>
                <label htmlFor="email-address" className="sr-only">
                    {props.username}
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
                    placeholder={props.username}
                />
            </div>
            <div>
                <label htmlFor="password" className="sr-only">
                    {props.password}
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
                    placeholder={props.password}
                />
            </div>
        </div>
    </div>
)

export const FormButton = (props) => (
    <div>
        <button
            type="submit"
            className="mt-10 relative w-full flex justify-center py-2 px-4 border border-transparent text font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            {props.text}
        </button>
    </div>
)

export const FormTitle = (props) => (
    <div className="flex pt-5 text-2xl text-blue-500 tracking-wider">
        {props.title}
    </div>
)

export const XSYDFormLogo = (props) => (
    <div className="flex flex-row items-center justify-center ">
        <img
            src="https://www.interactiveplus.org/static/favicon.png"
            alt=""
            className="h-[48px] w-[48px]"
        />
        <p className="text-[2.25rem] tracking-wider pl-1">随意动</p>
    </div>
)

export const FormButtomLink = (props) => (
    <div className="flex justify-between flex-row w-full px-5 mb-5 mt-8 text-blue-500">
        <div>
            <a href={props.leftlink} className="hover:text-blue-600 hover:underline"> {props.left}</a>

        </div>
        <div>
            <a href={props.rightlink} className="hover:text-blue-600 hover:underline"> {props.right} </a>

        </div>
    </div>
)

export const FormContainer = (props) => (
    <div className="flex flex-col mt-10 items-center justify-center">
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

