function display_random_image() {
    var theImages = [{
            src: "https://c.tenor.com/WI_dKIOlK0YAAAAC/cursed-troll-face-troll-face.gif",
            width: "750",
            height: "200"
        }, {
            src: "https://media2.giphy.com/media/cklPOHnHepdwBLRnQp/200.gif",
            width: "850",
            height: "200"
        }, {
            src: "https://www.troublefreepool.com/media/hello-gif.3474/full",
            width: "850",
            height: "200"
        }, {
            src: "https://media0.giphy.com/media/cJMlR1SsCSkUjVY3iK/giphy.gif?cid=ecf05e47b62y87v6jk772qnv5urcgmvryeexb729l17hs8ul&rid=giphy.gif&ct=g",
            width: "850",
            height: "200"
        }, {
            src: "https://c.tenor.com/DHGvsLhTOowAAAAM/meme-pikachu.gif",
            width: "850",
            height: "200"

        },

    ]

    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }

    // create random image number
    function getRandomInt(min, max) {
        //  return Math.floor(Math.random() * (max - min + 1)) + min;

        imn = Math.floor(Math.random() * (max - min + 1)) + min;
        return preBuffer[imn];
    }

    // 0 is first image,   preBuffer.length - 1) is  last image

    var newImage = getRandomInt(0, preBuffer.length - 1);

    // remove the previous images
    var images = document.querySelectorAll('#afbeeldingen img');
    var l = images.length;
    for (var p = 0; p < l; p++) {
        images[0].parentNode.removeChild(images[0]);
    }
    // display the image  
    document.querySelector("#afbeeldingen").appendChild(newImage);
