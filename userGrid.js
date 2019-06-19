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

// Execution

const userGrid = document.querySelector("#user-grid");
for (let i = 0; i < 9; i++) {
   userGrid.appendChild(createUserElement());
}
