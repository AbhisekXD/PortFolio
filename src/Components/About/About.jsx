import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white bg-black bg-opacity-30 shadow-xl mx-0 md:mx-20 rounded-lg px-6 py-10 md:px-20 md:py-16">
      {/* Top-centered Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">About</h2>

      {/* Main content: image + text */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            className="h-64 md:h-80 object-contain"
            src={AboutImg}
            alt="About img"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 md:pl-10">
          <div className="flex gap-4 items-start md:justify-start md:ml-10">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Java Backend Developer
              </h1>
              <p className="text-sm md:text-md leading-tight mt-1 pt-3">
                With a math degree from Utkal University, I have a strong foundation in logic, problem-solving, and data analysis, which I apply to my role as a software engineer at Disha systems. I have 3.9 years of experience in developing and testing real-time applications that are scalable, reliable, and secure using various Java technologies such as Core Java, JDBC, Servlets, JSP, Spring Framework, Spring Boot, Microservices, Spring Cloud, and AWS.
                In addition to backend development, I have hands-on experience with Docker for containerization, Redis for caching and session management, Kafka for building event-driven architectures, and JWT for implementing secure authentication and authorization. I am proficient in working with MySQL and PostgreSQL databases and have used Swagger for API documentation and Postman for API testing and debugging.
                I am passionate about learning new technologies and frameworks, and I always seek opportunities to showcase my talent and contribute to the organization's goals. I am also a team player who values collaboration, feedback, and continuous improvement. I have worked with various clients and stakeholders, delivering high-quality solutions that meet their needs and expectations. I have also participated in multiple projects involving agile methodologies, code reviews, and quality assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
