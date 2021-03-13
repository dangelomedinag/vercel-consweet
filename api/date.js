// this is a comments update
// this comment is write from main branch
module.exports = async (req, res) => {
  res.status(200).send({message:"change from serverless-function branch"});
};
