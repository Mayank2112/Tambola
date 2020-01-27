var mybox = [];
var players = [];
var dummyNumbers = [];
var noOfPlayers = 0;
var firstrow=0;
var middlerow=0;
var lastrow=0;
var fullhouse=0;
var fourcorners=0
var firsthalf=0;
var secondhalf=0;

function resetMybox() {
  mybox = [];
  for (let counter = 1; counter <= 90; counter++) {
    mybox.push(counter);
  }
}

function resetdummyNumbers() {
  dummyNumbers = [];
  for (let counter = 1; counter < 5; counter++) {
    dummyNumbers.push(counter);
  }
}

function setTable(num) {
  document.getElementById("number").innerHTML = num;
  let str = "num@" + num;
  document.getElementById(str).style.backgroundColor = "Green";
}

function createTable() {
  let t = document.getElementById("board");
  for (let counter = 1; counter < 90; counter++) {
    var row = t.insertRow(-1);
    var num1 = row.insertCell(0);
    var num2 = row.insertCell(1);
    var num3 = row.insertCell(2);
    var num4 = row.insertCell(3);
    var num5 = row.insertCell(4);
    var num6 = row.insertCell(5);
    var num7 = row.insertCell(6);
    var num8 = row.insertCell(7);
    var num9 = row.insertCell(8);
    var num10 = row.insertCell(9);
    num1.id = "num@" + counter;
    num1.innerHTML = counter++;
    num2.id = "num@" + counter;
    num2.innerHTML = counter++;
    num3.id = "num@" + counter;
    num3.innerHTML = counter++;
    num4.id = "num@" + counter;
    num4.innerHTML = counter++;
    num5.id = "num@" + counter;
    num5.innerHTML = counter++;
    num6.id = "num@" + counter;
    num6.innerHTML = counter++;
    num7.id = "num@" + counter;
    num7.innerHTML = counter++;
    num8.id = "num@" + counter;
    num8.innerHTML = counter++;
    num9.id = "num@" + counter;
    num9.innerHTML = counter++;
    num10.id = "num@" + counter;
    num10.innerHTML = counter;
  }
}

function playgame() {
  document.getElementById("upper").style.display = "none";
  document.getElementById("button").style.display = "block";
  document.getElementById("number").style.display = "block";
  document.getElementById("temp").style.display = "block";
  noOfPlayers = document.getElementById("players").value;
  createTable();
  resetMybox();
  for (let count = 1; count <= noOfPlayers; count++) {
    document.getElementById(count).style.display = "block";
    getTicket();
    displayTicket(count - 1, count * 10);
  }
}

function getLuckyNumber() {
  let luckyNumber = mybox[Math.floor(Math.random() * mybox.length)];
  mybox.splice(mybox.indexOf(luckyNumber), 1);
  console.log(luckyNumber);
  setTable(luckyNumber);
  for (let player = 0; player < noOfPlayers; player++) {
    setLuckyNumber(luckyNumber,player+1);
    checkTicket(player, luckyNumber);
  }
}

function setLuckyNumber(num,player) {
  let id = "number@"+player+""+ num;
  try{
  document.getElementById(id).style.backgroundColor = "Green";
  }
  catch(err){
    console.log("not in anyone");
  }
}

function getTicket(count) {
  let temp = [];
  resetdummyNumbers();
  for (let index = 0; index < 18; index++) {
    let index1 = Math.floor(Math.random() * dummyNumbers.length);
    temp.push(dummyNumbers[index1]);
    dummyNumbers = dummyNumbers.map(function (num) { return num + 5; });
  }
  for (let index = 0; index < 3; index++) {
    let randomNum = Math.floor(Math.random() * temp.length);
    temp.splice(randomNum, 1);
  }
  let ticket = temp.sort(function (a, b) { return a - b });
  players.push(ticket);
}

