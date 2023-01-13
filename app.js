/* Imports */

/* Get DOM Elements */
const leftDropdown = document.getElementById('left-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const rightDropdown = document.getElementById('right-dropdown');

const leftEl = document.getElementById('left');
const middleEl = document.getElementById('middle');
const rightEl = document.getElementById('right');

const inputEl = document.getElementById('comment-input');
const buttonEl = document.getElementById('comment-button');
const commentEl = document.getElementById('commens');
const reportEl = document.getElementById('report');

/* State */
let left = 0;
let middle = 0;
let right = 0;

let comments = [''];

/* Events */
leftDropdown.addEventListener('change', () => {
    const leftValue = leftDropdown.value;

    left++;

    leftEl.style.backgroundImage = `url(./assets/${leftValue}-1.png)`;

    displayStats();
});

middleDropdown.addEventListener('change', () => {
    const middleValue = middleDropdown.value;

    middle++;

    middleEl.style.backgroundImage = `url(./assets/${middleValue}-2.png)`;

    displayStats();
});

rightDropdown.addEventListener('change', () => {
    const rightValue = rightDropdown.value;

    right++;

    rightEl.style.backgroundImage = `url(./assets/${rightValue}-3.png)`;

    displayStats();
});

buttonEl.addEventListener('click', () => {
    const commentValue = inputEl.value;

    buttonEl.push(commentValue);

    buttonEl.value = '';

    displayComments();
});
/* Display Functions */
function displayStats() {
    reportEl.textContent = `Left selected ${left} times Middle selected ${middle} times Right selected ${right} times.`;
}

function displayComments() {
    commentEl.textContent = '';

    for (let comment of comments) {
        const newComment = document.createElement('p');
        newComment.classList.add('comment');
        newComment.textContent = comment;

        commentEl.append(newComment);
    }
}
// (don't forget to call any display functions you want to run on page load!)
