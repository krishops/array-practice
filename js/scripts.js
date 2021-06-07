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
  
  console.log(favorites);

  // let favoritesTwo = [favorites[1],favorites[0],favorites[2]].toString();

  // console.log(favoritesTwo);

  // let favoritesThree = [];
  // favoritesThree.push(favoritesTwo);
  // console.log(favoritesThree);

  $("#output1").text(favorites[0]);
  $("#output2").text(favorites[1]);
  $("#output3").text(favorites[2]);
});

});