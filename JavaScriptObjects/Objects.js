var movies = [
  {
    title: "Dunkirk", hasWatched: true, rating: 4.8
  };

  {
    title: "I spit on your grave", hasWatched: true, rating: 4.0
  };

  {
    title: "Split", hasWatched: true, rating: 4.5
  };

  {
    title: "Atomic Blonde", hasWatched: false, rating: 3.55
  };
]

function myForEach(movie){
  if(movie.hasWatched == true)
  console.log("You have watched \" " + movie.title + " \" - " + rating);
  else
  console.log("You have not seen \" " + movie.title + " \" - " + rating);

}

movies.myForEach(movie);
