'use strict';

const image = document.querySelector('#image');
const turnOnOff = document.querySelector('#turnOnOff');

function isLampBroken() {
  return image.src.indexOf('quebrada') > -1;
}

function lampOn() {
  if (!isLampBroken()) {
    image.src = 'img/ligada.jpg';
  }
}

function lampOff() {
  if (!isLampBroken()) {
    image.src = 'img/desligada.jpg';
  }
}

function lampOnOff() {
  if (turnOnOff.textContent === 'Ligar') {
    lampOn();
    turnOnOff.textContent = 'Desligar';
  } else {
    lampOff();
    turnOnOff.textContent = 'Ligar';
  }
}

function toBreak() {
  image.src = 'img/quebrada.jpg';
}

image.addEventListener('mouseover', lampOn);
image.addEventListener('mouseout', lampOff);
image.addEventListener('dblclick', toBreak);
turnOnOff.addEventListener('click', lampOnOff);
