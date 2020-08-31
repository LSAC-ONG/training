// Tema pentru butoanele din pagina
class Theme {
  backgroundColor;
  color;
  constructor(backgroundColor, color) {
    this.backgroundColor = backgroundColor;
    this.color = color;
  }
}

const lightTheme = new Theme('white', 'black');
const darkTheme = new Theme('blue', 'white');

// Tema aplicata momentan
let appliedTheme;

function applyTheme(theme) {
  const buttons = document.getElementsByClassName('btn');
  for (let button of buttons) {
    button.style.color = theme.color;
    button.style.backgroundColor = theme.backgroundColor;
  }
}

function applyOtherTheme() {
  if (appliedTheme == darkTheme) {
    applyTheme(lightTheme);
    appliedTheme = lightTheme;
  } else {
    applyTheme(darkTheme);
    appliedTheme = darkTheme;
  }
}

document.body.onload = applyTheme(darkTheme);
appliedTheme = darkTheme;

const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  displayUser(name, email);

  // Evita reincarcarea paginii (si pierderea utilizatorilor deja afisati).
  // In mod normal, utilizatorii se salveaza intr-o baza de date si se afiseaza
  // la incarcarea paginii.
  event.preventDefault();
});

function displayUser(name, email) {
  if (name === '' || email === '') {
    return;
  }

  const usersElement = document.getElementById('users');
  const buttonElement = document.createElement('button');
  buttonElement.innerHTML = 'Show email';
  buttonElement.classList.add('btn');

  // <li> </li>
  const userElement = document.createElement('li');
  // <li> ${name} </li>
  userElement.innerHTML = name;
  userElement.classList.add('user');

  buttonElement.addEventListener('mouseover', function() {
    alert("Don't touch this");
  });

  buttonElement.addEventListener('click', function(event) {
    const prevParagraph = document.getElementById('email-par');
    /*
      1) Prima varianta
      if (prevParagraph === null) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = email;
        paragraph.id = 'email-par';
        userElement.appendChild(paragraph);
      } else if (prevParagraph.style.display === 'none') {
        prevParagraph.style.display = 'initial';
      } else {
        prevParagraph.style.display = 'none';
      }

      2) A doua varianta
      if (prevParagraph === null) {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = email;
        paragraph.id = 'email-par';
        userElement.appendChild(paragraph);
      } else {
        prevParagraph.remove();
      }
    */
    if (prevParagraph === null) {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = email;
      paragraph.id = 'email-par';
      userElement.appendChild(paragraph);
    } else {
      userElement.removeChild(prevParagraph);
    }
  });

  userElement.appendChild(buttonElement);
  usersElement.appendChild(userElement);
}

function readAndDisplayMessage() {
  const message = prompt('Choose message');
  const paragraph = document.createElement('p');
  paragraph.innerHTML = message;
  document.body.appendChild(paragraph);
}

document.body.onload = readAndDisplayMessage();
