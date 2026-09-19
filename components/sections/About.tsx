export default function About(){
    return(
        <section id="about" className="w-full bg-background text-foreground px-6 py-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-6xl">
          <p className="mb-3 text-2xl font-medium uppercase tracking-widest text-violet-400 pb-6">
            About Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Building web applications with modern technologies.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            I'm Anuj Negi, a BCA graduate and aspiring Full Stack Developer
            passionate about building modern and user-friendly web
            applications. I enjoy turning ideas into functional products
            and continuously improving my development skills.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-400">
            I work with technologies like React, Next.js, Node.js,
            Express.js, MongoDB and Firebase. I have built projects such as
            Fixora, a local services marketplace, and Shortlist, a
            community ideas platform using Next.js and Firebase.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-400">
            As a fresher, I'm looking for an opportunity where I can
            contribute to real-world projects, learn from experienced
            developers, and grow as a software developer.
          </p>
        </div>
      </div>
    </section> 
    )
}