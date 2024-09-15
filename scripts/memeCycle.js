var fileNames = [
    "meme1.gif",
    "meme2.gif",
    "meme3.gif",
    "meme4.gif",
    "meme5.gif",
];

var currentFile = "";

function NewMeme()
{
    var img = document.getElementById("memeImg");
    img.src = GetRandomPath();
}



function GetRandomPath()
{
    var randomFile = fileNames[Math.floor(Math.random()*fileNames.length)];

    var retry = 0;
    // randomize until there is a new file - (limit retry just in case)
    while(currentFile == randomFile)
    {
        if(retry > 20) return;

        randomFile = fileNames[Math.floor(Math.random()*fileNames.length)];
        retry++;
    }
    
    currentFile = randomFile;

    var path = `./Images/${randomFile}`;

    return path;
}