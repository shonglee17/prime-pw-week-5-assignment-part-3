console.log('***** Music Collection *****')


// const music1 = {
//     title : 'Homesick',
//     artist : 'A Day To Remember',
//     yearPublished : 2009,
    
// }

// const music2 = {
//     title : 'Sams Town',
//     artist : 'The Killers',
//     yearPublished : 2006, 
//     tracks : {'When You Were Young' : '3:40', 
//             'Sams Town' : '4:06'}
// }

// const music3 ={
//     title : 'Luxury Disease',
//     artist : 'One Ok Rock',
//     yearPublished: 2022,
//     tracks : ['Save Yourself : 3:18', 'Let Me Let You Go : 3:01', 'Neon : 3:05']
// }
// const music4 = {
//     title : 'Secret Valentine',
//     artist : 'We The Kings',
//     yearPublished : 2007,
//     tracks : ['Check Yes Juliet : 3:40', 'Stay Young : 2:48']
// }
// const music5 ={
//     title : 'Hot Fuss',
//     artist : 'The Killers',
//     yearPublished : 2004,
//     tracks : ['Mr Brightside : 3:45', 'All These Things Ive Done : 5:02']
// }
// const music6 = {
//     title : 'Dusk And Summer',
//     artist : 'Dashboard Confessionals',
//     yearPublished : 2006,
//     tracks : ['Stolen : 3:53', 'Currents : 4:24', 'So Long, So Long : 4:16']
// }



const collection = [];

function addToCollection(title, artist, yearPublished){
    let x = {title, artist, yearPublished}
    collection.push(x)
    return x;
}//end addToCollection

addToCollection('Dusk And Summer','Dashboard Confessionals',2006)
addToCollection('Homesick', 'A Day To Remember', 2009)
addToCollection('Sams Town', 'The Killers', 2006)
addToCollection('Luxury Disease', 'One Ok Rock',2022)
addToCollection('Secret Valentine','We The Kings', 2007,)
addToCollection('Hot Fuss','The Killers', 2004)
console.log(collection)



function showCollection (collection){
    
    for (i=0 ; i<collection.length ; i++){
        console.log(collection[i].title + " by " + collection[i].artist + " published in " + collection[i].yearPublished)
        // console.log(forEach(collection[i].tracks))
    }//end for
    return collection.length;
}//end showCollection
console.log('this is how many items are in the array:', showCollection(collection) );

let Artist = []
function findByArtist(x){
    for (i=0; i<collection.length; i++){
       if (x === collection[i].artist){
            Artist.push(collection[i])
            
        }//end if
    }//end for
    return x;
}//end findByArtist
console.log('finding if this artist is in array:', findByArtist('We The Kings') )
console.log(Artist)


//Stretch Goals
let newCollection = []

function search(a , b, c){
    for (i=0; i<collection.length; i++){
        if (a === collection[i].artist && b === collection[i].yearPublished && c === collection[i].tracks){
            newCollection.push(collection[i])
        }//end if 
        else if ( a === ' ' || b === ' ' || c === ' '){
                return collection
        }//end else if
    }//end for
    return newCollection
    }//end search
console.log('check to see if artist and title is in array:', search( ) )