function displayTicket(myplayer, id) {
  let table = document.getElementById(id);
  let player = players[myplayer].slice();
  for (let index = 0; index < player.length - 1; index++) {
    let str = "number@"+(myplayer+1);
    var row = table.insertRow(-1);
    var num1 = row.insertCell(0);
    var num2 = row.insertCell(1);
    var num3 = row.insertCell(2);
    var num4 = row.insertCell(3);
    var num5 = row.insertCell(4);
    num1.id = str + player[index];
    num1.innerHTML = player[index++];
    num2.id = str + player[index];
    num2.innerHTML = player[index++];
    num3.id = str + player[index];
    num3.innerHTML = player[index++];
    num4.id = str + player[index];
    num4.innerHTML = player[index++];
    num5.id = str + player[index];
    num5.innerHTML = player[index];
  }
  table.style.display = "block";
  let buttonId="player"+id;
  document.getElementById(buttonId).style.display="block";
  
}

function checkTicket(player, num) {
  let myplayer = players[player];
  for (let digit of myplayer) {
    if(digit==num){
      myplayer.splice(myplayer.indexOf(num), 1, 0);
      console.log("+++++++++++"+myplayer);
      // if(fourcorners==0){
      //   fourCorners(myplayer, player + 1);
      // }
      // if(firstrow==0){
      //   firstRow(myplayer, player + 1);
      // }
      // if(middlerow==0){
      //   middleRow(myplayer, player + 1);
      // }
      // if(lastrow==0){
      //   lastRow(myplayer, player + 1);
      // }
      // if(firsthalf==0){
      //   if(firstHalf(myplayer, player+1)){
      //     alert("Player"+player + "wins Hindustan");
      //   }
      // }
      // if(secondhalf==0){
      //   if(secondHalf(myplayer, player+1)){
      //     alert("Player"+player + "wins Pakistan");
      //   }
      // }
      // if(fullhouse==0){
      //   fullHouse(myplayer, player+1);
      // }
    }
  }
}

function checkFor(id){
  console.log(id);
  let myplayer=players[id];
  if(fourcorners==0){
    fourCorners(myplayer, id + 1);
  }
  if(firstrow==0){
    firstRow(myplayer, id + 1);
  }
  if(middlerow==0){
    middleRow(myplayer, id + 1);
  }
  if(lastrow==0){
    lastRow(myplayer, id + 1);
  }
  if(firsthalf==0){
    if(firstHalf(myplayer, id+1)){
      alert("Player"+player + "wins Hindustan");
    }
  }
  if(secondhalf==0){
    if(secondHalf(myplayer, id+1)){
      alert("Player"+player + "wins Pakistan");
    }
  }
  if(fullhouse==0){
    fullHouse(myplayer, id+1);
  }
}

function fourCorners(myplayer, player) {
  if (myplayer[0] == 0 && myplayer[4] == 0 && myplayer[10] == 0 && myplayer[14] == 0) {
    fourcorners++;
    alert(player + " wins Four Corner");
  }
  return false;
}

function firstRow(myplayer, player) {
  for (let index = 0; index < 5; index++) {
    if (myplayer[index] != 0) {
      return false;
    }
  }
  firstrow++;
  alert("Player"+player + " wins First Row");
}

function middleRow(myplayer, player) {
  for (let index = 5; index <10; index++) {
    if (myplayer[index] != 0) {
      return false;
    }
  }
  middlerow++;
  alert("Player"+player + " wins Middle Row");
}

function lastRow(myplayer, player) {
  for (let index = 10; index <15; index++) {
    if (myplayer[index] != 0) {
      return false;
    }
  }
  lastrow++;
  alert("Player"+player + " wins Last Row");
}

function fullHouse(myplayer, player) {
  if (firstHalf(myplayer,player)&&secondHalf(myplayer,player)) {
    fullhouse++;
    alert("Player"+player + "has full house and wins the game");
    location.reload();
  }
}

function firstHalf(myplayer,player){
  for (let index=0;index<10;index++){
    if(myplayer[index]>0 && myplayer[index]<=50){
      return false;
    }
  }
  firsthalf++;
  return true;
}

function secondHalf(myplayer,player){
  for (let index=7;index<15;index++){
    if(myplayer[index]!=0 && myplayer[index]>50){
      return false;
    }
  }
  secondhalf++;
  return true;
}
