console.log('***** Music Collection *****')

const collection = [];

function addToCollection(...x){
    console.log('in addToCollection')
    collection.push(...x)
    return collection;
}//end addToCollection


const music1 = {
    title : 'Homesick',
    artist : 'A Day To Remember',
    yearPublished : 2009,
    
}

const music2 = {
    title : 'Sams Town',
    artist : 'The Killers',
    yearPublished : 2006, 
}

const music3 ={
    title : 'Luxury Disease',
    artist : 'One Ok Rock',
    yearPublished: 2022,
}
const music4 = {
    title : 'Secret Valentine',
    artist : 'We The Kings',
    yearPublished : 2007,
}
const music5 ={
    title : 'Hot Fuss',
    artist : 'The Killers',
    yearPublished : 2004,
}
const music6 = {
    title : 'Dusk And Summer',
    artist : 'Dashboard Confessionals',
    yearPublished : 2006,
}

console.log('add in:', addToCollection(music1, music2, music3, music4, music5, music6) )

console.log(collection)



function showCollection (collection){
    
    for (i=0 ; i<collection.length ; i++){
        console.log(collection[i].title + " by " + collection[i].artist + " published in " + collection[i].yearPublished)
        
    }//end for
    return collection.length;
    
}//end showCollection
console.log('this is how many items are in the array:', showCollection(collection) );

let Artist = []
function findByArtist(x){
    for (i=0; i<collection.length; i++)
        if (x === collection[i].artist){
            Artist.push(collection[i])
            return true;
        }
        return false;

}//end findByArtist
console.log('is this is artist in the array?', findByArtist('Dashboard Confessionals') )
console.log(Artist)



