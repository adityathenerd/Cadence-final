let fs = require("fs");
let axios = require("axios");

let songs = ["Maan Meri Jaan", "Me & Me"];
let durations = ["3:14", "4:35"];
let ipfsArray = [];

for (let i = 0; i < songs.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      image: `ipfs://QmSr2LtHKd59DURtC2KcZEZFz7my4C9WzEwVP1vWVPogGZ/media/0`, //xxx = hash
      name: songs[i],
      animation_url: `ipfs://QmSr2LtHKd59DURtC2KcZEZFz7my4C9WzEwVP1vWVPogGZ/media/${i+1}`, //xxx = hash
      duration: durations[i],
      artist: "King",
      year: "2022"
    },
  });
}

axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY":
        "TkuJHopgCWLsR8tDni9G7LXk8T5OIh96y16kyEyDM2bLdynif3AvRZedO6eYHDn1",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
