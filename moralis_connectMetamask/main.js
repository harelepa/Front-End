APP_ID = "8yCLEt1wgXqZlhObi5uzujsZdsIKAynZ45zodkVj"
MASTER_KEY = "WklE0kZ0GyCkCByApvrsttZL359er9V8yOgvFmbO"

Moralis.initialize(APP_ID)
Moralis.serverURL = "https://ji1r4evyginc.grandmoralis.com:2053/server"

init = async () => {
    window.web3 = await Moralis.Web3.enable()
    initUser();
}

initUser = async () => {
    if(await Moralis.User.current()){
        hideElement(userConnectButton);
        showElement(userProfileButton);
    }else{
        hideElement(userProfileButton);
        showElement(userConnectButton);
    }
}

login = async () => {
    try{
        await Moralis.Web3.authenticate();
        initUser();
    } catch(error){
        alert(`An error has occurred: ${error}`)
    }
}

hideElement = (element) => {
    element.style.display = "none";
}
showElement = (element) => {
    element.style.display = "block";
}

const userConnectButton = document.getElementById("btnConnect");
userConnectButton.onclick = login;

const userProfileButton = document.getElementById("btnUserInfo");




init();