//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function zeroCheck(num) {
  if (num < 10) {
      return "0" + num;
  } else {
      return num;
  }
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
   //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  // rootElem.textContent = `Got ${episodeList[0].id} episode(s)`;
  var count = 0, ep = 0;
  for (var i = 0; i <parseInt((episodeList.length/3) + 1); i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    rootElem.appendChild(row);
    count = 0;
    do
    {
      let column = document.createElement("div");
      column.setAttribute("class", "column");
      row.appendChild(column);

      let card = document.createElement("div");
      card.setAttribute("class", "card");
      column.appendChild(card);
      
      let header = document.createElement("header");
      header.setAttribute("class", "header");
      card.appendChild(header);

      let title = document.createElement("h2");
      header.appendChild(title);
      title.innerHTML = `${(episodeList[ep].name)} - S${zeroCheck(episodeList[ep].season)}E${zeroCheck(
        episodeList[ep].number
      )} `;

      let image = document.createElement("img");
      image.setAttribute("class", "image");
      image.src=(episodeList[ep].image.medium);
      card.appendChild(image);

      let description = document.createElement("div");
      description.setAttribute("class", "description");
      description.innerHTML = (episodeList[ep].summary);
      card.appendChild(description);

      count++;
      ep++;
    }while(((count) % 3 !== 0)&& ep <= 72);
  }

}

window.onload = setup;
