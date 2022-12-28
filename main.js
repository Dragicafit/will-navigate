const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile("index.html");

  mainWindow.webContents.on("will-navigate", (event, url) => {
    event.preventDefault();
  });
});
