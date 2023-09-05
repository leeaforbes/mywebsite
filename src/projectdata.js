import pedalipic from "./projectpics/pedalilogo.png";
import skatespotspic from "./projectpics/leeskatepic.jpg";
import pvrpic from "./projectpics/butterflyflower.ico";
import mywebsitepic from "./projectpics/youarehere.jpg";
import learningjavapic from "./logos/javalogo.jpg";
import utrunnerpic from "./projectpics/utrunner.png";
import clickquickpic from "./projectpics/clickquicklogo.png";
import mcpluginspic from "./logos/spigotmclogo.png";
import nssspic from "./projectpics/bowboy.png";

const projectList = [
    {
        name: "Pedali",
        desc: [
            "Workout Interval iOS App",
            "Top 200 in Paid Health and Fitness Category"
        ],
        pic: pedalipic,
        skills: [
            "Swift",
            "UIKit",
            "Xcode"
        ],
        link: "https://apps.apple.com/us/app/pedali/id6450684275"
    },
    {
        name: "UT Skate Spots Directory",
        desc: [
            "A directory for skateboarders in the UT area to find places to skate",
            "Includes notes/pictures about obstacles, lighting"
        ],
        pic: skatespotspic,
        skills: [
            "HTML",
            "Python"
        ],
        link: "https://leeaforbes.github.io/utskatespots/"
    },
    {
        name: "Photo Viewer Reborn",
        desc: [
            "A simple photo viewer for Windows",
            "Faster loading and clearer images than Windows “Photos” app when created"
        ],
        pic: pvrpic,
        skills: [
            "C#",
            "Windows Forms"
        ],
        link: "https://leeaforbes.github.io/previouswebsite/photoviewerreborn/photoviewerreborn.html"
    },
    {
        name: "My website",
        desc: [
            "A website about me that has some web projects on it and a history of my site",
            "You are here."
        ],
        pic: mywebsitepic,
        skills: [
            "React",
            "JavaScript"
        ],
        link: "https://leeaforbes.github.io/mywebsite/"
    },
    {
        name: "Learning Java Lesson Sets",
        desc: [
            "I created a set of lessons for a beginner to learn Java",
            "Includes everything from installing Java, setting up Eclipse IDE, example code, labs, and projects"
        ],
        pic: learningjavapic,
        skills: [
            "Java"
        ],
        link: "https://leeaforbes.github.io/previouswebsite/learnjava/learnjava.html"
    },
    {
        name: "UTRunner",
        desc: [
            "Generates a loop to run in for the UT area given distance and starting point"
        ],
        pic: utrunnerpic,
        skills: [
            "JavaScript",
            "Google Maps API"
        ],
        link: "https://leeaforbes.github.io/previouswebsite/utrunner/utrunner.html"
    },
    {
        name: "Clickquick",
        desc: [
            "An Android app deployed to the Google Play Store",
            "Click squares and race the clock to beat your time"
        ],
        pic: clickquickpic,
        skills: [
            "Java",
            "Android Studio"
        ],
        link: "https://leeaforbes.github.io/previouswebsite/clickquickstatus.html"
    },
    {
        name: "Minecraft Spigot Plugins",
        desc: [
            "I created many tool and minigame plugins that can be added to a Minecraft Spigot server",
            "Major projects: Capture the Flag, Paintball, Hunger Games, Ultra Hardcore, Spleef"
        ],
        pic: mcpluginspic,
        skills: [
            "Java",
            "Spigot"
        ],
        link: "https://github.com/stars/leeaforbes/lists/plugins"
    },
    {
        name: "Not So Super Smash",
        desc: [
            "A platform fighting game made in Java",
            "Pick your character, battle your friends, and try not to fall!"
        ],
        pic: nssspic,
        skills: [
            "Java"
        ],
        link: "https://leeaforbes.github.io/previouswebsite/ogsite/index_old.html"
    }
]

export default projectList;