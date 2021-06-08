function newArray(color, movie, song, book) {
  return [color, movie, song, book];
}

$(document).ready(function() {
$("form#favorites").submit(function(event) {
  event.preventDefault();
  

  const color = $("#color").val();
  const movie = $("#movie").val();
  const song = $("#song").val();
  const book = $("#book").val();

  let favorites = newArray(color, movie, song, book);
  
  let favoritesTwo = [];
  favoritesTwo.push(favorites[1],favorites[0],favorites[2]);

  $("#output1").text(favoritesTwo[0]);
  $("#output2").text(favoritesTwo[1]);
  $("#output3").text(favoritesTwo[2]);
});

});