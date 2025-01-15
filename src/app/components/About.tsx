const About = () => {
  return (
    <section
      className="relative py-12 px-6 w-full "
    >
      {/* Centralized Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
        About Me
      </h1>

      {/* Centralized Bio Text */}
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        I am an organized professional driven by challenges, passionate about building impactful and visually appealing applications. My journey in web development combines technical expertise with a creative touch.
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-6xl mx-auto">
        {/* Left Column: Skills */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Skills
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-600 dark:text-gray-300">Frontend Development</li>
            <li className="text-gray-600 dark:text-gray-300">Backend Development</li>
          </ul>
        </div>

        {/* Center Column: Picture */}
        <div className="flex justify-center">
          <img
            src="/assets/untitled.png"
            alt="Your Photo"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-300 dark:border-gray-700 shadow-lg"
          />
        </div>

        {/* Right Column: Skills */}
        <div className="text-center md:text-right">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Skills
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-600 dark:text-gray-300">React Development</li>
            <li className="text-gray-600 dark:text-gray-300">Ruby on Rails</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
