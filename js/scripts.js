

$(document).ready(function() {
  $("form#favorites").submit(function(event) {
    event.preventDefault();
    

    const color = $("#color").val();
    const movie = $("#movie").val();
    const song = $("#song").val();
    const book = $("#book").val();

    function newArray(color, movie, song, book) {
      return [color, movie, song, book];
    }

    let favorites = newArray(color, movie, song, book);
    
    console.log(favorites);
  });
  
});