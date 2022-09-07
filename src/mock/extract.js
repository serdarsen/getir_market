/* 
   
   Extract Helper
   Extract helper extracts tags and item types from items located in db.json, 
   in order to create their mock database tables in db.json

   Usage
   node ./src/mock/extract.js

*/

const path = require("path");
const fs = require("fs");
const db =  require("./db.json");

const extract = () => {
  const { items, companies } = db;

  const tagsSet = new Set();
  const itemTypesSet = new Set();

  for(let i = 0; i < items.length; i++) {
    const item = items[i] || {};
    const {tags, itemType} = item;

    tags.forEach(tag => tagsSet.add(tag))
    itemTypesSet.add(itemType);
  }

  const tags = Array.from(tagsSet);
  const itemTypes = Array.from(itemTypesSet);
  const updatedDb = { tags, itemTypes, items, companies };

  const file = path.join(__dirname, "db.json");
  const writeStream = fs.createWriteStream(file);

  writeStream.write(JSON.stringify(updatedDb, null, 4));
  writeStream.on("finish", () => {
    console.log("wrote all data to file");
  });
  writeStream.end();
};

extract();