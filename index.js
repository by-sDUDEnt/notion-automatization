require('dotenv').config();

const { Client } = require('@notionhq/client');
const {retireveDbByID, queryDbById} = require('./notionDB.js');
const {retrievePageById} = require('./notionPage.js')
const {retrieveBlock, retrieveBlocksChildren} = require('./notionBlock');
const notion = new Client({ auth: process.env.NOTION_API_KEY });



(async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.retrieve({ database_id: databaseId });
  const test_resp = await queryDbById(notion, databaseId);
  // console.log(test_resp.results.forEach(e => console.log(e)))
  const re2  = await retrievePageById(notion, "e14668b102894cc6b9609d20e1709d23")
  // console.log(re2)
  const re3 = await retrieveBlocksChildren(notion, "e14668b1-0289-4cc6-b960-9d20e1709d23")
  console.log(re3.results.forEach(e => console.log(e.paragraph.rich_text)))
})();
