// import dotenv from 'dotenv'
const admin = require('firebase-admin');

// if(process.env.ROLLUP_WATCH) {
	// dotenv.config()
// };

const adminsdkconfig = {
  "project_id": process.env.FIRESTORE_project_id ,
  "private_key": process.env.FIRESTORE_private_key.replace(/\\n/g, '\n'),
  "client_email": process.env.FIRESTORE_client_email ,
}

admin.initializeApp({
  credential: admin.credential.cert(adminsdkconfig)
});

// export const db = admin.firestore();
// const db = admin.firestore()


// admin.firestore.FieldValue

// export const util = admin.firestore;
module.exports = {
	db : admin.firestore(),
	util : admin.firestore,
}