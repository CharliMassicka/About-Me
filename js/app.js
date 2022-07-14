'use strict';

function birthPlace() {

  let birthPlace = prompt('was i born in bangui?').toLowerCase();
  if (birthPlace === 'yes' || birthPlace === 'y') {
    alert('you guess right');
  } else if (birthPlace === 'no' || birthPlace === 'n') {
    alert('no you got it wrong');
  } else {
    alert('you missed the question');
  }
}
birthPlace();

function Seattle() {

  let Seattle = prompt('do i live in Seattle?').toLowerCase();
  if (Seattle === 'yes' || Seattle === 'y') {
    alert('wow good');
  } else if (Seattle === 'no' || Seattle === 'n') {
    alert('negative');
  } else {
    alert('sorry you missed the question');
  }
}
Seattle();

function travel() {

  let travel = prompt('do i like travel travel?').toLowerCase();
  if (travel === 'yes' || travel === 'y') {
    alert('great');
  } else if (travel === 'no' || travel === 'n') {
    alert('try harder');
  } else {
    alert('i dont understand');
  }
}
travel();

function madarin() {
  let madarin = prompt('do i speak Madarin?').toLowerCase();
  if (madarin === 'yes' || madarin === 'y') {
    alert('hi five');
  } else if (madarin === 'no' || madarin === 'n') {
    alert('try again');
  } else {
    alert('stay focus');
  }
}
madarin();


function memorial() {

  let memorial = prompt('did i visit eifelTower?').toLowerCase();
  if (memorial === 'yes' || memorial === 'y') {
    alert('hell yeah ');
  } else if (memorial === 'no' || memorial === 'n') {
    alert('come on');
  } else {
    alert('next time?');
  }
}
memorial();

function language() {
  let attempt = 4;
  let language = '7';
  for (let i = attempt; i > 0; i--) {
    let languageGuess = prompt('how many languages do i speak?');
    if (languageGuess === language) {
      alert('sweet');
      break;
    } else if (languageGuess > language) {
      alert('try again go lower');
    } else if (languageGuess < language) {
      alert('nice try go up');
    }
  }
}
language();
