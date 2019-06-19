/**
 * Helper Functions for displaying the Random Person Grid.
 */

// Globals

const placeholderPerson = {
   name: "Placeholder Person",
   imageUrl: "https://picsum.photos/100",
   email: "no@email.com"
};

// Functions

/**
 * Creates an element for displaying a single person. If a valid person object is not specified, placeholder
 * text will be used.
 *
 * @param {{ name: string, imageUrl: string, email: string }} person the person object
 * @returns { Element } the person Element
 */
function createPersonElement(person = placeholderPerson) {
   const personDiv = document.createElement("div");
   personDiv.classList.add("person");

   const image = document.createElement("img");
   image.src = person.imageUrl;
   image.alt = person.name;

   const name = document.createElement("h3");
   name.textContent = person.name;

   const email = document.createElement("h4");
   email.textContent = person.email;

   personDiv.appendChild(image);
   personDiv.appendChild(name);
   personDiv.appendChild(email);

   return personDiv;
}

// Execution

const personGrid = document.querySelector("#person-grid");
for (let i = 0; i < 9; i++) {
   personGrid.appendChild(createPersonElement());
}
