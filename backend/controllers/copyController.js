const issueCopy = (req, res)=>{
    res.json({message:'issue copy'});
}

const returnCopy = (req, res)=>{
    res.json({message:'return copy'});
}

module.exports = {
    issueCopy,
    returnCopy
}