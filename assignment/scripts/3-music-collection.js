console.log('***** Music Collection *****')

//created a new variable called collection with an empty array.
let collection = 0;
//end collection as empty

//create a funtion names addToCollection
function addToCollection (){
  let album = {
    title: 'Yasteseryal',
    artist: 'Teddy Afro',
    yearPublished: 2005,
};
   collection = album;
   return album++
}//end function addToCollection

addToCollection(collection);
console.log( 'Collection array now has:', collection);


//adding 6 more albums to my collection using the addToCollection function
//addToCollection(collection)
// albumInfo.title = 'Take Time';
// albumInfo.artist = 'Giveon';
// albumInfo.yearPublished= 2020,
// console.log( 'Added 2nd album to collection:', [albumInfo.title2, albumInfo.artist2, albumInfo.yearPublished2]);
// , 'Over It', 'Triology', 'Take Care', 'Aster', 'Seven Days' ]
