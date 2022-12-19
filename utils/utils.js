// écrire la fonction pour les majuscule

module.exports.uppercase = (uniqueName)=> {
    const regex = /[A-Z]/ ;
    const found = uniqueName.match(regex)
    console.log(found)
    if( found === null || found.length === 0) return true;
    else return false;


}