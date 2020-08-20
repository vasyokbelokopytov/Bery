const categories = document.getElementById('categories');
const categories__list = document.getElementById('categories__list');

function active(initiator, target) {
    initiator.addEventListener("click", function() {
            this.classList.toggle("active");
            target.classList.toggle('active');
        })}


function checkboxes() {
    const checkboxes = document.getElementsByClassName('categories__input');
    const checkboxAllCategories = document.getElementById('all');
    const categories__list = document.getElementById('categories__list');


    categories__list.addEventListener('change', function(e) {

        if (e.target === checkboxAllCategories) {
            if (e.target.checked === true) {
                for (let i = 0; i < checkboxes.length; i++) {
                    checkboxes[i].checked = true;
                }
            }

            else {
                for (let i = 0; i < checkboxes.length; i++) {
                    checkboxes[i].checked = false;
                }
            }
        }

        else {
            if (e.target.checked === false) {
                checkboxAllCategories.checked = false;
            }

            else {
                for (let i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i] !== checkboxAllCategories && checkboxes[i].checked === false) {
                        return;
                    }
                }

                checkboxAllCategories.checked = true;
            }
        }
    })}

active(categories, categories__list);
checkboxes();
