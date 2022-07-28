import { getFirestore, collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore';
import app from './firebase';
const db = getFirestore(app);

export async function getLists() {
  const listCollection = collection(db, 'listas');
  const listSnapshot = await getDocs(listCollection);
  const listList = listSnapshot.docs.map(doc => doc.data());
  return listList;
};
export async function addMovieOnList(movieToAdd){
    await addDoc(collection(db, "listas"),movieToAdd,{merge: true})
    .then(() => console.log("Data Added in firebase"))
    .catch((error) => { console.log(error);}
    );
}
export async function saveMovieOnList(movieToUpdate, callback){
  const listCollection = collection(db, 'listas');
  const listSnapshot = await getDocs(listCollection);
  var refId = '';
  var ref = null;
  listSnapshot.docs.map(doc =>{
    if(movieToUpdate.id == doc.data().id){
      refId = doc.ref.id
      ref = doc.ref;
    }
  });

  await addDoc(listCollection,movieToUpdate, { merge: true });
  await deleteDoc(ref).then(() => console.log("Data Deleted in firebase"))
  .catch((error) => { console.log(error);});
  callback();
}
export async function deleteMovie(movieId, callback){
  const listCollection = collection(db, 'listas');
  const listSnapshot = await getDocs(listCollection);
  var refId = '';
  var ref = null;
  listSnapshot.docs.map(doc =>{
    if(movieId == doc.data().id){
      refId = doc.ref.id
      ref = doc.ref;
    }
    console.log(refId);
  });

  await deleteDoc(ref).then(() => console.log("Data Deleted in firebase"))
  .catch((error) => { console.log(error);});

  if(callback) callback();
}
export async function existsMovieOnList(movieId){
  const listCollection = collection(db, 'listas');
  const listSnapshot = await getDocs(listCollection);
  const listList = listSnapshot.docs.map(doc => doc.data());
  var result = false;
  listList.forEach(element => {
    if(element.id == movieId){ result = true }
  });
  return result;
}