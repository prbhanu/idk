const electron = require("electron")
const url = require("url")
const path = require("path");
const RPC = require("discord-rpc")

const { app , BrowserWindow , Menu} = require("electron")


app.on("ready", function() {
    let window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        }
    })
    window.loadURL(url.format({
        pathname: "index.html",
        protocol: "file:",
        slashes: true
    }))
    window.setBackgroundColor("#121212")
    window.setMenuBarVisibility(false)
})
function instaClick() {
    const clientId = '287406016902594560';
    const scopes = ['rpc', 'rpc.api', 'messages.read'];

    const client = new RPC.Client({ transport: 'websocket' });

    client.on('ready', () => {
    console.log('Logged in as', client.application.name);
    console.log('Authed for user', client.user.username);

    client.selectVoiceChannel('81384788862181376');
    });

// Log in to RPC with client id
    client.login({ clientId, scopes });
    console.log("lol")
}