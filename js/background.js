const images = ['img1.png', 'img2.png', 'img3.jpg'];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement('img');

backgroundImage.src = `img/${choosenImage}`;

document.body.appendChild(backgroundImage);