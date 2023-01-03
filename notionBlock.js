async function retrieveBlock(notion, blockId){
    const response = await notion.blocks.retrieve({
        block_id: blockId,
      });
    return response;

}

async function retrieveBlocksChildren(notion, blockId){
    const response = await notion.blocks.children.list({
        block_id: blockId
      });
    return response;

}


module.exports = {retrieveBlock, retrieveBlocksChildren}