import React from "react";

const Blog = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-items-center">
      <div className="m-10">
        <a
          href="/blog"
          className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Question-01: What is CORS?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Cross-origin resource sharing (CORS) is a browser mechanism which
            enables controlled access to resources located outside of a given
            domain.It is an HTTP-header based mechanism that allows a server to
            indicate any origins (domain, scheme, or port) other than its own
            from which a browser should permit loading resources.
          </p>
        </a>
      </div>
      <div className="m-10">
        <a
          href="/blog"
          className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Question-02 why are you using firebase? what other option do you
            have to implement authentication without firebase?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            The Firebase Realtime Database lets you build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Auth0, MongoDB, Passport, Okta, and Firebase are
            the most popular alternatives and competitors to Firebase
            Authentication.
          </p>
        </a>
      </div>
      <div className="m-10">
        <a
          href="/blog"
          className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Question-03: How does the private route work?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </a>
      </div>
      <div className="m-10">
        <a
          href="/blog"
          className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Question-04: What is node? How does node work?
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Node allows developers to write JavaScript code that runs directly
            in a computer process itself instead of in a browser. Node. js runs
            on chrome v8 engine which converts javascript code into machine
            code, it is highly scalable, lightweight, fast, and data-intensive.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Blog;
