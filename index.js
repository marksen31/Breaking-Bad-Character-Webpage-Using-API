function foo(data) {
    let container = document.createElement("div");
    container.setAttribute("class", "container");

    let row = document.createElement("div");
    row.setAttribute("class", "row");


    data.forEach(element => {
        let col = document.createElement("div");
        col.setAttribute("class", "col-4 mb-3");

        let card = document.createElement("div");
        card.setAttribute("class", "card h-100");

        let cardImg = document.createElement("img");
        cardImg.setAttribute("class", "card-img-top");
        cardImg.setAttribute("src", element.img);

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let cardTitle = document.createElement("div");
        cardTitle.setAttribute("class", "h2");
        cardTitle.innerHTML = element.name;

        let cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML = "Nickname: "+ element.nickname + " Character: " 
        + element.portrayed + " Occupation: " + element.occupation[0] + 
        " Actually Who: " + element.occupation[0] + " Alive or Dead: " 
        + element.status + " Birthday: " + element.birthday;

        cardBody.append(cardTitle, cardText);
        card.append(cardImg, cardBody);
        col.append(card)
        row.append(col);
    });

    container.append(row);
    document.body.append(container);
}

async function getJSON(){
    try {
    let resp = await fetch('https://breakingbadapi.com/api/characters');
    console.log(resp);
    let data = await resp.json();
    foo(data)
    }catch(error){
    console.log(error)
}
}

getJSON()
