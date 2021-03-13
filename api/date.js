// this is a comments update
// this comment is write from main branch
// this comment is a response to commit to the main branch, from SF branch
module.exports = async (req, res) => {
  res.status(200).send({message:"change from serverless-function branch"});
};
