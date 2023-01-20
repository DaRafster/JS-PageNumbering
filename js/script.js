let allUsers = users;

let contactList = document.querySelectorAll(".contact-list");
let pageNavigation = document.querySelectorAll(".pagination");
let total = document.querySelectorAll(".total");

function createCard(user)
{
    contactList[0].innerHTML += 
    `<li class="contact-item cf">
        <div class="contact-details">
            <img class = "avatar" src="${user.image}"<img>
            <h3>${user.name}</h3>
            <span class = "email">${user.email}</span>
        </div>
        <div class = "joined-details">
            <span class = "date">${user.joined}</span>
        </div>
    </li>`;
}

function addCards(people, page)
{
    contactList[0].innerHTML = ""; // empties the page before applying new html

    let i = page * 10;
    let max = i + 10;
    while(i < max)
    {
        createCard(people[i]);
        i++;
    }
}

function addButtons(obj)
{
    let length = Math.ceil(obj.length / 10);

    pageNavigation[0].innerHTML = "";
    for(let i = 0; i < length; i++)
    {
        pageNavigation[0].innerHTML += `<li><a href = "#" onclick=loadPage(allUsers,${i})>${i + 1}</a></li>`;
    }
}

function loadPage(obj, page)
{
    // manipulate total
    total[0].innerHTML = `Total: ${obj.length}`;

    // load content
    addCards(obj, page);
    addButtons(obj);
}

loadPage(allUsers, 0);