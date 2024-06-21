import {
    algorithms,
    devnotes,
    oscs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "hero",
      title: "Home",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "experience",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const experiences = [
    {
      title: "Graduation",
      company_name: "National Institue of Technology(Kurukshetra)",
      date: "2024 - Present",
      details: [
        "Huge interest in learning <span style='color: white;'>about technology</span> by creating more and more projects.",
        "Passionate about learning in Options and Investing in share narket make <span style='color: white;'>17%</span> annual returns in 2022-23 FY.",
        "Passionate about lerning something about <span style='color: white;'>Artifical intelligence , Share market..</span>.",
      ],
    },
    {
      title: "12th",
      company_name: "RPS With 93%",
      date: "2021 - 2022",
      details: [
        "Passed 12th with 93 from the branch <span style='color: white;'>PCMB</span>.",
        "<span style='color: white;'>Designed A very Good </span>  Project in School.",
        "<span style='color: white;'>Managed full Study</span> with new about technology",
      ],
    },
    {
      title: "10th",
      company_name: "RPS With 73%",
      date: "2019 - 2020",
      details: [
        "Inerest in Studies is Very low<span style='color: white;'>Passionate aboute investing</span>.",
        "Working not so hard<span style='color: white;'>in class 10th</span>, score is very low.",
        "<span style='color: white;'>Collaborated with INC</span> to design  a project",
      ],
    },
    {
      title: "Basic-Education",
      company_name: "RCM",
      date: "2008-2019",
      details: [
        "In Early days my interest in <span style='color: white;'>computer science foundation</span> is very high.",
        "Worked with <span style='color: white;'>IN Team</span> for many projects.",
        "Acted as a member of the <span style='color: white;'>NSS</span>",
      ],
    },
  ];
  
  const portfolio = [
    {
      name: "Make a Khatta Book real time project",
      description:
        "At Khatabook, we’re building utility solutions for the nation’s 6.3 crore-strong MSME sector. Our first offering – an Android App enabling businesses to digitally record.",
      image: oscs,
    },
    {
      name: "Rekfous",
      description:
        "Refokus is a forward-thinking web agency that combines Web Design, Webflow Development, and Creative Development to create cool websites that help brands position themselves as market leaders.",
      image: devnotes,
    },
    {
      name: "oby's Agency",
      description:
        "Our agency is about people who love creating, designing and developing wow projects. At the same time we are a boutique agency that is more than the collective. We learn and grow, win and celebrate together.",
      image: algorithms,
    },
  ];
  
  export { experiences, portfolio };
  