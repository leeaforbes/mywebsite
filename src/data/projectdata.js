import pedalipic from "../projectpics/pedalilogo.png";
import skatespotspic from "../projectpics/leeskatepic.jpg";
import pvrpic from "../projectpics/butterflyflower.ico";
import mywebsitepic from "../projectpics/youarehere.jpg";
import learningjavapic from "../logos/javalogo.jpg";
import utrunnerpic from "../projectpics/utrunner.png";
// import clickquickpic from "../projectpics/clickquicklogo.png";
import mcpluginspic from "../logos/spigotmclogo.png";
import nssspic from "../projectpics/bowboy.png";

const projectList = [
    {
        name: "Pedali",
        desc: [
            "iOS app for custom workout intervals",
            "Converted from UIKit to SwiftUI",
            "Developed with a friend to achieve their 5K running goal",
            "Top 200 in Paid Health and Fitness Category",
            "Designed with Figma, built in Xcode"

        ],
        pic: pedalipic,
        skills: [
            "SwiftUI",
            "Swift",
            "UIKit",
            "Xcode"
        ],
        link: "https://apps.apple.com/us/app/pedali/id6450684275"
    },
    {
        name: "My Website",
        desc: [
            "Hosted on GitHub Pages",
            "Portfolio page and a history of my site",
            "Maintained over many years as I learned web technologies"
        ],
        pic: mywebsitepic,
        skills: [
            "React",
            "JavaScript",
            "CSS",
            "HTML"
        ],
        link: "https://leeaforbes.github.io/mywebsite/"
    },
    {
        name: "UT Skate Spots Directory",
        desc: [
            "Directory for skateboarders in the UT area to find places to skate",
            "Notes and pictures about obstacles, lighting, and traffic",
            "Community building through information and public contribution"
        ],
        pic: skatespotspic,
        skills: [
            "HTML",
            "CSS",
            "Python"
        ],
        link: "https://leeaforbes.github.io/utskatespots/"
    },
    {
        name: "Photo Viewer Reborn",
        desc: [
            "Simple photo viewer using Windows Forms (.NET)",
            "Faster loading and clearer images than the Windows “Photos” app"
        ],
        pic: pvrpic,
        skills: [
            "C#",
            "Windows Forms"
        ],
        link: "https://leeaforbes.github.io/previouswebsite/photoviewerreborn.html"
    },
    {
        name: "UTRunner",
        desc: [
            "Generates a loop to run in the UT area using the Google Maps API",
            "Created to help a friend train for the Longhorn Run event"
        ],
        pic: utrunnerpic,
        skills: [
            "Google Maps API",
            "JavaScript"
        ],
        link: "https://leeaforbes.github.io/previouswebsite/utrunner.html"
    },
    {
        name: "Learning Java Lesson Sets",
        desc: [
            "Created a set of lessons for a beginner to learn Java",
            "Includes installing Java, setting up Eclipse IDE, example code, labs, and projects"
        ],
        pic: learningjavapic,
        skills: [
            "Java"
        ],
        link: "https://leeaforbes.github.io/previouswebsite/learnjava.html"
    },
    {
        name: "Minecraft Plugins",
        desc: [
            "Created minigames, tools, and server management",
            "Capture the Flag, Paintball, Hunger Games, Ultra Hardcore, Spleef",
            "Personal use and for freelance work"
        ],
        pic: mcpluginspic,
        skills: [
            "Java",
            "Spigot"
        ],
        link: "https://github.com/stars/leeaforbes/lists/plugins"
    },
    // {
    //     name: "Clickquick",
    //     desc: [
    //         "An Android app published to the Google Play Store",
    //         "Click squares and race the clock to beat your time"
    //     ],
    //     pic: clickquickpic,
    //     skills: [
    //         "Java",
    //         "Android Studio"
    //     ],
    //     link: "https://leeaforbes.github.io/previouswebsite/clickquickstatus.html"
    // },
    {
        name: "Not So Super Smash",
        desc: [
            "Platform fighting game made in Java",
            "Pick your character, battle your friends, and try not to fall!"
        ],
        pic: nssspic,
        skills: [
            "Java"
        ],
        link: "https://leeaforbes.github.io/previouswebsite/index_old.html"
    }
]

export default projectList;