"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaGithub,
  FaPhp,
  FaPython,
  FaDocker,
  FaAws,
  FaJenkins,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiMysql,
  SiPostgresql,
  SiHibernate,
  SiApachemaven,
  SiKubernetes,
} from "react-icons/si";

import { FcLinux } from "react-icons/fc";
/** about data */
const about = {
  title: "About me",
  description:
    "This section provides a brief overview of my professional profile and key details..!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aniket Thakre",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 839 060 9669",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years",
    },
    {
      fieldName: "MailTo",
      fieldValue: "aniket.thakre1997@gamil.com",
    },
    {
      fieldName: "freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "aniket-thakre-b8a632165",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Marathi",
    },
  ],
};

/**Exprience data */
const experience = {
  icon: "",
  title: "My Experience",
  description:
    "These are my full-time employment experiences, adhering to industry standards..!",
  items: [
    {
      company: "Infosys Limited",
      position: "Technology Analyst",
      duration: "October 2023 - Present",
    },
    {
      company: "Infosys Limited",
      position: "Senior System Engineer",
      duration: "July 2022 - October 2023",
    },
    {
      company: "Infosys Limited",
      position: "System Engineer",
      duration: "March 2021 - July 2022",
    },
  ],
};

/**Education data */
const education = {
  title: "My Education",
  description:
    "This section highlights my formal education, tracing the journey of my learning and skill development..!",
  items: [
    {
      institution: "Nagpur University",
      course: "B.E. in Computer Science & Technology",
      duration: "Aug 2016 - July 2020",
    },
    {
      institution: "D.B. Science College",
      course: "Pre-University Course",
      duration: "July 2013 - July 2015",
    },
    {
      institution: "GNHS, Gondia",
      course: "Seconday Education",
      duration: "June 2011 - June 2013",
    },
  ],
};
/**Skills */
const skills = {
  title: "My Skills",
  description:
    "This section highlights the technologies I have learned and utilized throughout my work experience..!",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java Core",
    },
    {
      icon: <SiSpringboot />,
      name: "Spring Boot",
    },
    {
      icon: <SiSpring />,
      name: "Spring Core",
    },
    {
      icon: <SiSpringsecurity />,
      name: "Spring Security",
    },

    {
      icon: <SiHibernate />,
      name: "Hibernate",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },

    {
      icon: <SiApachemaven />,
      name: "Apache Maven",
    },

    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },

    {
      icon: <FaPython />,
      name: "Python",
    },

    {
      icon: <FcLinux />,
      name: "Unix/Linux",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },

    {
      icon: <FaJenkins />,
      name: "Jenkins",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/**experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          {/**Duration of job */}
                          <span className="text-accent">{item.duration}</span>
                          {/** Position */}
                          <h3 className="text-xl max-w-[260px] min-h-[68px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/** Dot in front of company name */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            {/** Company name */}
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/**education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          {/**Duration of job */}
                          <span className="text-accent">{item.duration}</span>
                          {/** Position */}
                          <h3 className="text-xl max-w-[260px] min-h-[68px] text-center lg:text-left">
                            {item.course}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/** Dot in front of company name */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            {/** Company name */}
                            <p className="text-white/60 ">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/**skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/**about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
