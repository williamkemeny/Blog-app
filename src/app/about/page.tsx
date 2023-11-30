const About: React.FC = () => {
  return (
    <section
      className="bg-white dark:bg-gray-900 min-h-screen"
      style={{ paddingTop: "60px" }}
    >
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <p className="font-medium text-blue-500 dark:text-blue-400">
            About Me
          </p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Who am I?
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            This page will let you know a little about me!
          </p>
        </div>
      </div>

      <div className="text-center mx-auto" style={{ maxWidth: "45em" }}>
        <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
          Welcome to William&apos;s Blog, where passion meets proficiency!
          I&apos;m William, a dynamic individual with a fervor for web
          development and a penchant for continuous learning. My journey has
          been shaped by a blend of education, experience, and a dash of
          personal interests.
        </h2>
        <div
          className="mt-6 text-left text-lg font-medium"
          style={{ paddingBottom: "60px" }}
        >
          <p style={{ padding: "5px" }}>
            <strong>Education Journey:</strong> I honed my technical skills
            through the rigorous curriculum at Lighthouse Labs, earning a Remote
            Diploma in Full-Stack Web Development. Prior to that, I delved into
            the realms of Management Economics and Finance at the University of
            Guelph, where I not only acquired a solid foundation in commerce but
            also developed a keen eye for statistical analysis, complemented by
            a minor in Statistics.
          </p>

          <p style={{ padding: "5px" }}>
            <strong>Technical Expertise:</strong> My toolkit is brimming with an
            arsenal of programming languages, including JavaScript, TypeScript,
            HTML5, CSS, SQL, and Ruby. I&apos;ve navigated the vast landscape of
            frameworks such as React, Node.js, jQuery, Express, Jest, Rails,
            Tailwind CSS, Axios, SCSS, and Cypress. Proficient in the tools and
            platforms that make the magic happen, I seamlessly integrate Git,
            GitHub, UNIX, PostgreSQL, Bash, Babel, Vagrant Box, and Figma into
            my workflow.
          </p>

          <p style={{ padding: "5px" }}>
            <strong>Beyond the Code:</strong> But life isn&apos;t just about
            code and algorithms. Outside the digital realm, I find joy in the
            physical. I maintain a healthy lifestyle through regular workouts,
            finding balance in the kitchen as I experiment with cooking, and
            cherishing moments with friends. As the seasons change, so do my
            interests. In the winter, you&apos;ll find me carving through the
            snow on a snowboard, while in the summer, I&apos;m nurturing my
            green thumb through gardening.
          </p>

          <p style={{ padding: "5px" }}>
            <strong>Join Me on this Journey:</strong> This blog isn&apos;t just
            a platform to showcase technical prowess; it&apos;s a space where I
            share the holistic tapestry of my life—where technology meets the
            tangible, and where the binary of code intertwines with the vibrant
            hues of personal experiences. So, whether you&apos;re here to
            explore the latest in web development, glean insights into my coding
            adventures, or simply join me on the rollercoaster of life beyond
            the screen, welcome to the journey! Your presence is not just
            appreciated; it&apos;s an integral part of what makes this space
            special. Let&apos;s code, cook, workout, and navigate the seasons
            together!
          </p>
          <div className="text-center">
            <p style={{ padding: "5px" }}>
              You can find my projects on my Github here:
            </p>
            <a
              className="md:text-blue-700"
              href="https://github.com/williamkemeny"
            >
              https://github.com/williamkemeny
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
