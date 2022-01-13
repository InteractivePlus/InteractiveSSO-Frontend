import * as G from "./utils";

export default function Home() {
  return (
    <G.SSOContainer>
      <G.SSOBody>
        <div className="flex flex-col mt-10 items-center justify-center">
          <div className="flex flex-row items-center justify-center ">
            <img
              src="https://www.interactiveplus.org/static/favicon.png"
              alt=""
              className="h-[48px] w-[48px]"
            />
            <p className="text-[2.25rem] tracking-wider pl-1">随意动</p>
          </div>

          <div className="flex pt-5 text-2xl text-blue-500 tracking-wider">登录</div>
          <div className="flex justify-center mt-8">
            <div className="rounded-md shadow-sm -space-y-px w-64 justify-center">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-sky-600 focus:border-sky-600 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="mt-10 relative w-full flex justify-center py-2 px-4 border border-transparent text font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              登录
            </button>
          </div>

          <div className="flex justify-between flex-row w-full px-5 mb-5 mt-8 text-blue-500">
          <div>
            <a href="" className="hover:text-blue-600 hover:underline"> 忘记密码?</a>
           
          </div>
          <div>
            <a href="" className="hover:text-blue-600 hover:underline">TOS</a>
            
          </div>
          </div>
        </div>
        <div className=""></div>
      </G.SSOBody>
    </G.SSOContainer >
  );
}
