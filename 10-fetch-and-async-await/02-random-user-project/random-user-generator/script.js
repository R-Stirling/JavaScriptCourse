const btn = document.getElementById('generate');
const btnDiv = btn.querySelector('div');

const generateUser = () => {
  showSpinner();
  fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => {
      randomUser(data.results[0]);
      hideSpinner();
    });
};

function showSpinner() {
  document.querySelector('.spinner').style.display = 'block';
}
function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none';
}

const randomUser = (user) => {
  //   background color
  if (user.gender === 'male') {
    document.body.style.backgroundColor = 'darkblue';
  } else {
    document.body.style.backgroundColor = 'rebeccapurple';
  }

  //   new pic
  //   const img = document.querySelector('img');
  //   //   const picture = user.picture;
  //   if (!user.picture.large) {
  //     img.src = `${user.picture.medium}`;
  //   } else {
  //     img.src = `${user.picture.large}`;
  //   }

  //   New Data
  const dataDiv = document.querySelector('#user');
  dataDiv.innerHTML = `
   <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
                <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.cell}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city} ${user.location.state}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
              </div>
          </div>
        </div>`;
};

btn.addEventListener('click', generateUser);
