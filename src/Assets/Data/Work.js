import TurbochilliPanelImg from "../Images/turbochilli-panel.png";
import BlowfishPanelImg from "../Images/blowfish-panel.png";
import PlaysidePanelImg from "../Images/playside-panel.png";
import CTGPanelImg from "../Images/ctg-panel.png";
import SMGPanelImg from "../Images/smg-panel.png";

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
      panelImg: TurbochilliPanelImg,
      projects: [
        {
          title: "Rolling Sky",
          urlLink: "https://apps.apple.com/us/app/rolling-sky/id1036661603",
          youtubeLink: "https://youtu.be/wCAZRRrPEzg",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          description:
            "Arcade rhythm game - First studio project! Made 3 additional levels with new mechanics and some light modeling. Eventually was bought and reworked by a separate company.",
        },
        {
          title: "Good Knight Story",
          urlLink: "https://apps.apple.com/us/app/good-knight-story/id1067684327",
          youtubeLink: "https://www.youtube.com/watch?v=qaFXl0faMV4",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          description:
            "Action-Puzzle RPG for mobile. QA'd level progression, fixed bugs and eventually updated it for 64-bit IOS.",
        },
        {
          title: "Stickman Surfer",
          urlLink: "https://apps.apple.com/au/app/stickman-surfer/id1151245201",
          youtubeLink: "https://www.youtube.com/watch?v=C-x3zno3XsI",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          description: "Infinite-Surfer Game. Was able to be part of the project through prototyping to release. ",
        },
        {
          title: "Ghosts 'n Guns",
          urlLink: "https://apps.apple.com/us/app/ghosts-n-guns-ar/id1312708394",
          youtubeLink: "https://www.youtube.com/watch?v=1AcUtLczuV8",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          description:
            "AR Arcade Shooter! First foray into making AR type games. Made to test out the IOS and Android AR functionality.",
        },
        {
          title: "Unroll Me 2",
          urlLink: "https://apps.apple.com/us/app/ghosts-n-guns-ar/id1312708394",
          youtubeLink: "https://www.youtube.com/watch?v=BN1zR9cLIBs",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          description:
            "Block Puzzle Game. Programed gameplay, designed and created levels and created additional mechanics from the original.",
        },
        {
          title: "Up the Wall",
          urlLink: "https://apps.apple.com/us/app/up-the-wall/id1205391576",
          youtubeLink: "https://www.youtube.com/watch?v=tEqb5bvmKvA",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          description: "Perspective changing Arcade game. QA’d and programmed reward systems and analytics",
        },
      ],
      franchises: [
        {
          title: "Stickman Franchise",
          otherVideoLink: undefined,
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
          description: "Ported and updated these games to wider 64-Bit IOS devices.",
        },
      ],
    },
    {
      title: "Blowfish Studios",
      role: "Games Programmer",
      startDate: "August 2018",
      endDate: "April 2020",
      panelImg: BlowfishPanelImg,
      projects: [
        {
          title: "Storm Boy: The Game",
          urlLink: "https://www.blowfishstudios.com/game/storm-boy",
          youtubeLink: "https://www.youtube.com/watch?v=j5VFRdhYydo",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["PC", "SWITCH", "XBOXONE", "PS4", "IOS", "ANDROID"],
          description:
            "Game adaptation of the Colin Thiele’s Book. First game I worked on that was ported to Switch, XboxOne and PS4. Lotta Addressable Asset debugging",
        },
        {
          title: "War Tech Fighters",
          urlLink: "https://www.blowfishstudios.com/game/wartech",
          youtubeLink: "https://www.youtube.com/watch?v=1aSo4gbXUCY",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["PC", "SWITCH", "XBOXONE", "PS4"],
          description: "Third-Person Mech fighter. Was able to optimize, localize and port it to consoles.",
        },
        {
          title: "Infinite: Beyond the Mind",
          urlLink: "https://www.blowfishstudios.com/game/infinite",
          youtubeLink: "https://www.youtube.com/watch?v=JMalnJlGpEY",
          otherVideoLink: undefined,
          engine: "GameMaker",
          target: ["PC", "SWITCH", "XBOXONE", "PS4"],
          description:
            "Side Scrolling Brawler - First porting job using GameMaker. Ported to consoles and localized it into several languages. ",
        },
        {
          title: "Whipseey and the Lost Atlas",
          urlLink: "https://www.blowfishstudios.com/game/whipseey",
          youtubeLink: "https://www.youtube.com/watch?v=EQw_CpQLc-k",
          otherVideoLink: undefined,
          engine: "GameMaker",
          target: ["PC", "SWITCH", "XBOXONE", "PS4"],
          description: "Kirby inspired 2D platformer. Like the infinite, Ported to consoles and made localized it.",
        },
        {
          title: "Minesweeper Genius",
          urlLink: "https://www.blowfishstudios.com/game/ms-genius",
          youtubeLink: "https://www.youtube.com/watch?v=Ksjo0CA3B60",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["SWITCH", "XBOXONE", "PS4"],
          description:
            "Neat Puzzle Game! Was able to lead the porting job to translate the touch controls to controller input and localize it to several languages.",
        },
        {
          title: "Homebase",
          urlLink: "https://kids.scholastic.com/kid/homebase/",
          youtubeLink: "https://www.youtube.com/watch?v=uMnBUbLUKGo",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["IOS", "ANDROID", "WebGL"],
          description:
            "Ongoing project for Scholastic. Was put in charge on integrating minigames, general gameplay and dialogue.",
        },
        {
          title: "JackQuest",
          urlLink: "https://www.blowfishstudios.com/game/jack-quest/",
          youtubeLink: "https://www.youtube.com/watch?v=053J1i-zwMg",
          otherVideoLink: undefined,
          engine: "GameMaker",
          target: ["PC", "SWITCH", "XBOXONE", "PS4"],
          description: "2D Platformer - Setup the porting, localization and DLC for Consoles.",
        },
        {
          title: "Easy Bill Pay",
          urlLink: "https://www.blowfishstudios.com/game/jack-quest/",
          youtubeLink: undefined,
          otherVideoLink: undefined,
          engine: undefined,
          target: ["IOS", "ANDROID", "Web"],
          description: "Application to help automate paying bills and sending out funds.",
        },
      ],
      franchises: [],
    },
    {
      title: "Playside Studios",
      role: "Mid Programmer",
      startDate: "September 2020",
      endDate: "July 2021",
      panelImg: PlaysidePanelImg,
      projects: [
        {
          title: "Animal Warfare",
          urlLink: "https://play.google.com/store/apps/details?gl=US&hl=en_AU&id=com.playsidestudios.animal",
          youtubeLink: "https://www.youtube.com/watch?v=M8Hwh5s8XJI",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          description:
            "Auto-Battler based on the Animal Kingdom. I was put in change of implementing special abilities, AB testing services, Analytics and visual effects.",
        },
        {
          title: "FEI Equestriad: World Tour",
          urlLink: "https://play.google.com/store/apps/details?gl=US&hl=en_AU&id=com.playsidestudios.animal",
          youtubeLink: "https://www.youtube.com/watch?v=M8Hwh5s8XJI",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
          description:
            "Online competitive equestrian game. I got to work on PlayFab services, automated events, database changes and general gameplay.",
        },
        {
          title: "Sensations ASMR",
          urlLink: "https://apps.apple.com/au/app/sensations-relaxing-games/id1530126991",
          youtubeLink: undefined,
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["IOS", "ANDROID"],
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
      panelImg: CTGPanelImg,
      projects: [
        {
          title: "Crab God",
          urlLink: "https://firesquid.games/games/crab-god",
          youtubeLink: "https://www.youtube.com/watch?v=apuqVdMiZ9U",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["PC", "Steam"],
          description:
            "God game based on restoring an ocean reef. Made the Crabling Animation system, Day/Night Cycle and contributed to general game play.",
        },
        {
          title: "Virtual Farm",
          urlLink: "https://www.chaostheorygames.com/work/virtual-farm",
          youtubeLink: undefined,
          otherVideoLink: VirtualFarmVid,
          engine: "Unity",
          target: ["PC", "Android"],
          description:
            "Interactive science exhibit made for the “Gateway to Science” Museum in North Dakota. Built to work with a large touch screen and RFID readers.",
        },
        {
          title: "Virus Blaster",
          urlLink: "https://www.chaostheorygames.com/work/virus-blaster",
          youtubeLink: undefined,
          otherVideoLink: VirusBlasterVid,
          engine: "Unity",
          target: ["PC", "Android"],
          description:
            "Another “Gateway to Science” project. Took on the Lead Developer role to make a Puzzle game based on the process of creating a vaccine.",
        },
        {
          title: "Seagull TV",
          urlLink: "https://www.chaostheorygames.com/work/seagull-tv",
          youtubeLink: "https://www.youtube.com/watch?v=HVh33W5izCY",
          otherVideoLink: undefined,
          engine: "Unity",
          target: ["PC", "Federation Square Melbourne"],
          description:
            "Interactive game/music video publicly broadcast at Fed Square. Contributed to the real time and weather system that read sunrise/sunset and current weather to change the environment in game.",
        },
        {
          title: "PlayED",
          urlLink: "https://www.played.com.au",
          youtubeLink: undefined,
          otherVideoLink: PlayEdVid,
          engine: "React",
          target: ["Web"],
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
      endDate: "Now!",
      panelImg: SMGPanelImg,
      projects: [
        {
          title: "Unreleased Title",
          urlLink: undefined,
          youtubeLink: undefined,
          otherVideoLink: undefined,
          engine: undefined,
          target: [],
          description: "Contracted to help with gameplay but branched into animation and asset importing.",
        },
      ],
      franchises: [],
    },
  ],
};

export default WORK;
