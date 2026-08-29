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
        subtitle: "--------------",
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
            project: "...",
            designAndDevelopment: "...",
            implementation: "...",
            challenges: "...",
            learned: "..."
        }
    },
    {
        id: "aniVerse",
        title: "AniVerse",
        subtitle: "--------------",
        description:
            "An Unreal Engine 5 gameplay programming prototype exploring momentum-based dragon movement, flight, diving, and aerial control.",
        category: "Web Development",

        image: aniverseImage,

        technologies: [
            "Angular",
            "Spring Boot",
            "Ionic",
            "Java",
            "PostgreSQL",
            "Docker"
        ],

        demo: "https://your-demo-url.com",
        github: "https://github.com/IshKwayisi1232004/Anime_Website",

        type: "Web Development",
        development: "Solo",
        status: "In Progress",

        sections: {
            project: "...",
            designAndDevelopment: "...",
            implementation: "...",
            challenges: "...",
            learned: "..."
        }
    },
    {
        id: "roamie",
        title: "Roamie",
        subtitle: "Roam Together",
        description:
            "Roamie is a web based game where players connect with their local area and each other by turning nearby places into interactive item drops, allowing players to collect and trade personalized collectibles for their animal avatar through real-world exploration.",
        category: "Web Development",

        image: roamieImage,

        technologies: [
            "React 18",
            "Vite",
            "Node.js v18",
            "React Leaflet",
            "JavaScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Docker",
            "Notion",
            "Capcitator"
        ],

        demo: "https://your-demo-url.com",
        github: "https://github.com/Paymvi/Capstone_Project",

        type: "Web Application",
        role: "Project Manager and Backend Developer",
        timeframe: "Jan. 2026 - Present",
        development: "3-Person Team",
        status: "In Development",

        media: [
            {
                type: "image",
                src: roamieImage,
                alt: "Hero image"
            }
        ],

        sections: {
            project: "...",
            designAndDevelopment: "...",
            implementation: "...",
            challenges: "...",
            learned: "..."
        }
    },
    {
        id: "urlResearch",
        title: "Lexical Feature-Based Phishing Detection Using ML Logistic Regression: Performance and Tradeoff Analysis",
        subtitle: "--------------",
        description:
            "An Unreal Engine 5 gameplay programming prototype exploring momentum-based dragon movement, flight, diving, and aerial control.",
        category: "AI/ML",

        image: researchImage,

        technologies: [
            "Unreal Engine 5",
            "C++",
            "Git",
        ],

        demo: "https://your-demo-url.com",
        github: "https://github.com/IshKwayisi1232004/Phishing_ML_Project",

        type: "AI/ML",
        development: "Solo",
        status: "In Progress",

        sections: {
            project: "...",
            designAndDevelopment: "...",
            implementation: "...",
            challenges: "...",
            learned: "..."
        }
    },
    {
        id: "crownOfExodus",
        title: "Crown of Exodus",
        subtitle: "Become the hero and save the world!",
        description: "2D RPG Game",
        category: "Game Development",

        image: crownOfExodus,

        technologies: [
            "C#",
            "Unity",
            "GitHub"
        ],

        demo: "https://your-demo-url.com",
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
            project: "...",
            designAndDevelopment: "In this project I assumed the role of the lead game programmer, and due to a rotation in the group I was eventually both this and a Scum Master.",
            implementation: "...",
            challenges: "...",
            learned: "At the moment, we have no plans to continue the project. And speaking for myself, I want to focus more 3D game experiences, as 3D games have always been more of my playground. As I (admittedly) find I'm not a fan of lot 2D games; I only like a select few. However, if I'm asked by employers, friends or whom ever to ake a 3D game... I'm open to collaborating because I love video games and I want to make the best kind of games in any persepctive, genre, etc. I'm alwaus willing to take up a challenge when the opportunity presents itself!"
        }
    },
    {
        id: "chessPal",
        title: "ChessPal",
        subtitle: "--------------",
        description:
            "An Unreal Engine 5 gameplay programming prototype exploring momentum-based dragon movement, flight, diving, and aerial control.",
        category: "Web Development",

        image: chessPal,

        technologies: [
            "Unreal Engine 5",
            "C++",
            "Git",
        ],

        demo: "https://your-demo-url.com",
        github: "https://github.com/Paymvi/ChessPal",

        type: "Web Development",
        development: "2-Person Team",
        status: "In Progress",

        sections: {
            project: "...",
            designAndDevelopment: "...",
            implementation: "...",
            challenges: "...",
            learned: "..."
        }
    },
    {
        id: "projectNotZelda",
        title: "Project Not Zelda",
        subtitle: "P.S. This is definitely not a Zelda clone",
        description:
            "An Unity gameplay programming prototype demonstrating level design, game systems and game A.I.",
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

        demo: "https://your-demo-url.com",
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
            learned: 
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
            learned: "..."
        }
    },
    {
        id: "cryptRaider",
        title: "Crypt Raider",
        subtitle: "--------------",
        description:
            "An Unreal Engine 5 gameplay programming prototype exploring momentum-based dragon movement, flight, diving, and aerial control.",
        category: "Game Development",

        image: cryptRaider,

        technologies: [
            "Unreal Engine 5",
            "C++",
            "Git",
        ],

        demo: "https://your-demo-url.com",
        github: "https://github.com/IshKwayisi1232004/CryptRaider",

        type: "Game Development",
        development: "Solo",
        status: "In Progress",

        sections: {
            project: "...",
            designAndDevelopment: "...",
            implementation: "...",
            challenges: "...",
            learned: "..."
        }
    },
    {
        id: "animalHeroes",
        title: "Animal Heroes",
        subtitle: "--------------",
        description:
            "An Unreal Engine 5 gameplay programming prototype exploring momentum-based dragon movement, flight, diving, and aerial control.",
        category: "Web Development",

        image: animalHeroes,

        technologies: [
            "Unreal Engine 5",
            "C++",
            "Git",
        ],

        demo: "https://your-demo-url.com",
        github: "https://github.com/IshKwayisi1232004/Client_Server_Dev_Project",

        type: "Web Development",
        development: "Solo",
        status: "In Progress",

        sections: {
            project: "...",
            designAndDevelopment: "...",
            implementation: "...",
            challenges: "...",
            learned: "..."
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
            learned: "..."
        }
    },
    {
        id: "eventTracker",
        title: "Event Tracking App",
        subtitle: "--------------",
        description:
            "An Unreal Engine 5 gameplay programming prototype exploring momentum-based dragon movement, flight, diving, and aerial control.",
        category: "Mobile Development",

        image: eventApp,

        technologies: [
            "Unreal Engine 5",
            "C++",
            "Git",
        ],

        demo: "https://your-demo-url.com",
        github: "https://github.com/IshKwayisi1232004/EventTrackingApp_Kwayisi",

        type: "Mobile Development",
        development: "Solo",
        status: "In Progress",

        sections: {
            project: "...",
            designAndDevelopment: "...",
            implementation: "...",
            challenges: "...",
            learned: "..."
        }
    }
]