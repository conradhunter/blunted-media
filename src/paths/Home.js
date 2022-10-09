import React from "react";

const Home = ({
  signIn,
  handleSignUp,
  emailRef,
  passwordRef,
  modalForm,
  homeContent,
  isAuth,
}) => {
  if (isAuth === false) {
    return (
      <>
        <main ref={homeContent} id="home-main" className="flex">
          <section className="w-3/5 flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-blue-500">Blunted.</h1>
            <h2 className="text-2xl">A snowsport media sharing platform.</h2>
          </section>
          <aside
            id="home-aside"
            className="w-2/5 border-l-2 border-black flex items-center justify-center"
          >
            <form className="flex flex-col">
                <input
                  placeholder="Email Address"
                  ref={emailRef}
                  type="email"
                  className="bg-gray-200 mb-2 w-72 py-1 px-2 rounded outline-none border-2 border-gray-500"
                />
                <input
                  placeholder="Password"
                  ref={passwordRef}
                  autoComplete="password"
                  type="password"
                  className="bg-gray-200 mb-2 w-72 py-1 px-2 rounded outline-none border-2 border-gray-500"
                />
              <button
                onClick={handleSignUp}
                className="bg-blue-300 py-2 hover:bg-blue-400 w-36 mx-auto transition-all duration-200 border-2 border-black"
              >
                Join
              </button>
            </form>
          </aside>
        </main>


        <form
          id="modal-form"
          ref={modalForm}
          className="bg-blue-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/2 border-2 border-black rounded-lg overflow-hidden"
        >
          <div id="modalForm__inner--wrapper">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-200 w-72 py-1 px-2 rounded outline-none border-2 border-black mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="password"
              className="bg-gray-200 w-72 py-1 px-2 rounded outline-none border-2 border-black mb-3"
            />
            <button
              onClick={signIn}
              className="bg-blue-400 px-2 py-1 w-36 rounded-3xl mr-2 border-black border-2 font-medium text-md hover:bg-blue-500 transition-all duration-200"
            >
              Log In
            </button>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <>
        <main className="row py-16">
          <h1 className="text-center text-4xl font-semibold text-blue-500 mb-10">
            Browse some recently shared content!
          </h1>
        </main>
      </>
    );
  }
};

export default Home;
