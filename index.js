const googleData = [
    'cats.com',
    'cars.com',
    'udemy.com',
    'catsatron.com',
    'mada.com'
]

const googleSearch = (searchItem, db) => {
    const matches = db.filter(website=> {
        return website.includes(searchItem);
    });
    return matches.length>3 ?matches.slice(0,3): matches;
};

// console.log(googleSearch('cat', googleData));


module.exports = googleSearch;
