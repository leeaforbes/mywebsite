import robinpickleballpic from "../projectpics/robinlogo.png"
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
        name: "Robin Pickleball",
        desc: [
            "iOS app for pickleball tournament scorekeeping.",
            "Built in SpriteKit: Apple’s 2D game engine."
        ],
        pic: robinpickleballpic,
        skills: [
            "SwiftUI",
            "Swift",
            "SpriteKit",
            "Xcode"
        ],
        link: "https://apps.apple.com/kr/app/robin-pickleball/id6736431442?l=en-GB&platform=iphone"
    },
    {
        name: "Pedali",
        desc: [
            "iOS app for custom workout intervals",
            "Top 200 in Paid Health and Fitness Category",
            "Converted from UIKit to SwiftUI",
            "Developed with a friend to achieve their 5K running goal",
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
            "Portfolio page and a history of my site",
            "Maintained over the years as I learn web technologies",
            "Hosted on GitHub Pages"
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
            "Directory for skateboarders in the UT area",
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
            "Created minigames, tools, and server management plugins",
            "Personal use and for freelance work",
            "Capture the Flag, Paintball, Hunger Games, Ultra Hardcore, Spleef"
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