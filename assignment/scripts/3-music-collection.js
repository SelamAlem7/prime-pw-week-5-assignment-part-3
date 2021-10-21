console.log('***** Music Collection *****')

let collection = 0;

function addToCollection (){
   collection = albumInfo;
}

let albumInfo = {
  title: 'Yasteseryal',
  artist: 'Teddy Afro',
  yearPublished: 2005,
};

addToCollection(albumInfo)
console.log( 'Collection array now has:', collection);
