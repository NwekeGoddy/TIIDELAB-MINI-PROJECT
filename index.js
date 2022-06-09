//1. API url

const url = "https://jsonplaceholder.typicode.com/users";

//2. Fetch users from the ApI url
function fetchUsers() {
  // 2.1 Make use of the browser's fetch API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //2.2 Passing the user data to the renderUsers function
      renderUsers(data);
    });
}

//3. Render theusers in the DOM
function renderUsers(usersData) {
  console.log("from render users");
  console.log(usersData);
  const ul = document.getElementById("user-list-container");
  console.log(ul);

  //3.1 Render an li tag for each of the users
  usersData.forEach((user, index) => {
    console.log(user, index);
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
    `;
    //3.2 Append the current user li tag to the ul tag
    ul.appendChild(li);
  });
}

//4. Add a search function in the DOM
function searchUsersByUsername() {
  const input = document.getElementById("search");
  const ul = document.getElementById("user-list-container");

  const inputValue = input.value.toUpperCase();
  const usersList = ul.querySelectorAll("li");

  //loop through all the users and render the onces that match the search
  for (let index = 0; index < usersList.length; index++) {
    const usernameSpanTag = usersList[index].querySelector(".username");
    const usernameSpanTagValue = usernameSpanTag.innerHTML.toUpperCase();
    const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

    if (isMatch) {
      usersList[index].style.display = "block";
    } else {
      usersList[index].style.display = "none";
    }
  }
}
//Calling the fetch function
fetchUsers();
