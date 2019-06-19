/**
 * Helper Functions for displaying the Random User Grid.
 */

// Globals

const placeholderUser = {
   name: "Placeholder User",
   imageUrl: "https://picsum.photos/100",
   email: "placeholder@email.com"
};

// Functions

/**
 * Creates an element for displaying a single user. If a valid user object is not specified, placeholder
 * text will be used.
 *
 * @param {{ name: string, imageUrl: string, email: string }} user the user object
 * @returns { Element } the user Element
 */
function createUserElement(user = placeholderUser) {
   const userDiv = document.createElement("div");
   userDiv.classList.add("user");

   const image = document.createElement("img");
   image.src = user.imageUrl;
   image.alt = user.name;

   const name = document.createElement("h3");
   name.textContent = user.name;

   const email = document.createElement("h4");
   email.textContent = user.email;

   userDiv.appendChild(image);
   userDiv.appendChild(name);
   userDiv.appendChild(email);

   return userDiv;
}

/**
 * Fetches a specified number of random users and returns an array of user objects, with each object
 * containing the user's full name, email, and image url.
 *
 * @param {string} [gender="any"] the gender of the users
 * @param {number} [count=9] the number of random users to fetch
 * @returns {{ name: string, imageUrl: string, email: string }[]} the array of random users
 */
async function fetchRandomUsers(gender = "any", count = 9) {
   const requestUrl = `https://randomuser.me/api/?inc=name,picture,email&results=${count}&gender=${gender}&`;
   const response = await fetch(requestUrl);
   const json = await response.json();
   const results = json.results;

   const users = results.map((userData) => {
      return {
         name: `${userData.name.first} ${userData.name.last}`,
         email: userData.email,
         imageUrl: userData.picture.large
      };
   });

   console.log(users);

   return users;
}

function randomizeUserGrid(gender) {}

// Execution
console.log(fetchRandomUsers());
