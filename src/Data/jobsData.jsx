import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const dropdownData=[
    { title:"Job Title" , icon:IconSearch, options:['Designer','Developer','Product Manager','Marketing Specialist','Data Analyst','Content Writer','Customer Support' ] },
    { title:"Location", icon:IconMapPin, options:['Chennai','Bangalore','Hyderabad','Mumbai','Delhi','Indore' ] },
    { title:"Experience", icon:IconBriefcase, options:['Entry Level','Intermediate','Expert' ] },
    { title:"Job Type", icon:IconRecharging, options:['Full Time','Part Time','Internship','Freelance' ] }

]
const jobList = [
    {
      jobTitle: "Product Designer",
      company: "Meta",
      applicants: 25,
      experience: "Intermediate",
      jobType: "Full Time",
      location: "Bangalore",
      package: "12 LPA",
      postedDaysAgo: 10,
      jobDescription:
        "Collaborate with product managers and engineers to design intuitive user interfaces. Conduct user research and usability testing to enhance the user experience. Create wireframes, prototypes, and high-fidelity mockups for web and mobile applications.",
    },
    {
      jobTitle: "Software Engineer",
      company: "Google",
      applicants: 40,
      experience: "Experienced",
      jobType: "Full Time",
      location: "Hyderabad",
      package: "28 LPA",
      postedDaysAgo: 7,
      jobDescription:
        "Design, develop, and maintain scalable web applications. Write clean, efficient, and testable code. Collaborate with cross-functional teams to define and implement new features. Optimize applications for performance and scalability.",
    },
    {
      jobTitle: "Data Analyst",
      company: "Amazon",
      applicants: 35,
      experience: "Intermediate",
      jobType: "Full Time",
      location: "Bangalore",
      package: "10 LPA",
      postedDaysAgo: 5,
      jobDescription:
        "Analyze large datasets to uncover actionable insights. Create reports and dashboards to track key performance metrics. Work closely with business teams to understand data requirements. Ensure data accuracy and integrity.",
    },
    {
      jobTitle: "HR Manager",
      company: "Tata Consultancy Services",
      applicants: 15,
      experience: "Experienced",
      jobType: "Full Time",
      location: "Chennai",
      package: "8 LPA",
      postedDaysAgo: 3,
      jobDescription:
        "Oversee recruitment and employee onboarding processes. Manage performance appraisals and employee relations. Develop training programs to enhance employee skills. Ensure compliance with labor laws and organizational policies.",
    },
    {
      jobTitle: "Marketing Specialist",
      company: "Flipkart",
      applicants: 20,
      experience: "Intermediate",
      jobType: "Full Time",
      location: "Delhi",
      package: "9 LPA",
      postedDaysAgo: 12,
      jobDescription:
        "Plan and execute marketing campaigns to promote products and services. Analyze market trends and competitor strategies. Develop creative content for digital and traditional marketing channels. Monitor campaign performance and ROI.",
    },
    {
      jobTitle: "DevOps Engineer",
      company: "Microsoft",
      applicants: 30,
      experience: "Experienced",
      jobType: "Full Time",
      location: "Pune",
      package: "22 LPA",
      postedDaysAgo: 6,
      jobDescription:
        "Automate infrastructure provisioning and deployment processes. Manage CI/CD pipelines to ensure smooth delivery of updates. Monitor system performance and troubleshoot issues. Collaborate with development teams to optimize workflows.",
    },
    {
      jobTitle: "Content Writer",
      company: "Zomato",
      applicants: 18,
      experience: "Beginner",
      jobType: "Part Time",
      location: "Remote",
      package: "4 LPA",
      postedDaysAgo: 2,
      jobDescription:
        "Write engaging and SEO-friendly content for blogs, social media, and product descriptions. Conduct research to ensure factual accuracy and relevance. Collaborate with the marketing team to develop content strategies. Edit and proofread content for grammatical accuracy.",
    },
    {
      jobTitle: "UI/UX Designer",
      company: "Adobe",
      applicants: 27,
      experience: "Intermediate",
      jobType: "Full Time",
      location: "Mumbai",
      package: "14 LPA",
      postedDaysAgo: 9,
      jobDescription:
        "Design user-friendly interfaces for desktop and mobile applications. Conduct user testing to identify pain points and areas for improvement. Develop prototypes and collaborate with developers to ensure implementation. Stay updated on design trends and tools.",
    },
    {
      jobTitle: "Customer Support Executive",
      company: "Swiggy",
      applicants: 50,
      experience: "Beginner",
      jobType: "Full Time",
      location: "Bangalore",
      package: "3.5 LPA",
      postedDaysAgo: 4,
      jobDescription:
        "Assist customers with queries and resolve issues in a timely manner. Provide information about products and services. Document customer interactions and feedback for future reference. Maintain a high level of customer satisfaction.",
    },
    {
      jobTitle: "Business Analyst",
      company: "Infosys",
      applicants: 22,
      experience: "Experienced",
      jobType: "Full Time",
      location: "Chennai",
      package: "11 LPA",
      postedDaysAgo: 8,
      jobDescription:
        "Analyze business processes and identify opportunities for improvement. Collaborate with stakeholders to gather requirements and define project scope. Create detailed documentation and reports. Assist in implementing technology solutions to meet business needs.",
    },
  ];
  

export {dropdownData,jobList};