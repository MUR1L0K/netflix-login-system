let apiKey = "Ep3hHKfFfaBL3jqIrcvMk6KZNmmJyjzM";
let currentMovie = 0;
let animated = document.getElementById("animatedSection");
let title = document.getElementById("animatedSectionh1");
let subtitle = document.getElementById("animatedSectionSubTitle");
setInterval(picChanger, 7000);
function picChanger() {
  let imgs = [
    "imgs/moviePics/birdbox.webp",
    "imgs/moviePics/thewitcher02.webp",
    "imgs/moviePics/thedeppestbreath.webp",
    "imgs/moviePics/quarterback.webp",
  ];
  let titles = [
    "Birdbox Barcelona",
    "The Witcher 2",
    "Deppest Breath",
    "Quarterback",
  ];
  let subtitles = [
    "Próximo filme de suspense de terror pós-apocalíptico que estreará no serviço de streaming Netflix em 14 de julho de 2023. É um spin-off do filme Bird Box de 2018, que foi adaptado do romance de 2014.",
    "O mutante Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar em um mundo onde as pessoas, muitas vezes, são mais perversas do que as criaturas selvagens.",
    "Documentário de 2023 dirigido e escrito por Laura McGann que traça o perfil da mergulhadora italiana Alessia Zecchini em sua busca para quebrar um recorde mundial com a ajuda do mergulhador de segurança Stephan Keenan.",
    "Três quarterbacks enfrentam sua última temporada de futebol americano no ensino médio. Os garotos tentam equilibrar suas vidas enquanto se preparam para o futebol universitário.",
  ];
  animated.style.background =
    "url(" + imgs[currentMovie] + ") no-repeat center center fixed";
  showText(title, titles[currentMovie], 100);
  showText(subtitle, subtitles[currentMovie], 20);
  currentMovie++;
  if (currentMovie == imgs.length) {
    currentMovie = 0;
  }
}
function showText(el, text, int) {
  el.innerHTML = "";
  let char = text.split("").reverse();
  let typer = setInterval(() => {
    if (!char.length) {
      return clearInterval(typer);
    }
    let next = char.pop();
    el.innerHTML += next;
  }, int);
}
