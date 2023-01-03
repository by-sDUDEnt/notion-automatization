async function retrievePageById(notion, pageId){
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response

}

module.exports = {retrievePageById}