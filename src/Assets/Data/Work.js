import TurbochilliPanelimage from "../Images/turbochilli-panel.png";
import BlowfishPanelimage from "../Images/blowfish-panel.png";
import PlaysidePanelimage from "../Images/playside-panel.png";
import CTGPanelimage from "../Images/ctg-panel.png";
import SMGPanelimage from "../Images/smg-panel.png";

import ASMRProjectImage1 from "../Images/ProjectImages/asmr1.png";
import ASMRProjectImage2 from "../Images/ProjectImages/asmr2.png";
import EasyBillProjectImage1 from "../Images/ProjectImages/bill1.png";
import EasyBillProjectImage2 from "../Images/ProjectImages/bill2.png";
import SMGProjectImage from "../Images/ProjectImages/smg_wallpaper.png";

//import BraveheartVid from "../Video/Bravehearts.mp4";
//import IPGOVid from "../Video/IPGO.mp4";
import VirtualFarmVid from "../Video/VirtualFarm.mp4";
import VirusBlasterVid from "../Video/VirusBlaster.mp4";
import PlayEdVid from "../Video/PlayEd.mp4";

const WORK = {
  workplaces: [
    {
      title: "Turbochilli Publishing",
      role: "Programmer",
      startDate: "July 2016",
      endDate: "August 2018",
      panelImg: TurbochilliPanelimage,
      projects: [
        {
          title: "Rolling Sky",
          urlLink: "https://apps.apple.com/us/app/rolling-sky/id1036661603",
          youtubeLink: "https://www.youtube.com/watch?v=wCAZRRrPEzg",
          otherVideoLink: undefined,
          favorite: true,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          images: undefined,
          description:
            "Arcade rhythm game - Very first released game! Made 3 additional levels with new mechanics and some light modeling. Eventually was bought and reworked by a separate company.",
        },
        {
          title: "Good Knight Story",
          urlLink: "https://apps.apple.com/us/app/good-knight-story/id1067684327",
          youtubeLink: "https://www.youtube.com/watch?v=qaFXl0faMV4",
          otherVideoLink: undefined,
          favorite: false,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          images: undefined,
          description:
            "Action-Puzzle RPG for mobile. QA’d level progression, fixed bugs implemented analytics. Was eventually updated it for 64-bit IOS and Android.",
        },
        {
          title: "Stickman Surfer",
          urlLink: "https://apps.apple.com/au/app/stickman-surfer/id1151245201",
          youtubeLink: "https://www.youtube.com/watch?v=C-x3zno3XsI",
          otherVideoLink: undefined,
          favorite: true,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          images: undefined,
          description:
            "Infinite-Surfer Game for mobile. On development through prototyping all the way to release. Added gameplay, monetization, localization, game services and analytics.",
        },
        {
          title: "Ghosts 'n Guns",
          urlLink: "https://apps.apple.com/us/app/ghosts-n-guns-ar/id1312708394",
          youtubeLink: "https://www.youtube.com/watch?v=1AcUtLczuV8",
          otherVideoLink: undefined,
          favorite: true,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          images: undefined,
          description:
            "AR Arcade Shooter! First foray into making an Augmented Reality game using IOS and Android’s native libraries. ",
        },
        {
          title: "Unroll Me 2",
          urlLink: "https://apps.apple.com/us/app/ghosts-n-guns-ar/id1312708394",
          youtubeLink: "https://www.youtube.com/watch?v=BN1zR9cLIBs",
          otherVideoLink: undefined,
          favorite: false,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          images: undefined,
          description:
            "Casual Block Puzzle Game. Programed new mechanics, gameplay, monetization, analytics and designed 800+ levels for the game.",
        },
        {
          title: "Up the Wall",
          urlLink: "https://apps.apple.com/us/app/up-the-wall/id1205391576",
          youtubeLink: "https://www.youtube.com/watch?v=tEqb5bvmKvA",
          otherVideoLink: undefined,
          favorite: false,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          images: undefined,
          description: "Perspective changing Arcade game. QA’d and programmed reward systems and analytics.",
        },
      ],
      franchises: [
        {
          title: "Stickman Franchise",
          otherVideoLink: undefined,
          favorite: false,
          engine: "Cocos-2D",
          target: ["IOS", "ANDROID"],
          games: [
            {
              title: "Stickman Skater",
              urlLink: "https://turbochilli.com/games/stickman-skater/",
              youtubeLink: "https://www.youtube.com/watch?v=Lz4LvMNWUDQ",
            },
            {
              title: "Stickman Snowboarder",
              urlLink: "https://turbochilli.com/games/stickman-snowboarder/",
              youtubeLink: "https://www.youtube.com/watch?v=iUL9F4c_JH8",
            },
            {
              title: "Stickman BMX",
              urlLink: "https://turbochilli.com/games/stickman-skater/",
              youtubeLink: "https://www.youtube.com/watch?v=J2l01DxDHlE",
            },
          ],
          images: undefined,
          description: "Ported and updated these games to wider 64-Bit IOS devices.",
        },
      ],
    },
    {
      title: "Blowfish Studios",
      role: "Games Programmer",
      startDate: "August 2018",
      endDate: "April 2020",
      panelImg: BlowfishPanelimage,
      projects: [
        {
          title: "Storm Boy: The Game",
          urlLink: "https://www.blowfishstudios.com/game/storm-boy",
          youtubeLink: "https://www.youtube.com/watch?v=j5VFRdhYydo",
          otherVideoLink: undefined,
          favorite: true,
          engine: "Unity",
          target: ["PC", "SWITCH", "XBOXONE", "PS4", "IOS", "ANDROID"],
          images: undefined,
          description:
            "Game adaptation of the Colin Thiele’s Book to tie into the movie of this. First game I worked on that was ported to Switch, XboxOne and PS4.",
        },
        {
          title: "War Tech Fighters",
          urlLink: "https://www.blowfishstudios.com/game/wartech",
          youtubeLink: "https://www.youtube.com/watch?v=1aSo4gbXUCY",
          otherVideoLink: undefined,
          favorite: false,
          engine: "Unity",
          target: ["PC", "SWITCH", "XBOXONE", "PS4"],
          images: undefined,
          description:
            "Third-Person Mech fighter. In charge of optimizing, localizing and porting it to consoles. Expanded knowledge on the Post Processing Stack and Addressables.",
        },
        {
          title: "Infinite: Beyond the Mind",
          urlLink: "https://www.blowfishstudios.com/game/infinite",
          youtubeLink: "https://www.youtube.com/watch?v=JMalnJlGpEY",
          otherVideoLink: undefined,
          favorite: false,
          engine: "GameMaker",
          target: ["PC", "SWITCH", "XBOXONE", "PS4"],
          images: undefined,
          description:
            "Side Scrolling Brawler - First console porting job using GameMaker. Additionally localized it into several languages. ",
        },
        {
          title: "Whipseey and the Lost Atlas",
          urlLink: "https://www.blowfishstudios.com/game/whipseey",
          youtubeLink: "https://www.youtube.com/watch?v=EQw_CpQLc-k",
          otherVideoLink: undefined,
          favorite: false,
          engine: "GameMaker",
          target: ["PC", "SWITCH", "XBOXONE", "PS4"],
          images: undefined,
          description: "Kirby inspired 2D platformer. Like “Infinte”, Ported to consoles and localized it.",
        },
        {
          title: "Minesweeper Genius",
          urlLink: "https://www.blowfishstudios.com/game/ms-genius",
          youtubeLink: "https://www.youtube.com/watch?v=Ksjo0CA3B60",
          otherVideoLink: undefined,
          favorite: true,
          engine: "Unity",
          target: ["SWITCH", "XBOXONE", "PS4"],
          images: undefined,
          description:
            "Neat Puzzle Game! Was able to lead the porting job to translate the touch to controller input and localize it to several languages.",
        },
        {
          title: "Homebase",
          urlLink: "https://kids.scholastic.com/kid/homebase/",
          youtubeLink: "https://www.youtube.com/watch?v=uMnBUbLUKGo",
          otherVideoLink: undefined,
          favorite: true,
          engine: "Unity",
          target: ["IOS", "ANDROID", "WebGL"],
          images: undefined,
          description:
            "Ongoing project for Scholastic. Was put in charge of general gameplay, dialogue and implementing minigames delivered by a contracted company.",
        },
        {
          title: "JackQuest",
          urlLink: "https://www.blowfishstudios.com/game/jack-quest/",
          youtubeLink: "https://www.youtube.com/watch?v=053J1i-zwMg",
          otherVideoLink: undefined,
          favorite: false,
          engine: "GameMaker",
          target: ["PC", "SWITCH", "XBOXONE", "PS4"],
          images: undefined,
          description: "2D action platformer - Setup the porting, localization and ported the DLC for Consoles.",
        },
        {
          title: "Easy Bill Pay",
          urlLink: "https://www.easybillpay.com.au/",
          youtubeLink: undefined,
          otherVideoLink: undefined,
          favorite: false,
          engine: undefined,
          target: ["IOS", "ANDROID", "Web"],
          images: [EasyBillProjectImage1, EasyBillProjectImage2],
          description:
            "Application to help automate paying bills and sending out funds. Mostly front end development and QA.",
        },
      ],
      franchises: [],
    },
    {
      title: "Playside Studios",
      role: "Mid Programmer",
      startDate: "September 2020",
      endDate: "July 2021",
      panelImg: PlaysidePanelimage,
      projects: [
        {
          title: "Animal Warfare",
          urlLink: "https://play.google.com/store/apps/details?gl=US&hl=en_AU&id=com.playsidestudios.animal",
          youtubeLink: "https://www.youtube.com/watch?v=M8Hwh5s8XJI",
          otherVideoLink: undefined,
          favorite: true,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          images: undefined,
          description:
            "Auto-Battler based on the Animal Kingdom. I was put in change of implementing special abilities, AB testing services, Analytics and visual effects.",
        },
        {
          title: "FEI Equestriad: World Tour",
          urlLink: "https://play.google.com/store/apps/details?gl=US&hl=en_AU&id=com.playsidestudios.animal",
          youtubeLink: "https://www.youtube.com/watch?v=t84zWpA4EQo",
          otherVideoLink: undefined,
          favorite: false,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          images: undefined,
          description:
            "Online competitive equestrian game. I worked on integrating PlayFab services, automated events, database changes and general gameplay. ",
        },
        {
          title: "Sensations ASMR",
          urlLink: "https://apps.apple.com/au/app/sensations-relaxing-games/id1530126991",
          youtubeLink: undefined,
          otherVideoLink: undefined,
          favorite: false,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          images: [ASMRProjectImage1, ASMRProjectImage2],
          description:
            "ASMR app that lets you cut, shave and manipulate objects. Made some general gameplay changes and bug fixes.",
        },
      ],
      franchises: [],
    },
    {
      title: "Chaos Theory Games",
      role: "Mid Engineer",
      startDate: "July 2021",
      endDate: "April 2023",
      panelImg: CTGPanelimage,
      projects: [
        {
          title: "Crab God",
          urlLink: "https://firesquid.games/games/crab-god",
          youtubeLink: "https://www.youtube.com/watch?v=apuqVdMiZ9U",
          otherVideoLink: undefined,
          favorite: true,
          engine: "Unity",
          target: ["PC", "Steam"],
          images: undefined,
          description:
            "God game based on restoring an ocean reef. Made the Crabling Animation system, Day/Night Cycle and contributed to general game play.",
        },
        {
          title: "Virtual Farm",
          urlLink: "https://www.chaostheorygames.com/work/virtual-farm",
          youtubeLink: undefined,
          otherVideoLink: VirtualFarmVid,
          favorite: false,
          engine: "Unity",
          target: ["PC", "Android"],
          images: undefined,
          description:
            "Interactive science exhibit made for the “Gateway to Science” Museum in North Dakota. Built to work with a large touch screen and RFID readers.",
        },
        {
          title: "Virus Blaster",
          urlLink: "https://www.chaostheorygames.com/work/virus-blaster",
          youtubeLink: undefined,
          otherVideoLink: VirusBlasterVid,
          favorite: true,
          engine: "Unity",
          target: ["PC", "Android"],
          images: undefined,
          description:
            "Another “Gateway to Science” project. Took on the Lead Developer role to make a Puzzle game based on the process of creating a vaccine.",
        },
        {
          title: "Seagull TV",
          urlLink: "https://www.chaostheorygames.com/work/seagull-tv",
          youtubeLink: "https://www.youtube.com/watch?v=HVh33W5izCY",
          otherVideoLink: undefined,
          favorite: true,
          engine: "Unity",
          target: ["PC", "Federation Square Melbourne"],
          images: undefined,
          description:
            "Interactive game/music video publicly broadcast at Fed Square. Contributed to the real time and weather system that read sunrise/sunset and current weather to change the environment in game.",
        },
        {
          title: "PlayED",
          urlLink: "https://www.played.com.au",
          youtubeLink: undefined,
          otherVideoLink: PlayEdVid,
          favorite: true,
          engine: "React",
          target: ["Web"],
          images: undefined,
          description:
            "Interactive game/music video publicly broadcast at Fed Square. Contributed to the real time and weather system that read sunrise/sunset and current weather to change the environment in game.",
        },
      ],
      franchises: [],
    },
    {
      title: "SMG Studios",
      role: "Contract Engineer",
      startDate: "May 2023",
      endDate: "Dec 2024",
      panelImg: SMGPanelimage,
      projects: [
        {
          title: "Unreleased Title",
          urlLink: undefined,
          youtubeLink: undefined,
          otherVideoLink: undefined,
          favorite: false,
          engine: "Unity",
          target: [],
          images: [SMGProjectImage],
          description: "Contracted to help with gameplay but branched into animation and asset importing.",
        },
      ],
      franchises: [],
    },
  ],
};

export default WORK;
