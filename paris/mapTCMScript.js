var zoneWelcomeToTCMName = "popUpWelcomeToTCM";
var zoneMeetTheDevTeamName = "popUpMeetTheDevTeam";
var zoneRespectPeopleName = "popUpRespectPeople";
var zoneTCMAroundTheWorld = "popUpTCMAroundTheWorld";
var urlWelcomeToTCM = "https://www.thecodingmachine.com/en/welcome-to-the-coding-machine/";
var urlTCMAroundTheWorld = "https://www.thecodingmachine.com/en/the-coding-machine-around-the-world/";
var currentPopup = undefined;
var isCoWebSiteOpened =  false;
WA.onEnterZone(zoneWelcomeToTCMName, () => {
   currentPopup =  WA.openPopup("popUpWelcome","Hey ! Welcome to The Coding Machine !",[
        {
            label: "Who are we ? ",
            className: "popUpElement",
            callback: (popup => {
                WA.openCoWebSite(urlWelcomeToTCM);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.onEnterZone(zoneTCMAroundTheWorld, () => {
    currentPopup =  WA.openPopup("popUpTCMAroundTheWorld","The Coding Machine around the World",[
        {
            label: "See more ",
            className: "popUpElement",
            callback: (popup => {
                WA.openCoWebSite(urlTCMAroundTheWorld);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.onEnterZone(zoneRespectPeopleName, () => {
    currentPopup =  WA.openPopup("popUpRespect","Thank you for respecting people at work :D",[])
})

WA.onEnterZone(zoneMeetTheDevTeamName, () => {
    currentPopup =  WA.openPopup("popUpMeetDev","Meet the WorkAdventure dev team ! ",[]);
})

WA.onLeaveZone(zoneRespectPeopleName, closePopUp)

WA.onLeaveZone(zoneMeetTheDevTeamName, closePopUp)

WA.onLeaveZone(zoneWelcomeToTCMName, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.onLeaveZone(zoneTCMAroundTheWorld, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
