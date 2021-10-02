function carregarFilmes(){
    let filmes = ["images/arrivial.png" ,"images/escolade.png" ,"images/yesteday.png" , "images/insatiable.jpg" , "images/grinch.jpg" , "images/chefinho2.jpg"]

for(let controle=0 ; controle<6; controle = controle + 1){
    document.querySelector(".listaFilmes").innerHTML = "<img src" + filmes[controle] +">"
}

} 