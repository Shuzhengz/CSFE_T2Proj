const yearLabel = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
const quarterLabel = ['Fall', 'Winter', 'Spring', 'Summer'];
let postArray = [];

document.addEventListener("DOMContentLoaded", function() {
    onSubmit();
});



function onSubmit() {
    document.querySelector('#submitButton').onclick = () => {
        addEntries();
        console.log(postArray);
        document.querySelector('.container').style.display = 'grid';
        let name = `${document.querySelector('#fname').value} ${document.querySelector('#lname').value}`;
        console.log(name);
        document.querySelector('#formContents').style.display = 'none';
        document.querySelector('.name').textContent = name ;
        document.querySelector('.no-posts').style.display = 'none';
        addPosts(postArray);
        
    };

}

function addEntries() {
    let years = ['one', 'two', 'three', 'four'];
    let newPosts = [];
    //loop through year
    for (let i = 0; i<4; i++ ) {
        let currentYear = years[i];
        let year = document.querySelectorAll(`.${currentYear} textArea`);
        let hasInternship = document.querySelectorAll(`.${currentYear} select`)
        createEntry(year, hasInternship, yearLabel[i], newPosts);
    } 
    let newArr = postArray.concat(newPosts);
    for (let i = 0; i<newArr.length; i++) {
        postArray.push(newArr[i]);
    }
}

function createEntry(years, hasInternships, yearLevel, newPosts) {
    for (let i = 0; i<4; i++) {
        if (years[i].value === '') {
            continue;
        }
        let post = document.createElement('div');
        post.className = 'quarterPost';
        let heading = document.createElement('h2');
        heading.textContent = yearLevel + ' ' + quarterLabel[i] + ' Quarter';
        post.appendChild(heading);
        let yearHeading = document.createElement('h3');
        yearHeading.textContent = 'Experience/Classes:';
        post.append(yearHeading);
        post.append( `${years[i].value}`);
        newPosts.push(post);
    }
}

function addPosts(postsToADD) {
    let postArea = document.querySelector('.posts');
    for (let i = 0; i<postsToADD.length; i++) {
        postArea.append(postsToADD[i]);
    }
}

function changeDisplay() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('#formContents').style.display = 'block';
}