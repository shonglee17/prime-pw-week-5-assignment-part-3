console.log('***** Music Collection *****')

const collection = [];

function addToCollection(...x){
    console.log('in addToCollection')
    collection.push(...x)
    return collection;
}//end addToCollection


const music1 = {
    title1 : 'Hot Fuss',
    artist1 : 'The Killers',
    yearPublished1 : 2004,
}//end music

const music2 = {
    title2 : 'Sams Town',
    artist2 : 'The Killers',
    yearPublished2 : 2006, 
}//end music1

const music3 ={
    title3 : 'Dusk And Summer',
    artist3 : 'Dashboard Confessionals',
    yearPublished3 : 2006,
}
const music4 = {
    title4 : 'Secret Valentine',
    artist4 : 'We The Kings',
    yearPublished4 : 2007,
}
const music5 ={
    title5 : 'Homesick',
    artist5 : 'A Day To Remember',
    yearPublished5 : 2009,
}
const music6 = {
    title6 : 'Luxury Disease',
    artist6 : 'One Ok Rock',
    yearPublished6: 2022,
}

console.log('add this object to addToCollection:', addToCollection(music1) )
console.log('add this object to addToCollection:', addToCollection(music2) )
console.log('add this object to addToCollection:', addToCollection(music3) )
console.log('add this object to addToCollection:', addToCollection(music4) )
console.log('add this object to addToCollection:', addToCollection(music5) )
console.log('add this object to addToCollection:', addToCollection(music6) )
console.log(collection)

function showCollection (){
    
}