/* eslint-disable 
import "bootstrap";*/
import "./style.css";

/*import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

window.onload = () => {
  //write your code here
  document.querySelector('#btn').addEventListener('click', () => {

  })
  /*let randomNumber = Math.random() * 10;*/
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = [
    "took my",
    "eat my",
    "threw my",
    "yelled at my",
    "stole my",
    "bit my"
  ];
  let possetion = ["homework", "toe", "car", "t-shirt"];
  let where = ["on the street", "in my house", "in my driveway"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
