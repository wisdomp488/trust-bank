// const deploy = document.getElementById('deploy');
// const develop = document.getElementById('develop');
// const demolish = document.getElementById('demolish');

// function greeCee() {
//   develop.classList.add('hidden');
//   deploy.classList.remove('hidden');
//   demolish.classList.remove('hidden'); // shows menu
// }

// function secTion() {
//   develop.classList.remove('hidden');
//   deploy.classList.add('hidden');
//   demolish.classList.add('hidden'); // hides menu
// }


const develop = document.getElementById('develop');
const deploy = document.getElementById('deploy');
const demolish = document.getElementById('demolish');

window.greeCee = function() {
  develop.classList.add('hidden');    // hide hamburger
  deploy.classList.remove('hidden');  // show X

  // Animate menu open
  demolish.style.maxHeight = demolish.scrollHeight + "px";
};

window.secTion = function() {
  develop.classList.remove('hidden');  // show hamburger
  deploy.classList.add('hidden');      // hide X

  // Animate menu close
  demolish.style.maxHeight = "0";
};


    // Ensure only one accordion item is open at a time
    const checkboxes = document.querySelectorAll('.accordion input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        checkboxes.forEach((cb) => {
          if (cb !== checkbox) cb.checked = false;
          // Update ARIA attributes
          const label = cb.nextElementSibling;
          label.setAttribute('aria-expanded', cb.checked ? 'true' : 'false');
        });
      });
    });

const dropdownMenu = document.getElementById('dropdownMenu');
const plusIcon = document.getElementById('plusIcon');
const minusIcon = document.getElementById('minusIcon');

function onPoint() {
  document.getElementById('dropdownMenu').style.display = "block";
  document.getElementById('plusIcon').style.display = "none";
  document.getElementById('minusIcon').style.display = "block";
}

    // Close dropdown when clicking outside
function outPoint() {
  document.getElementById('dropdownMenu').style.display = "none";
  document.getElementById('plusIcon').style.display = "block";
  document.getElementById('minusIcon').style.display = "none";
};

// When menu opens
document.body.classList.add('overflow-hidden');

// When menu closes
document.body.classList.remove('overflow-hidden');


