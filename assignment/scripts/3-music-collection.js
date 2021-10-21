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

//Creating showCollection functions
function showCollection (array) {
  console.log('Number of items in the array', array.length);
  let i = 0
  while (i < 7) {
    console.log(collection[0,1], 'by', collection[0,2], 'published in', collection[0,3],);
    i++;
  }
};
// for (let i = 0; i < array.length; i++){
//    console.log((array.title), 'by', array, 'published in',  );
//    return array[i];
//  }

//[array.title, 'by', +array.artist, 'published in', +array.yearPublished,]
showCollection(collection);


// function find(value, array) {
//    for(let i = 0; i < arrray.length; i++ ) {
//       if(i === array[i]) {
//          return true;
//       }
//    }
//    return false;
// }

function findByArtist(artist){
  let artistSearch = 0;
  for (let i = 0; i < collection.length; i++ ){
    const artist = collection[i];
    if(artist === artistSearch)
    console.log(i);
  }
}


//   for (let i = 0; i < collection.length; i++ ) {
//     if(i === collection[i]) {
//       return true;
//     }
//   }
//   return false;
// }

// let artistSearch = collection;
findByArtist(collection);
console.log(findByArtist("The Weeknd", collection));

// let favNumbers = ["2","23","7","17","9"];
// console.log(find("7", favNumbers));
