/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sujeet Mahto",
  title: "Hi, I'm Sujeet",
  subTitle: emoji(
    "🚀 I'm an MCA student at NIT Allahabad, a passionate Full Stack Developer who loves exploring internal workings of Technologies🤓 Arch Linux 🐧 and the terminal 💻."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EsPlJsk4eMHrFitMx9F19SIXGtston6T/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mahtosujeet",
  linkedin: "https://www.linkedin.com/in/sujeetmahto/",
  gmail: "sujeetmahto.dev@gmail.com",
  instagram: "https://www.instagram.com/sujeetvibes/",
  leetcode: "https://leetcode.com/sujeetmahto/",
  codeforces: "https://codeforces.com/profile/sujeetmahto",
  // gitlab: "https://gitlab.com/mahotsujeet",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE FULL STACK DEVELOPER WHO LOVES TO EXPLORE HOW THINGS WORK INTERNALLY ⚙️",
  skills: [
    // emoji("⚡ Build highly interactive and optimized front-end experiences for web applications 🌐"),
    // emoji("⚡ Develop and manage scalable back-end systems with Node.js & MongoDB 🚀"),
    emoji(
      "⚡ Automate workflows, manage servers, and configure development environments using Linux 🐧 & the terminal 💻"
    ),
    emoji(
      "⚡ Version control with Git & GitHub 🔥, and seamless deployment on Vercel, Heroku, and self-hosted setups 🌍"
    ),
    emoji(
      "⚡ Deep dive into system internals, low-level programming, and memory management with C/C++ 🛠️"
    ),
    emoji(
      "⚡ Writing clean, efficient scripts with Python 🐍 for automation & backend tasks"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "tailwindcss",
      fontAwesomeClassname: "fas fa-palette"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-cog"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "terminal",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "vercel",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "heroku",
      fontAwesomeClassname: "fas fa-cloud-upload-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Motilal Nehru National Institute of Technology Allahabad 🏛️",
      logo: require("./assets/images/mnnitlogoSquare.png"),
      subHeader: "Master of Computer Applications 🎓",
      duration: "2024 - 2027",
      desc: "Currently maintaining a 9.5 CPI 📊 while actively exploring system internals, low-level programming, and open-source contributions.",
      descBullets: [
        "Full-Stack Integration Engineer, Web Team, Application Club 🔥",
        "Ranked #6 in OPC Freshers Competitive Coding Contest 🚀",
        "Finalist in DevOrDie (Avishkar) MNNIT 2024 🏆"
      ]
    },
    {
      schoolName: "Chaudhary Bansi Lal University, Bhiwani 🏫",
      logo: require("./assets/images/cbluLogo.jpg"),
      subHeader: "Bachelor of Science (Computer Science) 🎓",
      duration: "2021 - 2024",
      desc: "Graduated with a CGPA of 7.99 while developing a strong foundation in computer science concepts.",
      descBullets: [
        "Won 1st place in the District-level Science Exhibition 🏆",
        "Particated in North-Zone Men's Chess Tournament 2022 🏆",
        "Focused on algorithms, data structures, and backend development 🔍"
      ]
    },
    {
      schoolName: "City Senior Secondary School, Hansi Road 🏫",
      // logo: require("./assets/images/citySchoolLogo.png"),
      logo: require("./assets/images/bsehLogo.png"),
      subHeader: "Higher Secondary Education 📖",
      duration: "2019 - 2021",
      desc: "Completed high school with a strong academic record, securing 91.6% in the Haryana Board.",
      descBullets: [
        "Developed an early interest in coding and problem-solving 💡"
      ]
    },
    {
      schoolName: "Saraswati Shiksha Niketan High School, Shanti Nagar 🏫",
      // logo: require("./assets/images/ssnLogo.png"),
      logo: require("./assets/images/bsehLogo.png"),
      subHeader: "Secondary Education 🎒",
      duration: "2017 - 2019",
      desc: "Secured 89.2% in the Haryana Board, excelling in science and mathematics.",
      descBullets: [
        "Pushed myself out of my confort zone to engage in public speaking 💡"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Passion for Learning New Technologies",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Notable achievements, certifications, and recognitions I've earned along the way!",

  achievementsCards: [
    {
      title: "1st Runner-up, Devjam 2025 🏅",
      subtitle:
        "Secured 2nd place in MNNIT’s flagship hackathon, competing against top developers and innovators.",
      image: require("./assets/images/devjamLogo.png"),
      imageAlt: "Hackathon Logo",
      footerLink: []
    },
    {
      title: "Rank #6, OPC Freshers Competitive Coding Contest 🚀",
      subtitle:
        "Achieved 6th position in the highly competitive OPC Freshers contest by CC Club, showcasing strong problem-solving skills.",
      image: require("./assets/images/cpLogo.jpg"),
      imageAlt: "Coding Contest Logo",
      footerLink: []
    },

    {
      title: "Finalist, DevOrDie (Avishkar) MNNIT 2024 🏆",
      subtitle:
        "Reached the finals of DevOrDie, a premier coding event at MNNIT, proving expertise in software development and system design.",
      image: require("./assets/images/avishkarLogo.png"),
      imageAlt: "DevOrDie Logo",
      footerLink: []
    },
    {
      title: "Top 70, CodeStart 8.0 🎯",
      subtitle:
        "Ranked among the top 70 out of 213 teams in CodeStart 8.0, a competitive programming challenge by CC Club.",
      image: require("./assets/images/cpLogo.jpg"),
      imageAlt: "CodeStart Logo",
      footerLink: []
    },
    {
      title: "AIR 232, NIMCET 2024 🏅",
      subtitle:
        "Secured an All India Rank of 232 in NIMCET, the national-level MCA entrance examination.",
      image: require("./assets/images/nitjsrLogo.png"),
      imageAlt: "NIMCET Logo",
      footerLink: []
    },
    {
      title: "1st Position, Science Exhibition 2022 🏆",
      subtitle:
        "Won 1st place at the district-level Science Exhibition in Bhiwani, showcasing an innovative tech project.",
      image: require("./assets/images/scienceExhibitionLogo.jpg"),
      imageAlt: "Science Exhibition Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8168292338",
  email_address: "sujeetmahto.dev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "sujeetmahto-dev", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
