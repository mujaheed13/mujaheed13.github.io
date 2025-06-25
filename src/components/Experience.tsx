import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Master Works",
      period: "January 2024 - Present",
      description:
        "Designing, developing, and maintaining scalable web applications using Next.js (ShadCN + Tailwind CSS), NestJS, PostgreSQL, and Node-Red. Collaborated closely with cross-functional teams to deliver high-performance software systems for data-intensive applications.",
      achievements: [
        "Built responsive web applications serving 10,000+ users",
        "Optimized database queries reducing load time by 40%",
        "Implemented CI/CD pipelines using Git workflows",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Master Works",
      period: "July 2023 - December 2023",
      description:
        "Started my journey as a developer working on various projects using JavaScript, React, and Express.js. Gained experience in full-stack development and agile methodologies.",
      achievements: [
        "Contributed to 3+ successful project deliveries",
        "Learned modern development practices and tools",
        "Collaborated with senior developers and designers",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my
            development career
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl text-blue-600 font-medium">
                    {exp.company}
                  </h4>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {exp.description}
              </p>
              <div>
                <h5 className="font-semibold text-gray-900 mb-3">
                  Key Achievements:
                </h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
