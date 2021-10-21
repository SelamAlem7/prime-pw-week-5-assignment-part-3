console.log('***** Music Collection *****')

//created a new variable called collection with an empty array.
let collection = [];
//end collection as empty

//create a funtion names addToCollection
function addToCollection ( title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
};
collection.push(album);
return album;
}

//Here i will be adding my 6 albums:
addToCollection('Take Time', 'Giveon', 2020 );
console.log('Added:', collection[0]);

addToCollection('Over It', 'Summer Walker', 2019 );
console.log('Added:', collection[1]);

addToCollection('Trilogy', 'The Weeknd', 2012);
console.log('Added:', collection[2]);

addToCollection('Take Care', 'Drake', 2011);
console.log('Added:', collection[3]);

addToCollection('Aster', 'Aster', 1989);
console.log('Added:', collection[4]);

addToCollection('Seven Days', 'PartyNextDoor', 2017);
console.log('Added:', collection[5]);

console.log('The Full Collection:', collection);
