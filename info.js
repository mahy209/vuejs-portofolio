let info = {
  name: "Mahy Mohab",
  logo_name: "Mahy",
  flat_picture: require("./src/assets/portrait.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm Mahy Mohab, A senior Software Engineering student at KFS University with an interest in Software Development, UI/UX Design and Front-end developing. ",
  links: {
    linkedin: "www.linkedin.com/in/mahy-mohab-209",
    github: "https://github.com/mahy209",
    behance: "https://www.behance.net/mahymohab",
    resume:
      "https://drive.google.com/file/d/1PlgPagO4D1sc-pztC0sv5a34KrN9g3kM/view?usp=sharing"
  },
  education: [
    {
      name: "KFS University",
      place: "Kafr Elsheikh",
      date: "sep, 2018 - currently",
      degree: "bachelor in software engineering",
      gpa: "3.1/4.0",
      description:
        "",
      skills: [
        "Software Engineering",
        "web programming",
        "UI/UX design",
        "Front-end developing",
        "C#"
      ]
    },
  ],
  experience: [
    {
      name: "MONT",
      place: "Kafr elSheikh, Egypt",
      date: "July, 2021 - currently",
      position: "ReactJS Engineer",
      description:
        "",
      skills: ["HTML5", "CSS3", "Bootstrap", "JQuery", "Json", "JavaSript", "TypeSript", "es6", "VueJS"]
    },
    {
      name: "ITI",
      place: "Kafr elSheikh, Egypt",
      date: "1,sep, 2021 - 28,sep, 2021",
      position: "VueJS web developer",
      description:
        "",
      skills: ["HTML5", "CSS3", "Bootstrap", "JQuery", "Json", "JavaSript", "TypeSript", "es6", "VueJS"]
    },
    {
      name: "Udacity",
      place: "Egypt",
      date: "jun, 2021 - sep, 2021",
      position: "React Web Developer",
      description:
        "",
      skills: ["Javascript", "Typescript", "ReactJS", "React-Redux", "webpack", "NLP"]
    },
    {
      name: "IEEE",
      place: "Alexandria, Egypt",
      date: "Jan, 2020 - Feb, 2020",
      position: "Frontend Developer",
      description:
        "",
      skills: ["HTML", "CSS", "JavaSript"]
    },
  ],
  skills: [
    {
      title: "Language",
      info: [
        "Python","Javascript","TypeScript","Java","C#"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","Bootstrap3","JQuery","Es6","json"],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue", "React", "Node"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Databases",
      info: ["MongoDB", "MySQL", "SQL Server"],
      icon: "fa fa-database"
    },
    {
      title: "Operating systems & tools",
      info: [ "Ubuntu", "Windows", "Agile", "Scrum", "JIRA","Firebase"],
      icon: "fas fa-tools"
    },
    {
      title: "Design",
      info: ["Illustrator", "XD", "Photoshop", "Gimp"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Diary App",
      pictures: [
        {
          img: require("./src/assets/portfolio/diary/1.png")
        },
        {
          img: require("./src/assets/portfolio/diary/2.png")
        },
        {
          img: require("./src/assets/portfolio/diary/3.png")
        },
      ],
      technologies: ["react", "scss", "local storage"],
      category: "developing",
      date: "Aug, 2021 - 20 days",
      github:
        "https://github.com/mahy209/notes-react-app.git",
      visit: "https://github.com/mahy209/notes-react-app.git",
      description:
        " Diary react app with some new features: Dark mode, upload images, tags, filter search with title/content/tag "
    },
    {
      name: "Online Examination",
      pictures: [
        {
          img: require("./src/assets/portfolio/online examination/exam (1).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (2).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (3).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (4).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (5).png")
        }
      ],
      technologies: ["HTML", "CSS","JavaSript","JQuery", "PHP", "MySQL"],
      category: "developing",
      date: "Apr, 2021 - May, 2021",
      github: "https://github.com/mahy209/online-examination.git",
      visit: "https://github.com/mahy209/online-examination.git",
      description:
        "Online Examination System Today Online Examination System has become a fast growing examination method because of its speed and accuracy. It is also needed less manpower to execute the examination. Almost all organizations now-a-days, are conducting their objective exams by online examination system, it saves students time in examinations. Organizations can also easily check the performance of the student that they give in an examination. As a result of this, organizations are releasing results in less time. It also helps the environment by saving paper. According to today’s requirement, online examination project in php is very useful to learn it. What is an online examination system? In an online examination system examine get their user id and password with his/her admit card. This id is already saved in the examination server. When examine login to the server he/she get his/her profile already register. On the certain time examine gets the message to start the examination. All answers given by examine are saved into the server with his/her profile information. Online examination system also allows to correct the answer if the examine needed to change any answer in the examination time duration, however, after the time duration any change will not allow. This also makes c checking the answer easy and error proof as computers are more accurate than man and provide fast results too. Php is a web base language so we can create an online examination system in PHP. Administrator of Online Examination has multiple features such as Add, Delete, Update Topics and Question. To Login as Admin put inside your browser."
    },
    {
      name: "Clumpr",
      pictures: [
        {
          img: require("./src/assets/portfolio/clumpr/logo.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/one.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/two.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    },
    {
      name: "Nutricare",
      pictures: [
        {
          img: require("./src/assets/portfolio/nc/one.png")
        },
        {
          img: require("./src/assets/portfolio/nc/two.png")
        },
        {
          img: require("./src/assets/portfolio/nc/three.png")
        },
        {
          img: require("./src/assets/portfolio/nc/four.png")
        },
        {
          img: require("./src/assets/portfolio/nc/five.png")
        },
        {
          img: require("./src/assets/portfolio/nc/six.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    }
  ],
  portfolio_design: [
    {
      name: "Examia",
      title: "Online Examination - UI Design",
      pictures: [
        {
          img: require("./src/assets/designs/online examination/exam (2).png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/online examination/exam (1).png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/online examination/exam (3).png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/designs/online examination/exam (4).png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/online examination/exam (5).png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/online examination/exam (6).png"),
          title: "App Elements"
        }
      ],
      technologies: ["XD", "Photoshop"],
      category: "Visual Design",
      github: "",
      date: "Jan, 2021 - Feb, 2021",
      visit: "",
      description:
        " Examia is a open source project , <br> <br> with Ui/UX design and full stack developing(HTML/CSS/JQuery/PHP)."
    },
    {
      name: "Pill Reminder",
      title: "Pill Reminder - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pill reminder/Web 1.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pill reminder/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pill reminder/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Apr, 2021 - Apr, 2021",
      visit: "",
      description:
        "pill reminder app for nessecary drugs for the day."
    },
    {
      name: "Taxes Burger",
      title: "Taxes Burger - UI design",
      pictures: [
        {
          img: require("./src/assets/designs/burger/Web 1 (1).jpg"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/burger/Web 1 (1).png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/designs/burger/Web 1 (2).png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/designs/burger/Web 1 (3).png"),
          title: "Mockup 3"
        },
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2021 - May, 2021",
      visit: "",
      description:
        " Burger restuarant UI design"
    }
  ],
};

export default info;
