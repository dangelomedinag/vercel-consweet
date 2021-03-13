import {db} from "../firestore";
// let products = 
module.exports = async (req, res) => {

	// const collection = await db.collection("productos").get()

	
	// collection.forEach(it=>{
	// 	products.push(it.data())
	// })

		
  const date = new Date().toString();
  res.status(200).send({Date, message:"change from serverless-function branch"});
};
