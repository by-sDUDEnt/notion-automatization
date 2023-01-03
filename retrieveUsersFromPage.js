require('dotenv').config();

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
  const pageId = '18e59dbe694840d5a718e464c65e02d4';
  const response = await notion.pages.retrieve({ page_id: pageId });
//   console.log(response.properties.title);
console.log(response)
})();

