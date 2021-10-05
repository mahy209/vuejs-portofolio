let info = {
  name: "Mahy Mohab",
  logo_name: "Mahy",
  flat_picture: require("./src/assets/potrait.jpg"),
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
      name: "Sheet Recognizer",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/one.png")
        },
        {
          img: require("./src/assets/portfolio/msr/two.png")
        },
        {
          img: require("./src/assets/portfolio/msr/three.png")
        },
        {
          img: require("./src/assets/portfolio/msr/four.png")
        }
      ],
      technologies: ["Computer Vision", "OpenCV", "AI", "Flask", "Sockets"],
      category: "Algorithm",
      date: "Jan, 2020 - Mar, 2020",
      github:
        "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      description:
        "Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Recognition, this tool is used to detect music notes and rests. It makes use of basic Computer Vision techniques such as Convolution, Edge Detections, Hough Transforms and Template Matching to detect notes and rests on a music sheet. "
    },
    {
      name: "NoQ Job Portal",
      pictures: [
        {
          img: require("./src/assets/portfolio/noq/logo.png")
        },
        {
          img: require("./src/assets/portfolio/noq/one.png")
        },
        {
          img: require("./src/assets/portfolio/noq/two.png")
        },
        {
          img: require("./src/assets/portfolio/noq/three.png")
        },
        {
          img: require("./src/assets/portfolio/noq/four.png")
        }
      ],
      technologies: ["Node", "Vue", "Express", "MongoDB", "Heroku"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "https://github.com/hrishikeshpaul/noq",
      visit: "https://noq-client.herokuapp.com/",
      description:
        "No Q, is a revolutionary tool which allows for both employers and students to skip the hassle seen in modern day career fairs. For the students, there is an intuitive profile builder where you can add things like education, skills, certifications, honors, and experiences. No Q is not only good for students, but employers as well! A common problem at modern career fairs is the number of unqualified candidates who waste their time when they could be chatting with someone else. With No Q, only the students who meet the positions’ criteria will be able to apply, and from there the recruiter can invite them to talk in more detail at the career fair through our intuitive messaging system."
    },
    {
      name: "POST",
      pictures: [
        {
          img: require("./src/assets/portfolio/post/one.png")
        },
        {
          img: require("./src/assets/portfolio/post/two.png")
        }
      ],
      technologies: [
        "Markov Models",
        "Python",
        "Artificial Intelligence",
        "Vue",
        "Heroku"
      ],
      category: "Algorithm",
      github: "https://github.com/hrishikeshpaul/pos-tagger",
      date: "Oct, 2019 - Nov, 2019",
      visit: "https://post-client.herokuapp.com/",
      description:
        "Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling."
    },
    {
      name: "Suicide Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/suicide/suicide-analyzer.png")
        },
        {
          img: require("./src/assets/portfolio/suicide/suicide2-original.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "Leaflet", "Pandas"],
      category: "Website",
      date: "Oct, 2018 - Nov, 2018",
      github: "https://github.com/hrishikeshpaul/whodata",
      visit: "https://skylarktiral.herokuapp.com/",
      description:
        "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent."
    },
    {
      name: "Sentiment Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/smit/one.png")
        },
        {
          img: require("./src/assets/portfolio/smit/two.png")
        },
        {
          img: require("./src/assets/portfolio/smit/three.png")
        },
        {
          img: require("./src/assets/portfolio/smit/four.png")
        }
      ],
      technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "https://github.com/hrishikeshpaul/sih",
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
      description:
        "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
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
