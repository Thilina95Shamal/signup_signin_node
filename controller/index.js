const Models = require("../model");


const insertNewDocument = async (modelDb, storeObj) => {
    let data = new Models[modelDb](storeObj);
    return await data.save();
};


const find = async (modelDb, queryObj) =>
  await Models[modelDb].find(queryObj).exec();


const findOneObject = async (modelDb, queryObj) =>
  await Models[modelDb].findOne(queryObj).exec();


  module.exports = {
    insertNewDocument,
    find,
    findOneObject,  
};