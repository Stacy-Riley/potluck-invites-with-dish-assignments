// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelector(".assign");
//only appears when the guest list is full
const assignedItems = document.querySelector(".assigned-items");
// targets the list that will populate with the guest’s
// name and their assigned dish


//Function for when invite button is pressed:
addGuestButton.addEventListener("click", function () {
  let guest = guestInput.value;
  // console.log(guest);

  if (guest !== "") {
    let listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);

    clearInput();
    updateGuestCount();
  }
});

//Function to clear the user's input once the invite button is clicked:
const clearInput = function () {
  guestInput.value = "";
};

//Function to execute once the user enters 8 attendies:
const updateGuestCount = function () {
  let guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//Assign Dishes to Guests Function
const assignItems = function () {
  const potluckItems = [
    "Spinach Artichoke Dip",
    "Spicy Aji Hummus with Pita Chips",
    "Broccoli Salad",
    "Black Bean Taquitos",
    "Strawberry Salad",
    "Chocolate Chip Cookies",
    "Zuccini noodles with Corn",
    "3 Bean Isreali Couscous Salad",
    "Fruit Bowl",
    "Oatmeal Cookies",
    "Sweet and Sour Meatless Balls",
    "White Bean Chili with Sour Dough Bread"
  ];

  // console.log("potluckItems length", potluckItems.length);

  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing: ${randomPotluckItem}.`;
    // (You’re using guest.innerText to access the name inside the li element.
    // If you used guest without innerText, you’d grab the actual list element
    // instead of the text.)

    potluckItems.splice(randomPotluckIndex, 1);
    assignedItems.append(listItem);
  }
};

//Assign Dishes Click Event
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
