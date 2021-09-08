//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
   //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  // rootElem.textContent = `Got ${episodeList[0].id} episode(s)`;
  var count = 0, ep = 0;
  for (var i = 0; i <parseInt((episodeList.length/3) + 1); i++) {
    rootElem.textContent=document.write('<div class="row">');
    count = 0;
    do
    {
      rootElem.textContent=document.write(
        '<div class="column">'+
        '<div class="card">' +
        '<header class="header">'+
        "<h2>"+(episodeList[ep].name)+" - S0"+(episodeList[ep].season)+"E0"+(episodeList[ep].number)+"</h2>"+
        '</header>'+
        '<img class="image" src='+(episodeList[ep].image.medium)+'>' +
        '<div class="description">'+(episodeList[ep].summary)+'</div>' +
        '</div>'+
        '</div>'
        );
        count++;
        ep++;
    }while(((count) % 3 !== 0)&& ep <= 72);
     rootElem.textContent=document.write('</div>');
  }



  var file = location.pathname.split( "/" ).pop();

var link = document.createElement( "link" );
link.href = "style.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );
}

window.onload = setup;
