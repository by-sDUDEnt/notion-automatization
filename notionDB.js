

async function retireveDbByID(notion, databaseId){
    const response = await notion.databases.retrieve({ database_id: databaseId });
    return response;
}


async function queryDbById(notion, databaseId){
    const response = await notion.databases.query({
        database_id: databaseId})
    return response;
}




module.exports = {retireveDbByID, queryDbById};