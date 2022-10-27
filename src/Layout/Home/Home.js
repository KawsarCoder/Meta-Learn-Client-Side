import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <a
          href="/"
          class="flex flex-col items-center bg-white border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
            src="https://w10.naukri.com/mailers/2021/naukri-learning/oct/28oct/Project-Manager.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              We are provide best programming course for ever, if you want to
              join please visit course section
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Computer programming is at the heart of computer science. It is
              the implementation portion of software development, application
              development and software engineering efforts, transforming ideas
              and theories into actual, working solutions.
            </p>
          </div>
        </a>
      </div>
    
      <h1 className="text-center my-12 font-bold text-xl text-blue-600 border-b-4 w-72 border-b-rose-500"> Some Information </h1>
      <div class="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Very easy this was to integrate
            </h3>
            <p class="my-4 font-light">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3">
            <img
              class="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="developer"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Bonnie Green</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Developer at Open AI
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Solid foundation for any project
            </h3>
            <p class="my-4 font-light">
              Designing with Figma components that can be easily translated to
              the utility classes of Tailwind CSS is a huge timesaver!"
            </p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3">
            <img
              class="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profiles"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Roberta Casas</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Lead designer at Dropbox
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Mindblowing workflow
            </h3>
            <p class="my-4 font-light">
              Aesthetically, the well designed components are beautiful and will
              undoubtedly level up your next application."
            </p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3">
            <img
              class="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="pictures"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Jese Leos</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Software Engineer at Facebook
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Efficient Collaborating
            </h3>
            <p class="my-4 font-light">
              You have many examples that can be used to create a fast prototype
              for your team."
            </p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3">
            <img
              class="w-9 h-9 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="profile"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Joseph McFall</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                CTO at Google
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Home;
