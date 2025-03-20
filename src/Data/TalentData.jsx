import { IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";


const searchFields=[
    { title:"Job Title",icon:IconSearch,options:['Designer','Developer','Product Manager','Marketing Specialist','Data Analyst','Content Writer','Customer Support'] },
    { title:"Location",icon:IconMapPin,options:['Chennai','Bangalore','Hyderabad','Mumbai','Delhi','Indore' ] },
    { title:"Skill", icon:IconRecharging, options:[ "JavaScript","Python","React.js","Node.js","Django","HTML","CSS","SQL","Git","REST APIs","AWS","Docker","Kubernetes","Machine Learning", "Data Analysis", "UI/UX Design","Project Management","Problem Solving","Communication","Team Collaboration", ] }

]
const talents = [
    {
      name: "Arjun Mehta",
      role: "Full Stack Developer",
      company: "TechNova Solutions",
      skills: ["React.js", "Node.js", "MongoDB", "REST APIs"],
      about:
        "Arjun is a skilled Full Stack Developer with expertise in React.js and Node.js. He builds scalable backends using MongoDB and crafts seamless REST APIs. He enjoys working on innovative projects and delivering impactful solutions.",
      expectedSalary: "20 LPA",
      location: "Bangalore",
      image:"avatar"
    },
    {
      name: "Nisha Reddy",
      role: "UI/UX Designer",
      company: "PixelCraft Studios",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      about:
        "Nisha is a creative UI/UX Designer with a passion for crafting intuitive and user-friendly interfaces. She excels in wireframing, prototyping, and conducting user research to improve user experiences.",
      expectedSalary: "12 LPA",
      location: "Hyderabad",
      image:"avatar1"
    },
    {
      name: "Rahul Verma",
      role: "Data Scientist",
      company: "Insight Analytics",
      skills: ["Python", "Machine Learning", "Pandas", "Data Visualization"],
      about:
        "Rahul is an experienced Data Scientist with a strong foundation in Python and Machine Learning. He specializes in data analysis using Pandas and creating impactful visualizations to drive business decisions.",
      expectedSalary: "18 LPA",
      location: "Delhi",
      image:"avatar2"
    },
    {
      name: "Aditi Sharma",
      role: "Digital Marketing Specialist",
      company: "BrandBoost Agency",
      skills: ["SEO", "Google Ads", "Social Media Marketing", "Content Strategy"],
      about:
        "Aditi is a results-driven Digital Marketing Specialist who helps businesses grow through SEO and paid advertising. She is skilled in creating social media campaigns and developing effective content strategies.",
      expectedSalary: "10 LPA",
      location: "Mumbai",
      image:"avatar"
    },
    {
      name: "Vikram Singh",
      role: "DevOps Engineer",
      company: "CloudWave Systems",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      about:
        "Vikram is a highly competent DevOps Engineer with expertise in AWS cloud infrastructure and container orchestration using Docker and Kubernetes. He is adept at automating CI/CD pipelines for efficient deployments.",
      expectedSalary: "22 LPA",
      location: "Pune",
      image:"avatar"
    },
  ];
const profile={
  name:" Mehta",
  role: "Full Stack Developer",
  company: "TechNova Solutions",
  location: "Bangalore",
  about:
    "Arjun is a skilled Full Stack Developer with expertise in React.js and Node.js. He builds scalable backends using MongoDB and crafts seamless REST APIs. He enjoys working on innovative projects and delivering impactful solutions.",
  skills: ["React.js", "Node.js", "MongoDB", "REST APIs"],
  experience:[
    {
      title:"Full Stack Developer",
      company:"TechNova Solutions",
      location:"Bangalore",
      startDate:"Apr 2022",
      endDate:"Present",
      description:"A Full Stack Developer is a multi-skilled professional adept at developing both client and server-side web applications. They bridge the gap between user experience and backend functionality, ensuring a seamless, efficient, and scalable solution.",

    },
    {
      title:"Full Stack Developer",
      company:" Solutions",
      location:"Chennai",
      startDate:"May 202",
      endDate:"Apr 2022",
      description:"A Full Stack Developer is a multi-skilled professional adept at developing both client and server-side web applications. They bridge the gap between user experience and backend functionality, ensuring a seamless, efficient, and scalable solution.",

    }
  ],
  certificate:[
    {
      title:"Certified Full Stack Developer",
      institute:"TechNova Solutions",
      date:"Oct 2022",
      uId:"Technova2022005698"
    }
  ]
  
  
}

export {searchFields,talents,profile};