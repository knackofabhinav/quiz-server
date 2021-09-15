const { v4 } = require('uuid');
const data = [
  {
    name: "JavaScript Quiz",
    coverUrl: "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
    totalScore: 50,
    questions: [
      {
        question: "JavaScript is a ________ Side Scripting Language.",
        points: 10,
        negativePoints: 5,
        options: [
          {
            option: "Server",
            isAnswer: false
          },
          {
            option: "ISP",
            isAnswer: false
          },
          {
            option: "Browser",
            isAnswer: true,
            explaination: "JavaScript is a Browser Side Scripting Language. ASP, PHP, Perl are Server Side Scripting Language."
          },
          {
            option: "None of the above.",
            isAnswer: false
          }
        ]
      },
      {
        question: "Which function of an Array object calls a function for each element in the array?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            option: "forEach()",
            isAnswer: true,
            explaination: "forEach() – Calls a function for each element in the array."
          },
          {
            option: "every()",
            isAnswer: false
          },
          {
            option: "forEvery()",
            isAnswer: false
          },
          {
            option: "each()",
            isAnswer: false
          }
        ]
      },
      {
        question: "Which of the following is an advantage of using JavaScript?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            option: " Increased interactivity.",
            isAnswer: false
          },
          {
            option: " Less server interaction.",
            isAnswer: false
          },
          {
            option: "Immediate feedback from the users.",
            isAnswer: false
          },
          {
            option: "All of the above.",
            isAnswer: true,
            explaination: "JavaScript ensures increased interactivity, less server interation and immediate feedback from the users."
          }
        ]
      },
      {
        question: "JavaScript is ________ language.",
        points: 10,
        negativePoints: 5,
        options: [
          {
            option: "a compiled",
            isAnswer: false
          },
          {
            option: "an interpreted",
            isAnswer: true,
            explaination: "JavaScript is an interpreted language, not a compiled language. C++ or Java codes needs to be compiled before it is run. The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute. There is no such need in case of JavaScript."
          },
          
        ]
      },
      {
        question: "Which was the first browser to support JavaScript?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            option: "Mozilla Firefox",
            isAnswer: false
          },
          {
            option: "Chrome",
            isAnswer: false
          },
          {
            option: "Netscape",
            isAnswer: true,
            explaination: "Netscape was the first web browser to support JavaScript."
          },
          {
            option: "Brave",
            isAnswer: false
            
          },
          
        ]
      }
    ]
  }, {
    name: "React Quiz",
    coverUrl: "https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ",
    totalScore: 50,
    questions: [
      {
        question: " Everything in React is a _____________",
        points: 10,
        negativePoints: 5,
        options: [
          {
            option: "Module",
            isAnswer: false
          },
          {
            option: "Package",
            isAnswer: false
          },
          {
            option: "Component",
            isAnswer: true,
            explaination: "Everything in React is a Component."
          },
          {
            option: "Class",
            isAnswer: false
          }
        ]
      },
      {
        question: "What is ReactJS?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            option: " Server side Framework",
            isAnswer: false,
          },
          {
            option: "User-interface framework",
            isAnswer: false
          },
          {
            option: "A Library for building interaction interfaces",
            isAnswer: true,
            explaination: "React is a Library for building interaction interfaces"
          },
          {
            option: "None of These",
            isAnswer: false
          }
        ]
      },
      {
        question: "Props are __________ into other components",
        points: 10,
        negativePoints: 5,
        options: [
          {
            option: "Methods",
            isAnswer: true,
            explaination: "Props are Methods into other components in React"
          },
          {
            option: "Injected",
            isAnswer: false
          },
          {
            option: "Both 1 & 2",
            isAnswer: false
          },
          {
            option: "All of the above.",
            isAnswer: false,
            
          }
        ]
      },
      {
        question: "What are the two ways that data gets handled in React?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            option: "services & components",
            isAnswer: false
          },
          {
            option: "state & props",
            isAnswer: true,
            explaination: "State and props are the two ways to handle data in React."
          },
          
        ]
      },
      {
        question: "What is a react.js in MVC?",
        points: 10,
        negativePoints: 5,
        options: [
          {
            option: "Middleware",
            isAnswer: false
          },
          {
            option: "Controller",
            isAnswer: true,
            explaination: "React is Controller in a MVC"
          },
          {
            option: "Model",
            isAnswer: false,
          },
          {
            option: "Router",
            isAnswer: false
            
          },
          
        ]
      }
    ]
  }
]

const dataWithId = data.map(quiz => ({_id: v4(), ...quiz,  questions: quiz.questions.map(question => ({_id: v4() ,...question, options: question.options.map(option => ({_id: v4(), ...option}))}))}))



module.exports = dataWithId