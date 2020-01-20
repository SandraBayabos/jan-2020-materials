let studentNames = [
  "Consuwella Carrington", // 1
  "Hazwan Faizul", // 2
  "Jovan Goh", // 3
  "Jun Yee Chan", // 4
  "Lee Siew Hwei", // 5
  "Melissa Teh", // 6
  "Jordan Ng", // 7
  "Jyn Mun", // 8
  "Shen Yang", // 9
  "Thieng Zhong Vei", // 10
  "Voon Hui Sen", // 11
  "Ridza", // 12
  "Luqman", // 13
  "Levious", // 14
  "Darren", // 15
  "Eric", // 16
  "Jack", // 17
  "Jayashini", // 18
  "Kumar", // 19
  "Yi Ling", // 20
  "Lim Kay Shaun", // 21
  "Firdaus", // 22
  "Irsyad", // 23
  "Aiman Iskandar", // 24
  "Raj", // 25
  "Raphael", // 26
  "Shabir", // 27
  "Sirhan", // 28
  "Vishnu", // 29
  "Max", // 30
  "Ridzwan" // 31
];

let messageContainer = document.getElementById("message");

let groupCards = [];

let groups = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: []
};

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function sortGroups(array) {
  let group = 1;
  array.forEach(person => {
    if (group === 10) {
      groups[group].push(person);
      group = 1;
    } else {
      groups[group].push(person);
      group++;
    }
  });
}

function publishCards() {
  let cardContainer = document.querySelector(".group-container");
  let timeout = 2000;
  groupCards.forEach(card => {
    setTimeout(() => {
      cardContainer.appendChild(card);
    }, timeout);
    timeout += 2000;
  });
}

function createGroupCards() {
  Object.keys(groups).forEach(key => {
    let newCard = document.createElement("div");
    newCard.classList.add("group-card");
    let cardTitle = document.createElement("h3");
    cardTitle.innerHTML = `Group ${key}`;
    newCard.append(cardTitle);
    newCard.append(document.createElement("hr"));
    groups[key].forEach(person => {
      let newPerson = document.createElement("h5");
      newPerson.innerHTML = person;
      newCard.append(newPerson);
    });
    groupCards.push(newCard);
  });
  publishCards();
}

studentNames = shuffle(studentNames);

let button = document.querySelector(".generate-btn");

button.addEventListener("click", () => {
  messageContainer.innerHTML = "Generating groups...";
  sortGroups(studentNames);
  setTimeout(() => {
    messageContainer.innerHTML = "Groups Generated!";
    createGroupCards();
  }, 3000);
});
