console.log('***** Music Collection *****')

//created a new variable called collection with an empty array.
let collection = [];
//end collection as empty

//CREATING THE 'addToCollection' FUNCTION:
function addToCollection ( title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
};
collection.push(album);
return album;
}
//END CREATING THE 'addToCollection' FUNCTION.


//TESTING THE 'addToCollection' FUNCTION TO ADD 6 MORE ALBUMS:

addToCollection('Take Time', 'Giveon', 2020 );
console.log('Added:', collection[0]);//TEST 1 = WORKED!!

addToCollection('Over It', 'Summer Walker', 2019 );
console.log('Added:', collection[1]);//TEST 2 = WORKED!!

addToCollection('Trilogy', 'The Weeknd', 2012);
console.log('Added:', collection[2]);//TEST 3 = WORKED!!

addToCollection('Take Care', 'Drake', 2011);
console.log('Added:', collection[3]);//TEST 4 = WORKED!!

addToCollection('Aster', 'Aster', 1989);
console.log('Added:', collection[4]);//TEST 5 = WORKED!!

addToCollection('Seven Days', 'PartyNextDoor', 2017);
console.log('Added:', collection[5]);//TEST 6 = WORKED!!

//END TESTING THE 'addToCollection' FUNCTION = ALL WORKED!!

//CREATING A CONSOLE LOG TO SHOW FULL collection ARRAY:
console.log('The Full Collection:', collection);
//END CONSOLE LOGGING FULL collection ARRAY = WORKED!!

//CREATING THE showCollection FUNCTION:
function showCollection (array) {
  for (let i = 0; i < array.length; i++){
    console.log( `${array[i].title} by ${array[i].artist}, publishes in ${array[i].yearPublished}`);
  }
};
//sidenote: you can try this with a 'for of' loop as well = (let [variable] of [array name])
//END CREATING THE showCollection FUNCTION


//TESTING OUT THE 'showCollection' FUNCTION:
showCollection(collection);
//END TESTING THE 'showCollection' FUNCTION = WORKED!





//CREATING THE 'findByArtist' FUNCTION:
function findByArtist(artist){
  let artistSearched = [];
  for (let i = 0; i < collection.length; i++){
    if( artist === collection[i].artist){
      artistSearched.push(collection[i])
      return artistSearched;
    }
  }
  return artistSearched;
}//END CREATING THE 'findByArtist' FUNCTION.

//TESTING OUT THE 'findByArtist' FUNCTION:
console.log(findByArtist("Drake"));//IS IN MY COLLECTION
console.log(findByArtist("Travis Scott"));//IS NOT IN MY COLLECTION
console.log(findByArtist("Amy"));//IS IN MY COLLECTION

//END TESTING THE 'findByArtist' FUNCTION = WORKED!
