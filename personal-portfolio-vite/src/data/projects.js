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
            future: "..."
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
            future: "..."
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
            future: "..."
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
            future: "..."
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
            future: "..."
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
            future: "..."
        }
    }
]