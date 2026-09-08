// Crown of Exodus Imports
import crownOfExodusImage from "../assets/CrownofExodus_Thumbnail.png";
import crownOfExodus from "../assets/CrownOfExodus/Crown_Of_Exodus_Title.png";
import crownOfExodusScreenshot1 from "../assets/CrownOfExodus/Crown_Of_Exodus_1.png";
import crownOfExodusScreenshot2 from "../assets/CrownOfExodus/Crown_Of_Exodus_2.png";
import crownOfExodusScreenshot3 from "../assets/CrownOfExodus/Crown_Of_Exodus_3.png";
import crownOfExodusIntro from "../assets/CrownOfExodus/Blue_Kingdom_Boss_Demo.mp4";
import crownOfExodusBoss from "../assets/CrownOfExodus/Intro_Cutscene.mp4";


import soarDragonLocomotionImage from "../assets/Soar_Thumbnail.png";
import roamieImage from "../assets/RoamieThumbnail.png";
import researchImage from "../assets/ResearchThumbnail.png";
import aniverseImage from "../assets/AniVerse.png";
import chessPal from "../assets/ChessPal.png";

//Project Not Zelda Imports
import notZelda from "../assets/ProjectNotZelda.png";
import notZeldaScreenshot1 from "../assets/Project-Not-Zelda/Project-Not-Zelda-Screenshot1.png";
import notZeldaScreenshot2 from "../assets/Project-Not-Zelda/Project-Not-Zelda-Screenshot2.png";
import notZeldaArrowVideo from "../assets/Project-Not-Zelda/Project-Not-Zelda-Arrow-Combat.mp4";


import compGraphics from "../assets/CompGraphics.png";
import cryptRaider from "../assets/CryptRaider.png"
import animalHeroes from "../assets/AnimalHeroes.png";
import waterLevel from "../assets/WaterLevelDetection.png";
import eventApp from "../assets/EventTracker.png";


