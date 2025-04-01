import admin from "firebase-admin";
import fs from "fs";
import * as path from "path";

admin.initializeApp({
  credential: admin.credential.cert(
    path.resolve(
      "./public/mockData/friluftsfarder-firebase-adminsdk-fbsvc-2a3c753860.json"
    )
  ),
});

const db = admin.firestore();

const data = JSON.parse(
  fs.readFileSync("./public/mockData/mockData.json", "utf8")
);

async function uploadData() {
  await uploadCategory("climbing", data.climbing);
  await uploadCategory("kayak", data.kayak);
  await uploadCategory("snowshoes", data.snowshoes);
  await uploadBlogItems(data.blogItems);

  await uploadActivities("climbing_activities", data.climbing_activities);
  await uploadActivities("kayak_activities", data.kayak_activities);
  await uploadActivities("snowshoes_activities", data.snowshoes_activities);

  console.log("Data uploaded successfully!");
}

async function uploadCategory(collectionName, categoryData) {
  const docRef = db.collection(collectionName).doc("info");
  await docRef.set(categoryData);
  console.log(`Uploaded category data to collection ${collectionName}`);
}

async function uploadActivities(collectionName, activities) {
  for (const activity of activities) {
    const docRef = db.collection(collectionName).doc(activity.id);
    await docRef.set(activity);
    console.log(
      `Uploaded activity ${activity.h2} to collection ${collectionName}`
    );
  }
}

async function uploadBlogItems(blogItems) {
  for (const blog of blogItems) {
    const docRef = db.collection("blogItems").doc(blog.id.toString());
    await docRef.set(blog);
    console.log(`Uploaded blog item: ${blog.h2}`);
  }
}

uploadData().catch((error) => {
  console.error("Error uploading data:", error);
});
