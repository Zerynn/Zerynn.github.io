let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/the-button.png') {
        myImage.setAttribute('src', 'images/trolled.png');
    } else {
        myImage.setAttribute('src', 'images/the-button.png');
    }
}