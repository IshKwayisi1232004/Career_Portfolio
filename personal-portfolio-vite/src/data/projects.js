import crownOfExodusImage from "../assets/CrownofExodus_Thumbnail.png";
import soarDragonLocomotionImage from "../assets/Soar_Thumbnail.png";
import roamieImage from "../assets/RoamieThumbnail.png";

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
        development: "Solo",
        status: "In Progress",

        sections: {
            project: "...",
            problem: "...",
            implementation: "...",
            challenges: "...",
            learned: "..."
        }
    },
    {
        id: "roamie",
        title: "Roamie",
        subtitle: "--------------",
        description:
            "Roamie is a web based game where players connect with their local area and each other by turning nearby places into interactive item drops, allowing players to collect and trade personalized collectibles for their animal avatar through real-world exploration.",
        category: "Web Development",

        image: roamieImage,

        technologies: [
            "Next.js 14",
            "React 18",
            "TypeScript",
            "Tailwind CSS",
            "OpenAI",
            "Firebase Auth"
        ],

        demo: "https://your-demo-url.com",
        github: "https://github.com/Paymvi/Capstone_Project",

        type: "Web Application",
        development: "3-Person Team",
        status: "In Progress",

        sections: {
            project: "...",
            problem: "...",
            implementation: "...",
            challenges: "...",
            learned: "..."
        }
    },
    {
        id: "crownOfExodus",
        title: "Crown of Exodus",
        subtitle: "--------------",
        description:
            "2D RPG Game",
        category: "Game Development",

        image: crownOfExodusImage,

        technologies: [
            "C#",
            "Unity",
            "GitHub",
            "CapCut"
        ],

        demo: "https://your-demo-url.com",
        github: "https://github.com/aqhoang2005/CS250SprintsProject",

        type: "Game Development",
        development: "5-Person Team",
        status: "Completed",

        sections: {
            project: "...",
            problem: "...",
            implementation: "...",
            challenges: "...",
            learned: "..."
        }
    }
]