// Modals

var rootEl = document.documentElement;
var $modals = getAll('.modal');
var $modalTriggers = getAll('.modal-trigger');
var $modalCloses = getAll('.modal-card-head .delete, .modal-card-foot .button');


console.log($modals);

console.log($modalTriggers);

console.log($modalCloses);

if ($modalTriggers.length > 0) {
    $modalTriggers.forEach(function ($el) {
        $el.addEventListener('click', function () {
            var target = $el.dataset.target;
            openModal(target);
        });
    });
}

if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
            closeModals();
        });
    });
}

function openModal(target) {
    var $target = document.getElementById(target);
    rootEl.classList.add('is-clipped');
    $target.classList.add('is-active');
}

function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
        $el.classList.remove('is-active');
    });
}

// Functions

function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}


// contact form js below (note: below is copied from https://www.w3schools.com/howto/howto_js_snackbar.asp )
function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    return false;
  }
