export default function Hero(){
    return(
        <section className="min-h-[calc(100vh-60px)] w-full bg-background text-foreground">
  <div className="mx-auto flex min-h-[calc(90vh-60px)] max-w-7xl items-center px-6">
    
    {/* Left Side - Content */}
    <div className="w-1/2">
      <p className="mb-4 text-2xl text-violet-400">
        Hi, I'm Anuj Negi
      </p>

      <h1 className="text-4xl font-bold sm:text-6xl">
        Full Stack Developer
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground">
        I build modern, responsive and scalable web applications
        using React, Next.js, Node.js, Express.js and MongoDB.
      </p>
    </div>

    {/* Right Side - Image */}
    <div className="flex w-1/2 justify-end">
      <div className="h-80 w-80 rounded-full bg-violet-500/20">
        {/* Your image will go here */}
      </div>
    </div>

  </div>
</section>
    )
}









{/* <div className="max-w-2xl  ">
          <p className="mb-4 text-violet-400">
            Hi, I'm Anuj Negi
          </p>

          <h1 className="text-4xl font-bold text-white sm:text-6xl">
            Full Stack Developer
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I build modern, responsive and scalable web applications
            using React, Next.js, Node.js, Express.js and MongoDB.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/projects"
              className="rounded-lg bg-violet-500 px-6 py-3 font-medium text-white transition hover:bg-violet-600"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-200 transition hover:border-violet-400 hover:text-violet-400"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="bg-white">

        </div> */}