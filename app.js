const fs = require("fs");
const ytdl = require("ytdl-core");

async function download(){
    let n = Math.floor(Math.random() * 10000);
    let url = "https://www.youtube.com/watch?v=VWkMRohnTUY";
    let videoID = ytdl.getURLVideoID(url);
    await ytdl.getInfo(videoID).then(console.log("Checking...")).then(info => {
        console.log("Title: "  + info.videoDetails.title);
        ytdl(url).pipe(fs.createWriteStream("video" + n + ".mp4"));
    })
    console.log("Downloading...");
}


download();



