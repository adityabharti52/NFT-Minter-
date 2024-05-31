/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFTs
let nftCollection = [];

// Function to mint an NFT
function mintNFT(title, director, genre, releaseYear, duration, rating, language) {
    // Create an NFT object
    const nft = {
        title: title,
        director: director,
        genre: genre,
        releaseYear: releaseYear,
        duration: duration,
        rating: rating,
        language: language
         // Additional metadata can be added here

    };
    // Store the NFT object in the collection
    nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("NFT " + (i + 1));
        console.log("Title: " + nftCollection[i].title);
        console.log("Director: " + nftCollection[i].director);
        console.log("Genre: " + nftCollection[i].genre);
        console.log("Release Year: " + nftCollection[i].releaseYear);
        console.log("Duration: " + nftCollection[i].duration);
        console.log("Rating: " + nftCollection[i].rating);
        console.log("Language: " + nftCollection[i].language);
        console.log('---------------------');
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Mint some Indian movie NFTs with detailed metadata
mintNFT('3 Idiots', 'Rajkumar Hirani', 'Comedy-Drama', 2009, '170 minutes', '8.4/10', 'Hindi');
mintNFT('Dangal', 'Nitesh Tiwari', 'Biography', 2016, '161 minutes', '8.4/10', 'Hindi');
mintNFT('Baahubali: The Beginning', 'S. S. Rajamouli', 'Action', 2015, '159 minutes', '8.0/10', 'Telugu');
mintNFT('Lagaan', 'Ashutosh Gowariker', 'Sports-Drama', 2001, '224 minutes', '8.1/10', 'Hindi');
mintNFT('Kabhi Khushi Kabhie Gham', 'Karan Johar', 'Drama', 2001, '210 minutes', '7.4/10', 'Hindi');

// List all NFTs
listNFTs();

// Get the total supply of NFTs
console.log("Total Supply: " + getTotalSupply());