export const projects = [
    {
        id: "dragonLocomotion",
        title: "Soar: A Dragon Locomotion Prototype",
        subtitle: "Soaring into new territory",
        description:
            "An Unreal Engine 5 gameplay programming prototype exploring momentum-based dragon movement, flight, diving, and aerial control.",
        category: "Game Development",

        image: soarDragonLocomotionImage,

        technologies: [
            "Unreal Engine 5",
            "C++",
            "Git",
        ],

        demo: "https://your-demo-url.com",
        github: "https://github.com/IshKwayisi1232004/Dragon-Locomotion-Prototype",

        type: "Game Development",
        role: "Software Engineer",
        timeframe: "July 2026 - Present",
        development: "Solo",
        status: "In Development",

        media: [
            {
                type: "image",
                src: soarDragonLocomotionImage,
                alt: "Hero image"
            }
        ],

        sections: {
            project: [
                "Soar: A Dragon Locomotion Prototype is a 3D gameplay systems prototype designed to learn momentum-based gameplay mechanics amd game states. The player controls a dragons character and can transition into 6 different states dependent on their input.",

                "Video demo releasing September 4th on YouTube."
            ],
            designAndDevelopment: {
                introduction: [
                    "As a gameplay programmer and Dragon Locomotion, I designed and implemented a custom movement system in Unreal Engine 5 using C++. The prototype focuses on momentum-based dragon locomotion across ground and aerial movement, with 6 locomotion states: Grounded, Taking Off, Flying, Gliding, Diving, and Landing. I implemented the systems responsible for transitioning between these states while maintaining responsive player control and preserving movement momentum during aerial transitions.", 

                    "The project was designed as an exploration creature locomotion and movement programming in Unreal Engine. I used the Enhanced Input system for player controls and worked with Unreal Engine's Character Movement framework to implement walking, running, sprinting, jumping, and custom aerial movement. A major focus of the prototype was creating transitions that preserved the player's existing momentum rather than resetting movement when entering flight."

                ],

                gameplaySystems: [ 
                    { 
                        name: "Locomotion State System", 
                        description: "Implemented 6 locomotion states—Grounded, TakingOff, Flying, Gliding, Diving, and Landing—to control the dragon's movement behavior." 
                    }, 
                    { 
                        name: "Ground Movement", 
                        description: "Implemented walking, running, sprinting, and jumping using Unreal Engine's Character Movement framework." 
                    }, 
                    { 
                        name: "Momentum-Based Flight", 
                        description: "Developed aerial movement that preserves the dragon's existing movement momentum when transitioning from ground movement into flight." 
                    }, 
                    { 
                        name: "Flight Charging", 
                        description: "Implemented a charge-based aerial movement mechanic capable of increasing the dragon's movement speed to 900 units per second." 
                    }, 
                    { 
                        name: "Enhanced Input", 
                        description: "Configured Unreal Engine's Enhanced Input system to handle keyboard and controller-based movement and gameplay actions." 
                    }, 
                    { 
                        name: "Camera Follow", 
                        description: "Implemented a third-person camera system that follows the dragon while supporting ground and aerial movement." 
                    }, 
                    { 
                        name: "Movement Debugging", 
                        description: "Used Unreal Engine logging and iterative debugging to diagnose movement-state transitions, input mapping, and aerial momentum behavior." 
                    } 
                ]
            },
            implementation: [
                "Soar: A Dragon Locomotion prototype was developed in Unreal Engine 5 using C++. I built the movement system around 6 distinct locomotion states: Grounded, Taking Off, Flying, Gliding, Diving and Landing. Each state controls a different aspect oif the dragon's movement and provides a structured foundation for exapnding the locomotion system with additional mechanics.",

                "For ground movement, I implemented walking and running with movement speeds of 250 and 500 units per second, respectively. I also implemented a charge movement state with a target speed of 900 units per second. These values provided distinct movement behaviors while allowing the same underlying movement system to transition between locomotion states.",

                "A major technical challenge was preserving momentum when transitioning from ground movement into flight. I implemented logic that carries the dragon's existing momentum into the ariel state rather than resetting it, allowing the player to launch into flight while maintaining existing momentum generated during ground movement.",

                "I used Unreal Engine's Enhanced Input system to map player movement and pameplay actions while supporting keyboard and controller input. I also used Unreal Engine's Character Movement framework as the foundation for the dragon's ground locomotion and extended it with custom gameplay logic for the prototytpe's aerial movement.",

                "Throughout development, I used Unreal Engine's logging and debugging tools to identify and resolve issues with movement transitions, input mapping, pitch control and momentum preservation. The project is maintained with Git and GitHub for source control and version management."
            ],
            challenges: [
                "One of the major challenges during development accurately and smoothly transitioning the player character from ground to ariel and vice-versa. After running a few tests on new implementations regarding the transition states, I found that my player would stuck in one state and not transition to the other. For example, when I implemented the return to ground movement after touching the ground while in flight, the player character would persist in the flight state. To solve this issue, I first used Unreal Engine's logging to identify the MovementMode of the player and diagnosed that despite the player touched the ground, the Unreal's CharacterMoveComponent still identified the player in flight mode. This enabled me to use a line trace from the player capsule to detect how far the player is from the ground and if line trace hit the ground, the player would transition into ground mode. From this, I learned about the significance of using Unreal Engine's logging to identify issues quickly and iterate on intial implementations.", 
                
                "Another challenge that I encountered was perserving ground velocity (from the four ground states: idle, walk, run, charge) into flight. The issue at first was that whenever I would transition into flight, the player character would perserve their velocity when either walking, running or charging. Instead they'd use the default speed from the idle state. What I did to solve the issue was have Unreal capture the velocity speed of the player at the moment they transition into flight. In imnplementation, I set the GetCharacterMovement()->MaxFlySpeed to the current FlightSpeed and clamped it to prevent an unreasonable amount of speed to be generated. From this, I lreaned how to preserve velocity when the player is transitions into a new state amd prevent potentially unpredictable calculations."
            ],
            future: "The next step for me is to focus using the custom built ground and ariel locomotion I built and transform it into its own component system. I want to explore this avenue because it would allow me to create behavior that Unreal Engine does not provide and makes my system reusable. Which I value, since my ultimate goal is to present this as a plugin in the Unreal Engine asset store."
        }
    },
    {
        id: "aniverse",
        title: "AniVerse",
        subtitle: "A full-stack anime discovery and tracking platform.",
        description:
            "A full-stack web application that allows users to discover, search, filter, and rate anime while managing personalized content through user accounts.",
        category: "Web Development",

        image: aniverseImage,

        technologies: [
            "Angular",
            "TypeScript",
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "REST API",
            "Jikan API",
            "Git"
        ],

        demo: null,

        github: "https://github.com/IshKwayisi1232004/Anime_Website",

        type: "Web Application",
        role: "Full-Stack Developer",
        development: "Solo",
        timeframe: "July 2026 - Present",
        status: "In Progress",

        media: [
            {
                type: "image",
                src: aniverseImage,
                alt: "AniVerse"
            }
        ],

        sections: {
            project: [
                "AniVerse is a full-stack anime discovery and tracking platform inspired by applications such as MyAnimeList, Letterboxd, and Backlogged. The application allows users to browse anime, search and filter titles, view detailed information, and manage personalized ratings through user accounts.",

                "The project was built from scratch to provide hands-on experience designing and connecting a modern frontend, backend REST API, external API integration, authentication, and relational database."
            ],

            designAndDevelopment: {
                introduction: [
                    "AniVerse was designed as a full-stack anime discovery and tracking platform, allowing users to browse anime, search for specific titles, filter results, and maintain personalized ratings through their accounts."
                ],

                coreFeatures: [
                    {
                        name: "Anime Discovery",
                        description: "Allows users to browse anime and explore available titles through dynamically retrieved content."
                    },
                    {
                        name: "Search and Filtering",
                        description: "Provides users with tools to search for anime and narrow results based on available criteria."
                    },
                    {
                        name: "User Accounts",
                        description: "Allows users to create accounts and maintain personalized anime-related data."
                    },
                    {
                        name: "Anime Ratings",
                        description: "Enables users to rate anime and associate their ratings with their accounts."
                    }
                ]
            },

            implementation: [
                "The frontend was developed using Angular and TypeScript, with reusable components responsible for displaying anime information, handling user interactions, and managing application state.",

                "The backend was developed using Java and Spring Boot. I designed RESTful endpoints to provide a structured interface between the frontend, application logic, database, and external anime API.",

                "AniVerse integrates the Jikan REST API to retrieve dynamic anime information rather than relying on static mock data. This required creating a data flow between the external service, Spring Boot backend, and Angular frontend.",

                "PostgreSQL is used to persist application and user-related data. The relational structure allows users, anime, and ratings to be associated while maintaining a scalable foundation for additional features.",

                "I also implemented caching around anime searches to reduce unnecessary requests to the external API and improve the application's data retrieval process."
            ],

            challenges: [
                "One of the major challenges was replacing static mock data with data from the Jikan API while maintaining a clean separation between the external service and the frontend. Rather than having Angular communicate directly with the external API, I designed the Spring Boot backend to act as the intermediary between the application and external data source.",

                "Another challenge was designing the relationships between users, anime, and ratings. This required thinking about how data should be represented relationally and how the backend should expose that information through REST endpoints."
            ],

            future: [
                "AniVerse is still under active development. Future work includes continuing to refine the user experience, expanding personalization features, improving caching and API performance, and preparing the application for deployment."
            ]
        }
    },
    {
        id: "roamie",
        title: "Roamie",
        subtitle: "Roam together.",
        description:
            "A location-based web game that transforms real-world exploration into an interactive multiplayer experience.",
        category: "Web Development",

        image: roamieImage,

        technologies: [
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "REST API",
            "JWT",
            "Zod",
            "Git"
        ],

        demo: null,

        github: "https://github.com/Paymvi/Capstone_Project",

        type: "Web Application / Game",
        role: "Backend Developer",
        development: "3-Person Team",
        timeframe: "2025 - 2026",
        status: "Completed",

        media: [
            {
                type: "image",
                src: roamieImage,
                alt: "Roamie"
            }
        ],

        sections: {
            project: [
                "Roamie is a location-based web game designed to encourage players to connect with their local surroundings and each other through real-world exploration. Players discover nearby locations that become interactive item drops, allowing them to collect and trade personalized collectibles for their animal avatar.",

                "The project was developed as a capstone project by a three-person team. I focused primarily on the backend architecture and development, building the systems responsible for authentication, gameplay data, inventory, customization, geolocation, and administrative functionality."
            ],

            designAndDevelopment: {
                introduction: [
                    "Roamie is a location-based web game designed to encourage players to explore their local area while interacting with other players through collectible items and animal avatars."
                ],

                coreFeatures: [
                    {
                        name: "Authentication",
                        description: "Implemented account registration, login, session management, and role-based access controls."
                    },
                    {
                        name: "Location-Based Gameplay",
                        description: "Connects gameplay interactions to real-world locations, allowing players to discover interactive item drops while exploring their surroundings."
                    },
                    {
                        name: "Inventory System",
                        description: "Allows players to collect, manage, and interact with items discovered through gameplay."
                    },
                    {
                        name: "Avatar Customization",
                        description: "Allows players to personalize their animal avatars using collected items."
                    },
                    {
                        name: "Admin Tools",
                        description: "Provides administrative functionality for managing game data and monitoring system activity."
                    }
                ]
            },

            implementation: [
                "Roamie's backend was developed using Node.js and Express, with PostgreSQL providing persistent relational data storage. I designed RESTful endpoints to allow the frontend to interact with authentication, player data, gameplay systems, inventory, customization, and administrative functionality.",

                "I implemented JWT-based authentication with HttpOnly cookies to securely maintain authenticated sessions while reducing exposure of authentication tokens to client-side scripts. Role-based authorization was also used to restrict administrative functionality.",

                "Input validation was handled using Zod to ensure that incoming API requests matched the expected structure before reaching application logic or database operations.",

                "I implemented rate limiting, account lockouts, SQL injection detection, security logging, and automated IP blocking to strengthen the backend against common forms of abuse and malicious requests.",

                "The backend architecture was designed around separate responsibilities for routing, validation, authentication, database interaction, and gameplay logic. This helped keep the API maintainable as additional gameplay features were introduced."
            ],

            challenges: [
                "One of the major challenges was designing a backend that could support both traditional web application functionality and location-based gameplay. The API needed to handle user accounts and persistent data while also supporting interactions based on a player's real-world location.",

                "Security was another major consideration. Because Roamie handles user accounts and gameplay data, I needed to consider how malicious requests could affect the application. This led to implementing multiple layers of protection, including validation, rate limiting, account lockouts, SQL injection detection, security logging, and automated IP blocking.",

                "Working within a three-person team also required careful coordination between frontend and backend development. Establishing clear API contracts and communicating changes helped reduce integration issues as development progressed."
            ],

            future: [
                "Roamie was developed as a capstone project, and the completed project provides a foundation for expanding its location-based gameplay, social features, and collectible systems in the future."
            ]
        }
    },
    {
        id: "phishing-ml",
        title: "Phishing URL Detection with Machine Learning",
        subtitle: "Case Study of lexical feature engineering for phishing detection",
        description: "An empirical study of lexical feature engineering, logistic regression, and classification threshold tradeoffs for phishing URL detection.",
        category: "AI/ML",
        image: researchImage,
        type: "Machine Learning / Security Research",
        role: "ML Researcher",
        timeframe: "Academic Research Project",
        development: "2-person team",
        status: "Completed",

        technologies: [
            "Python",
            "Pandas",
            "Scikit-learn",
            "Matplotlib",
            "Seaborn",
            "Jupyter Notebook"
        ],

        github:"https://github.com/IshKwayisi1232004/Phishing_ML_Project ",

        media: [
            {
                type: "image",
                src: researchImage,
                alt: "Hero image"
            }
        ],

        sections: {
            project: [
                "This project investigates whether lexical characteristics extracted directly from URLs can be used to distinguish phishing websites from legitimate websites. The research evaluates a logistic regression classifier and examines how feature selection and classification thresholds affect phishing detection performance.",
                
                "Using the StealthPhisher dataset, the project analyzes URL characteristics such as length, dots, hyphens, digits, HTTPS usage, and the presence of terms such as login and verify. Multiple experiments were conducted to evaluate model performance and investigate the tradeoffs between detecting phishing URLs and generating false positives."
            ],

            designAndDevelopment: {
                introduction: [
                    "The project was designed as an empirical machine-learning experiment rather than a production phishing detection system. The analysis follows a repeatable workflow consisting of data preprocessing, lexical feature engineering, model training, evaluation, and comparison of different model configurations."
                ],

                coreFeatures: [
                    {
                        name: "Lexical Feature Engineering",
                        description: "Extracted URL-level characteristics including URL length, dot count, hyphen count, digit count, HTTPS presence, and security-related keywords."
                    },
                    {
                        name: "Logistic Regression Classification",
                        description: "Trained logistic regression models to classify URLs as either phishing or legitimate."
                    },
                    {
                        name: "Model Evaluation",
                        description: "Evaluated model performance using accuracy, precision, recall, F1-score, confusion matrices, ROC curves, and AUC."
                    },
                    {
                        name: "Threshold Analysis",
                        description: "Experimented with classification thresholds to study how changing the decision boundary affected phishing recall, precision, and overall accuracy."
                    },
                    {
                        name: "Feature Importance Analysis",
                        description: "Examined logistic regression coefficients to identify which lexical characteristics contributed most strongly to phishing classification."
                    }
                ]
            },

            implementation: [
                "The analysis was implemented in Python using Pandas for data preparation and Scikit-learn for machine-learning operations. URL strings were normalized and transformed into numerical features before being divided into training and testing datasets using an 80/20 split.",
                
                "Logistic regression was used as the primary classification algorithm. The first experiment achieved 87% accuracy and an AUC of 0.92 using the selected lexical features. The model also achieved 96% precision and approximately 79% recall for the phishing class.",
                
                "Additional experiments adjusted the classification threshold and removed HTTPS from the feature set to investigate how individual features influenced model behavior. Removing HTTPS reduced the model's AUC from 0.92 to 0.85 and phishing recall from approximately 79% to 69%, demonstrating the substantial influence of HTTPS within this dataset."
            ],

            challenges: [
                "One of the primary challenges was determining which URL characteristics provided meaningful predictive value. Initial experiments included several structural features, requiring analysis of model coefficients and performance metrics to understand which features contributed most strongly to classification.",
                
                "Another challenge was interpreting the effect of classification thresholds. Rather than treating accuracy as the only measure of success, I compared precision and recall to understand how changing the decision threshold could alter the balance between missed phishing URLs and incorrectly flagged legitimate URLs.",
                
                "The experiments also revealed an important limitation of the dataset. HTTPS was strongly associated with legitimate URLs in the dataset, while a substantial portion of phishing URLs also used HTTPS. This demonstrated how a model can learn dataset-specific patterns that may not generalize well to modern phishing attacks."
            ],

            future: [
                "Future work could expand the feature set, evaluate additional machine-learning algorithms, and investigate deep-learning approaches. A production-oriented version could also explore real-time URL analysis and evaluation against more recent phishing datasets to reduce dependence on historical dataset characteristics."
            ]
        }
    },
    {
        id: "crownOfExodus",
        title: "Crown of Exodus",
        subtitle: "Become the hero and save the world!",
        description: "A Unity 2D turn-based RPG building upon lessons from Project Not Zelda while exploring a different genre through turn-based combat, NPC interactions, gradual difficulty progression, and enemy type advantages.",
        category: "Game Development",

        image: crownOfExodus,

        technologies: [
            "C#",
            "Unity",
            "GitHub"
        ],

        demo: "https://ishmael-kwayisi.itch.io/the-crown-of-exodus",
        github: "https://github.com/aqhoang2005/CS250SprintsProject",

        type: "Game Development",
        role: "Lead Game Programmer and Scrum Master",
        timeframe: "Aug. 2024 - Dec. 2024",
        development: "5-Person Team",
        status: "Completed",

        media: [
            {
                type: "image",
                src: crownOfExodus,
                alt: "Hero image"
            },
            {
                type: "image",
                src: crownOfExodusScreenshot1,
                alt: "Hero image"
            },
            {
                type: "image",
                src: crownOfExodusScreenshot2,
                alt: "Hero image"
            },
            {
                type: "image",
                src: crownOfExodusScreenshot3,
                alt: "Hero image"
            },
            {
                type: "video",
                src: crownOfExodusBoss,
                alt: "Hero image"
            },
            {
                type: "video",
                src: crownOfExodusIntro,
                alt: "Hero image"
            }
        ],

        sections: {
            project: [
                "The Crown of Exodus is a 2D turn-based RPG designed to capture the spirit of classic role-playing games through a compelling gameplay loop and structured narrative. The story follows a young adult named Akeru, who travels across two factions to recover the crown jewels of their leaders. The jewels are needed to power a rocket that will allow Akeru to escape an increasingly polluted and dying planet."
            ],
            designAndDevelopment: {
                introduction: [
                    "As the lead gameplay programmer, I was responsible for designing and implementing the core gameplay systems that drive The Crown of Exodus. I developed the game's turn-based combat, character movement, enemy and boss AI, dialogue choices, difficulty scaling, scene transitions, and game-state systems using Unity and C#.",

                    "I also served as the Scrum Master for part of the project, helping organize development tasks, coordinate team progress, and keep the team focused on completing gameplay milestones. This gave me experience balancing technical responsibilities with project coordination and team communication."
                ],

                gameplaySystems: [
                    {
                        name: "Turn-Based Combat",
                        description: "Designed and implemented the core combat loop, allowing players and enemies to take actions based on turn order."
                    },
                    {
                        name: "Character Movement",
                        description: "Implemented player movement and navigation between gameplay areas."
                    },
                    {
                        name: "Enemy & Boss AI",
                        description: "Developed enemy and boss behaviors to provide different combat encounters and challenges."
                    },
                    {
                        name: "Dialogue Choices",
                        description: "Implemented dialogue interactions that allow players to make choices during conversations."
                    },
                    {
                        name: "Difficulty Scaling",
                        description: "Created systems that adjust gameplay difficulty as the player progresses through the game."
                    },
                    {
                        name: "Scene Transitions",
                        description: "Implemented transitions between different game scenes and gameplay areas."
                    },
                    {
                        name: "Pause / Play / Game Over",
                        description: "Developed the game's core state-management systems for pausing, resuming, and ending gameplay."
                    }
                ],

                scrumMaster: [
                    "As Scrum Master, I helped organize the team's development process by coordinating tasks, communicating progress, and helping identify issues that could prevent the team from completing its goals.",

                    "Balancing the Scrum Master role with my responsibilities as the lead gameplay programmer required me to communicate technical requirements while also keeping the team's development process organized. This experience helped me better understand how technical development and team coordination influence one another."
                ]
            },
            implementation: [
                "The Crown of Exodus was developed in Unity using C#. I structured the game's gameplay systems around individual responsibilities, allowing combat, character behavior, enemy AI, dialogue, difficulty, and game-state management to operate as separate systems while communicating with one another.",

                "The turn-based combat system was designed around a defined gameplay loop in which the player selects an action, the corresponding action is executed, and control is then passed to the appropriate enemy or game state. This structure allowed different character and enemy behaviors to participate in the same combat system while maintaining distinct abilities and statistics.",

                "For the enemy and boss systems, I used C# object-oriented programming principles to create reusable behaviors while allowing individual enemy types to maintain their own characteristics. This made it possible to introduce different enemy encounters without duplicating the underlying gameplay logic.",

                "I also implemented dialogue choices, difficulty scaling, scene transitions, and game-state management to connect the individual gameplay systems into a cohesive gameplay loop. Throughout development, I used Unity's documentation and C# programming concepts to troubleshoot issues and refine the systems through iterative playtesting."
            ],
            challenges: [
                "During development of The Crown of Exodus, one of the biggest challenges was ensuring the correct enemy types appeared during gameplay. When my team and I playtested the game, there were many moments were we triggered a battle with enemies and the incorrect enemy types or their stats where incorrect. To solve this issue, I used inheritance and public variables to 2 different reasons. In my implementation, I used inheritance to treat the different enemies in uniform (polymorphism). Making development with each enemy type more flexible and distinguishable, rather than using the same enemy class. While I used public variables to manipulate the value of either the attack power, defense, etc., in the component heirarchy for the respective enemy. This proved successful as enemy types appeared and completed the right attack sequences. From this moment, I learned how to effectively use inheritance and public variables appropriately to increase development speed and execute a modular dwsign to the program.",
                "Another challenge that needed to be resovled during production was ensuring there were no bugs buttons actions. In a few a test sessions, we found a bug were the the button presses weren't be identified by the game system. This happened because the trigger area of the box was positioned incorrectly. To fix, this I adjusted the trigger box in the Unity editor and immediately tested the adjustments. In addiition, I added distinct messages to indicate which actions the player acted upon to enhance player feedback. After solving this challenge, I learned how to raipdly prototype and test for bugs immediately after implementing new features. I also realized that a better approach could have been to have the player choose their actions in turn-based comabt with controls from the keyboard or controller and have a cursor surrounding the options. In the future, I will use approach and lesson to help build more intuitive gameplay systems and user experience."
            ],
            future: [
                "In the future, I would like to focus on testing and improving the performance of the game. Improving an aspect, such as running the frame rate at a consistent pace of 120 fps. I want to touch upon this because its important for a game  satisfy the player's needs in not just gameplay features, but ehind the scenes while the game us running. "
            ]
        }
    },
    {
        id: "chessPal",
        title: "ChessPal",
        subtitle: "An AI-powered chess companion.",
        description:
            "A web-based chess application that combines traditional chess gameplay with AI-powered assistance.",
        category: "Web Development",

        image: chessPal,

        technologies: [
            "JavaScript",
            "Node.js",
            "Express",
            "OpenAI API",
            "Chess.js",
            "HTML",
            "CSS",
            "Git"
        ],

        demo: null,

        github: "https://github.com/Paymvi/ChessPal",

        type: "Web Application",
        role: "Full-Stack Developer",
        development: "Solo",
        timeframe: "2026",
        status: "Completed",

        media: [
            {
                type: "image",
                src: chessPal,
                alt: "ChessPal"
            }
        ],

        sections: {
            project: [
                "ChessPal is a web-based chess application that combines traditional chess gameplay with AI-powered assistance. The project explores how an AI system can be integrated into an interactive application to provide users with a more conversational and educational chess experience.",

                "I developed the application from the ground up, including the frontend interface, backend server, chess functionality, and integration with the OpenAI API."
            ],

            designAndDevelopment: {
                introduction: [
                    "ChessPal was designed as an interactive chess application that combines traditional chess gameplay with AI-powered assistance."
                ],

                coreFeatures: [
                    {
                        name: "Chess Gameplay",
                        description: "Provides an interactive chessboard for users to play and manage chess games."
                    },
                    {
                        name: "AI Assistance",
                        description: "Integrates AI functionality to provide users with intelligent feedback and assistance during chess sessions."
                    },
                    {
                        name: "Game State Management",
                        description: "Tracks the current state of the chessboard, player turns, and game progression."
                    }
                ]
            },

            implementation: [
                "The application uses a Node.js and Express backend to provide an intermediary between the frontend and the OpenAI API. This keeps API communication and sensitive configuration on the server rather than exposing it directly to the client.",

                "I used JavaScript to manage the application's frontend interactions and communicate with the backend API. The chess state is maintained as users interact with the board and make moves.",

                "The OpenAI API is integrated into the backend to provide AI-powered functionality. Requests from the application are processed by the server before being sent to the external AI service, allowing the application to control how AI functionality is exposed to the user.",

                "The application was structured so that the chess functionality and AI functionality remain separate concerns. This makes it easier to modify or extend either system without tightly coupling the core chess experience to the AI service."
            ],

            challenges: [
                "One of the primary challenges was determining how to integrate an external AI service into an interactive application without making the AI functionality responsible for the core game logic. I addressed this by keeping the chess state and gameplay functionality separate from the AI communication layer.",

                "Another challenge was handling communication between the frontend, backend, and external API. Structuring the application around a dedicated backend allowed me to control requests to the AI service while keeping sensitive configuration out of the frontend."
            ],

            future: [
                "Future improvements could include deeper chess analysis, more contextual AI feedback based on the current board position, additional game modes, and expanded functionality for players who want to use ChessPal as a learning tool."
            ]
        }
    },
    {
        id: "projectNotZelda",
        title: "Project Not Zelda",
        subtitle: "P.S. This is definitely not a Zelda clone",
        description:
            "A Unity gameplay programming prototype demonstrating level design, game systems and game A.I.",
        category: "Game Development",

        image: notZelda,

        technologies: [
            "Unity",
            "C#",
            "GitHub",
            "Visual Studio", 
            "Aesprite",
            "Pixlr"
        ],

        demo: "https://ishmael-kwayisi.itch.io/project-not-zelda",
        github: "https://github.com/IshKwayisi1232004/Project-Not-Zelda-it145",

        type: "Game Development",
        role: "Lead Game Programmer and Designer",
        timeframe: "Jan. 2024 - Apr. 2024",
        development: "4-Person Team",
        status: "Finished",

        media: [
            {
                type: "image",
                src: notZelda,
                alt: "Hero image"
            },
            {
                type: "image",
                src: notZeldaScreenshot1,
                alt: "Pause menu"
            },
            {
                type: "image",
                src: notZeldaScreenshot2,
                alt: "Player sword attack"
            },
            {
                type: "video",
                src: notZeldaArrowVideo,
                alt: "Player shooting arrows in dungeon room"
            }
        ],

        sections: {
            project: "Projct Not Zelda is a 2D Action-Adventure game that explores 2D game development design and implementation. The narrative follows the adventurer, Chet, as he traverses through a dungeon, battling various monsters. Help Chet battle his way through challenges save his land with the legendary artifact, The Orb of Power.",
            designAndDevelopment: {
                introduction: [
                    "As a gameplay programmer and level designer, I was responsible for designing and implementing several of the core systems that drive the game's moment-to-moment gameplay. I developed 8 gameplay systems in Unity using C#, including Player Movement, Player Attack, Player Damage, Hit Points, Pause/Play/Game Over, Enemy AI, Enemy Damage, and Score Management. These systems work together to handle player interactions, combat, enemy behavior, health, game states, and progression throughout the game.",

                    "In addition to programming, I served as the level designer for the project. I created concept level layouts that established the structure, progression, enemy encounters, and overall flow of each area. These concepts were then provided to our artist as references for creating the final environments and sprites in sprite-design software. This allowed me to contribute to both the technical gameplay systems and the overall player experience."
                ],

                gameplaySystems: [
                    {
                        name: "Player Movement",
                        description: "Implemented the player's movement and navigation."
                    },
                    {
                        name: "Player Attack",
                        description: "Developed the player's combat and attack behavior."
                    },
                    {
                        name: "Player Damage",
                        description: "Handled interactions where the player takes damage."
                    },
                    {
                        name: "Hit Points",
                        description: "Implemented health tracking for gameplay entities."
                    },
                    {
                        name: "Pause / Play / Game Over",
                        description: "Created the game's core state-management system."
                    },
                    {
                        name: "Enemy AI",
                        description: "Implemented enemy behavior and gameplay interactions."
                    },
                    {
                        name: "Enemy Damage",
                        description: "Developed the system for enemies dealing damage to the player."
                    },
                    {
                        name: "Score Manager",
                        description: "Managed scoring and progression based on gameplay events."
                    }
                ],

                levelDesign: [
                    "I also designed the game's levels from a gameplay perspective. I created concept layouts to establish room structure, player progression, enemy placement, and encounter flow.",

                    "These designs served as references for the artist when creating the final environments and sprites, allowing the gameplay vision to translate into the finished 2D levels."
                ]
            },
            implementation: [
                "The game was developed in Unity using C#, with each gameplay system organized around a specific responsibility. I implemented the player, enemy, health, combat, game-state, and scoring systems as separate components that could interact with one another during gameplay. This component-based approach allowed individual systems to be developed and tested independently while still working together to create the complete gameplay loop.",
                "For player and enemy interactions, I used Unity's 2D physics and collision systems to detect interactions between gameplay objects. The damage and Hit Points systems handled health changes and determined when characters should be defeated, while the Enemy AI used game-state and player information to determine enemy behavior.",
                "I also implemented the game's Pause/Play and Game Over states, allowing the game to transition between active gameplay, paused gameplay, and the end of a run. The Score Manager tracked gameplay events and updated the player's score as they progressed through the level.",
                "Throughout development, I used Unity's documentation and C# scripting to research unfamiliar APIs and develop the logic required for the game's systems. I also used GitHub for source control and collaboration with the rest of the development team."
            ],
            challenges: [
                "One of the biggest challeneges during development was managing GitHub. The use of GitHub was either new to a lot of us or experience was very minimal. This caused a lot of confusion surrounding commits, add/deleted assets and various conflicts in the source files. To mitigate the issues, we communicated more often about the changes being made before committing and pushing to the repository. After this experience, I learned about meticulous commmunication with team members. And I also learned that there are cleaner ways of handling a project repository, as I would later learn how to use Git.",
                "As the lead programmer, I was in charge of programming and directing the various systems for our game. This was only my second time using Unity and C#, but it was my first time trying to teach it to others and in a 2D environment. To direct and teach my teammates, I used class time as an opportunity to discuss the inner workings of Unity and how to program in C#; while also leaving notes and comments within lines in the script. Additionally, to improve my scripting abilities, I looked into a lot of documentation on the official Unity page and designed multiple algorithms around the 2D vector. Overall, I learned how to adapt to being in a leadership role and exercised my problem solving skills in an unfamilar project environment."
            ],
            future: 
            ["At the moment, there are no plans among me and my team members to revist the the project. However, a few team members and I have expressed working together again on a 2D game with the lessons learned from this project.",
            ]
        }
    },
    {
        id: "compGraphics",
        title: "Computer Graphics Final Project",
        subtitle: "--------------",
        description:
            "An Unreal Engine 5 gameplay programming prototype exploring momentum-based dragon movement, flight, diving, and aerial control.",
        category: "Computer Graphics",

        image: compGraphics,

        technologies: [
            "Unreal Engine 5",
            "C++",
            "Git",
        ],

        demo: "https://your-demo-url.com",
        github: "https://github.com/IshKwayisi1232004/Computer_Visuals_Graphics_Portfolio",

        type: "Computer Graphics",
        development: "Solo",
        status: "In Progress",

        sections: {
            project: "...",
            designAndDevelopment: "...",
            implementation: "...",
            challenges: "...",
            future: "..."
        }
    },
    {
        id: "cryptRaider",
        title: "Crypt Raider",
        subtitle: "Raid the Crypt to escape",
        description:
            "An Unreal Engine 5 gameplay programming first-person puzzle adventure prototype exploring line tracing, C++ delegates, enhanced input system, components, dynamic lighting, pressure plates, and item pickups.",
        category: "Game Development",

        image: cryptRaider,

        technologies: [
            "Unreal Engine 5",
            "C++",
            "GitHub",
        ],

        demo: "https://youtu.be/-aq6ZBmH-2k",
        github: "https://github.com/IshKwayisi1232004/CryptRaider",

        type: "Game Development",
        role: "Game Programmer", 
        timeframe: "Dec. 2024 - Jan. 2025",
        development: "Solo",
        status: "Completed",

        media: [
            {
                type: "image",
                src: cryptRaider,
                alt: "Hero image"
            }
        ],

        sections: {
            project: "Crypt Raider is 3D first-person puzzle adventure protoype 3D game development programming and implementation. In this prototype, the player must find objects in their surroundings to place uppon pressure plates to escape the crypyt.",
            designAndDevelopment: {
                introduction: [
                    "As a gameplay programmer, I was responsible for designing and implementing several of the core systems that drive Crypt Raider's moment-to-moment gameplay. I developed gameplay systems in Unreal Engine 5 using C++, including first-person player movement, object interaction, item pickups, pressure plates, dynamic lighting, and gameplay state management. These systems work together to create the game's exploration and puzzle-solving mechanics while demonstrating the use of Unreal Engine's input, collision, component, and event-driven systems.",

                    "The project also gave me experience designing gameplay around modular and reusable systems. Rather than implementing each interaction as a self-contained mechanic, I structured functionality around Unreal Engine components and event-driven communication, allowing gameplay objects to respond to player interactions and changes in the environment. This approach helped keep the systems organized while making it easier to expand the prototype with additional puzzles and interactions."
                ],

                gameplaySystems: [ 
                    { 
                        name: "Player Movement", 
                        description: "Implemented first-person player movement and navigation using Unreal Engine's Enhanced Input system." 
                    }, 
                    { 
                        name: "Object Interaction", 
                        description: "Developed a line-tracing interaction system that allows the player to detect and interact with objects in the environment." 
                    }, 
                    { 
                        name: "Item Pickups", 
                        description: "Implemented collectible item interactions that allow the player to acquire objects required for puzzle progression." 
                    }, 
                    { 
                        name: "Pressure Plates", 
                        description: "Created pressure plate interactions that respond to objects placed on them to trigger environmental gameplay events." 
                    }, 
                    { 
                        name: "Dynamic Lighting", 
                        description: "Implemented dynamic lighting behavior that responds to gameplay interactions and environmental events." 
                    }, 
                    { 
                        name: "C++ Delegates", 
                        description: "Used C++ delegates to communicate gameplay events between systems while reducing direct dependencies between components." 
                    }, 
                    { 
                        name: "Actor Components", 
                        description: "Organized reusable gameplay functionality into Unreal Engine actor components to promote modular system design." 
                    }, 
                    { 
                        name: "Gameplay State", 
                        description: "Implemented gameplay state behavior to manage transitions between active gameplay and other game states." 
                    } 
                ], 
                levelDesign: 
                [ 
                    "I also contributed to the game's level design by structuring the environment around exploration and puzzle-solving. I designed room layouts and gameplay sequences that introduced mechanics progressively, requiring the player to identify interactive objects, manipulate the environment, and use collected items to advance.", 
                    "The level design was closely connected to the gameplay systems I implemented. Pressure plates, item pickups, lighting interactions, and environmental objects were positioned to create puzzle sequences that encouraged players to experiment with the mechanics and understand how different systems interacted with one another." 
                ]
            },
            implementation: [
                "Crypt Raider was developed in Unreal Engine 5 using C++, with gameplay functionality organized around modular systems and Unreal Engine components. I implemented the player interaction system using line tracing to detect objects in the player's view, allowing the player to interact with relevant objects without requiring direct references between the player and every interactable actor.",

                "The Enhanced Input system was used to handle player controls and interaction input. This separated input actions from the underlying gameplay logic and provided a flexible foundation for implementing first-person movement and object interaction.",

                "I used C++ delegates to communicate gameplay events between systems. For example, interactions with pressure plates and other environmental objects could trigger changes elsewhere in the level without requiring tightly coupled references between individual gameplay actors. This event-driven approach helped make the systems more modular and reusable.",

                "I also used actor components to separate reusable gameplay functionality from individual actors. This allowed common behaviors to be attached to different gameplay objects while keeping each system responsible for a specific function. Combined with Unreal Engine's collision and interaction systems, this provided the foundation for item pickups, environmental puzzles, and other player interactions.",

                "Throughout development, I used Unreal Engine's documentation and C++ to research unfamiliar APIs and implement the systems required for the prototype. I also used GitHub for source control and version management throughout development."
            ],
            challenges: [
                "In this project, one of the challenges that occured that I had difficulty getting objects such as doors and walls to move once I placed an object on a pedastal. At first, I thought I had to make an event call to the notify the game object that an object has been placed. However, I soon discovered that the implementation became more complicated than it should have been. After this realization, I looked into different ways to address the issue and thats when I encountered dependency injection. By implementing dependency injection, I was able to use the UMOver component to cast the object to move. Form this experience, I learned how to develop object states that are depedent on the actions of the player.",
                "Another challenge I encountered was having the player pickup items. This action was something I was new to in developing in any game engine, which made it difficult to grasp at first... However, after look at documentationa and a few YouTube videos, I decided to use line tracing and sweeping for the objects to be picked up. In implementing this, I learned about the importance in using line tracing and sweeping for the purpose of creating special tasks based on the line's intersection with game objects in the envrionment."
            ],
            future: 
            ["In the future, I want to go back and polish a few gameplay and graphical bugs because for the most part everything works as it should. However, I have noticed that the light from the outside fot Crypt does bleed a bit into the crypt and one of the doors that is meant to open is a bit faulty. I would also like to explore the low-level systems to optimize performance and graphical capabilities.",
            ]
        }
    },
    {
        id: "animal-heroes",
        title: "Animal Heroes",
        subtitle: "For our brave animal companions",
        description: "Full-stack animal rescue data dashboard built with Python, MongoDB, and Dash.", 
        category: "Web Development",
        image: animalHeroes,
        type: "Full-Stack Data Dashboard",
        role: "Developer",
        timeframe: "Academic Project",
        development: "Solo",
        status: "Completed",

        technologies: [
            "Python",
            "MongoDB",
            "PyMongo",
            "Dash",
            "Pandas",
            "Plotly",
            "Jupyter Notebook"
        ],

        github: "https://github.com/IshKwayisi1232004/Client_Server_Dev_Project",

        media: [
            {
                type: "image",
                src: animalHeroes,
                alt: "Hero image"
            }
        ],

        sections: {
            project: [
                "Animal Heroes is a full-stack data management and visualization application designed for Grazioso Salvare, an international rescue-animal training organization. The application provides a centralized interface for querying animal records and identifying dogs that meet specific criteria for different rescue operations.",
                
                "The project combines a MongoDB database with a Python CRUD module and an interactive Dash dashboard. Users can authenticate, filter animal records by rescue type, inspect individual animals, view breed distributions, and access geographic information associated with selected records."
            ],

            designAndDevelopment: {
                introduction: [
                    "The application was designed around the needs of users who need to efficiently search and analyze animal records rather than manually inspect individual database entries. The dashboard therefore combines structured data, filtering controls, visualizations, and geographic information into a single interface."
                ],

                coreFeatures: [
                    {
                        name: "CRUD Database Operations",
                        description: "Implemented Create, Read, Update, and Delete operations through a reusable Python module for interacting with the MongoDB animal collection."
                    },
                    {
                        name: "User Authentication",
                        description: "Added username and password authentication before allowing users to access the animal data dashboard."
                    },
                    {
                        name: "Rescue-Type Filtering",
                        description: "Implemented interactive filters for Water Rescue, Mountain Rescue, Disaster Rescue, and Reset operations using MongoDB queries."
                    },
                    {
                        name: "Interactive Data Table",
                        description: "Created a searchable, sortable, and paginated data table for browsing animal records."
                    },
                    {
                        name: "Breed Visualization",
                        description: "Developed a dynamic pie chart that visualizes the breed distribution of animals returned by the active dashboard filter."
                    },
                    {
                        name: "Animal Geolocation",
                        description: "Implemented an interactive map that displays the geographic location of a selected animal record."
                    }
                ]
            },

            implementation: [
                "The backend data layer was implemented in Python using PyMongo to communicate with MongoDB. A reusable AnimalShelter class encapsulates database operations and exposes Create, Read, Update, and Delete methods, allowing the dashboard to interact with the database without requiring the interface to manage MongoDB operations directly.",
                
                "The client-facing dashboard was developed using Plotly Dash. Dash callbacks connect user interactions to database queries and visual updates, allowing the data table, breed visualization, and geographic map to respond dynamically to user input. Pandas was used to transform MongoDB query results into DataFrames for analysis and visualization.",
                
                "The application also uses Dash Leaflet to display the geographic coordinates associated with selected animal records. Selecting a row in the data table updates the map with the corresponding animal's location."
            ],

            challenges: [
                "One major challenge was resolving database connection failures while implementing user authentication. When the application could not connect despite using the expected credentials, I isolated the issue by testing the MongoDB connection independently through mongosh. After determining that the database environment itself was having connection issues, I restarted the development environment and, when necessary, re-imported the database with the appropriate credentials.",
                
                "Another challenge was becoming comfortable with Python and HTML-based Dash development while having limited prior experience with both technologies. I addressed this by using the development assignments as opportunities to practice the syntax and referencing official documentation while implementing individual features.",
                
                "Implementing the dynamic breed visualization also required debugging the scope of variables used by the callback responsible for generating the chart. I resolved the issue by moving the required data retrieval into the callback and using a local DataFrame, allowing the chart to update correctly whenever the displayed dataset changed."
            ],

            future: [
                "A potential future direction for Animal Heroes would be expanding the dashboard with additional analytics and filtering capabilities, including more detailed rescue statistics, improved authentication, and additional visualizations for analyzing animal characteristics."
            ]
        }
    },
    {
        id: "waterBucket",
        title: "Water Bucket Project",
        subtitle: "--------------",
        description:
            "An Unreal Engine 5 gameplay programming prototype exploring momentum-based dragon movement, flight, diving, and aerial control.",
        category: "Embedded Systems",

        image: waterLevel,

        technologies: [
            "Unreal Engine 5",
            "C++",
            "Git",
        ],

        demo: "https://your-demo-url.com",
        github: "https://github.com/IshKwayisi1232004/Arduino_Projects/tree/main/Water%20Volume%20Project",

        type: "Embedded Systems",
        development: "Solo",
        status: "In Progress",

        sections: {
            project: "...",
            designAndDevelopment: "...",
            implementation: "...",
            challenges: "...",
            future: "..."
        }
    },
    {
        id: "event-tracking-app",
        title: "Event Tracking App",
        subtitle: "A convenient tracking app for important events",
        description: "Android event management application for organizing upcoming events and sending reminders.",
        category: "Mobile Development",
        image: eventApp,
        type: "Android Application",
        role: "Mobile Developer",
        timeframe: "Academic Project",
        development: "Solo",
        status: "Completed",

        technologies: [
            "Java",
            "Android Studio",
            "Room",
            "SQLite",
            "JUnit"
        ],

        github: "https://github.com/IshKwayisi1232004/EventTrackingApp_Kwayisi",

        media: [
            {
                type: "image",
                src: eventApp,
                alt: "Hero image"
            }
        ],

        sections: {
            project: [
                "Event Tracking App is an Android application designed to help users organize and manage upcoming events. Users can create an account, add events, view saved events through a dashboard, edit existing entries, and delete events they no longer need.",
                
                "The application was designed around providing a simple and organized experience for managing event information. Persistent local storage allows event data to remain associated with user accounts rather than being lost when the application is closed."
            ],

            designAndDevelopment: {
                introduction: [
                    "The application design was driven by the core tasks users needed to complete: signing in, entering event information, reviewing saved events, and modifying existing events. I designed the screen layouts before implementing the underlying functionality so that I could identify the required interactions and UI components before writing the application logic."
                ],

                coreFeatures: [
                    {
                        name: "User Accounts",
                        description: "Provides a login and account creation interface for associating saved events with individual users."
                    },
                    {
                        name: "Event Creation",
                        description: "Allows users to enter event information and save it to persistent local storage."
                    },
                    {
                        name: "Event Dashboard",
                        description: "Displays saved events in a centralized dashboard where users can review their upcoming events."
                    },
                    {
                        name: "Event Editing",
                        description: "Allows users to modify information associated with previously saved events."
                    },
                    {
                        name: "Event Deletion",
                        description: "Allows users to remove events from their saved event list."
                    },
                    {
                        name: "Event Reminders",
                        description: "Provides notifications and SMS reminders intended to notify users one day before a saved event occurs."
                    }
                ]
            },

            implementation: [
                "The application was developed in Java using Android Studio. Room was used as the persistence layer over SQLite, providing structured local data storage and DAO-based operations for managing application records.",
                
                "The application follows a multi-screen structure with separate interfaces for authentication, adding events, viewing saved events, and editing existing events. User interaction with the interface triggers the underlying Java functionality responsible for creating, retrieving, updating, and deleting event records.",
                
                "Unit testing was used alongside the Android emulator to evaluate application functionality. The emulator provided a way to test the application from the user's perspective, while unit tests helped verify individual functions and identify problems during development."
            ],

            challenges: [
                "One of the primary design challenges involved deciding how to organize the event creation interface and event dashboard. The original concept separated these functions, but development time constraints required them to be combined. I ultimately placed the dashboard below the event input controls so that entering event information remained the primary action while saved events remained immediately accessible.",
                
                "Another challenge was determining the appropriate functionality needed for each screen before implementation. I addressed this by designing the layouts first and then using Android documentation to determine how the required Java functionality could support each interface element."
            ],

            future: [
                "Future improvements could expand the application with a more polished visual design, additional event information fields, recurring events, improved reminder management, and additional notification options."
            ]
        }
    }
]