/* 
   
   Extract Helper
   Extract helper extracts tags and item types from items located in db.json, 
   in order to create their mock database tables in db.json

   Usage
   node ./src/database/extract.js

*/

const path = require("path");
const fs = require("fs");
const db =  require("./db.json");

const extract = () => {
  const { items, companies } = db;

  const tagsSet = {};
  const itemTypesSet = {};
  const companiesSet = {};

  for(let i = 0; i < items.length; i++) {
    const item = items[i] || {};
    const {tags, itemType, manufacturer} = item;

    tags.forEach(tag => {
        tagsSet[tag] = tagsSet[tag] ? tagsSet[tag] + 1 : 1; 
    });

    itemTypesSet[itemType] = itemTypesSet[itemType] 
                             ? itemTypesSet[itemType] + 1 
                             : 1;

    companiesSet[manufacturer] = companiesSet[manufacturer] 
                                 ? companiesSet[manufacturer] + 1 
                                 : 1;
  }

  const tags_countable = Object.keys(tagsSet).map(tag => ({
    name: tag, count: tagsSet[tag]
  }));

  const item_types_countable = Object.keys(itemTypesSet).map(itemType => ({
    name: itemType, count: itemTypesSet[itemType]
  }));

  const companies_countable = Object.keys(companiesSet).map(company => ({
    name: company, count: companiesSet[company]
  }));

  const updatedDb = {
    items, companies, item_types_countable, 
    tags_countable, companies_countable
  };

  const file = path.join(__dirname, "db.json");
  const writeStream = fs.createWriteStream(file);

  writeStream.write(JSON.stringify(updatedDb, null, 4));
  writeStream.on("finish", () => {
    console.log("wrote all data to file");
  });
  writeStream.end();
};

extract();
