// firebase
import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "sonner";

export const useFireStore = () => {
  // add new doc firestore
  const addDocument = (newDoc, collectionName) => {
    addDoc(collection(db, collectionName), newDoc)
      .then(() => toast.success("Succesfully added"))
      .catch((error) => toast.success(error));
  };
  
  //   delete doc with id in fireStore
  const delDocument = (id, collectionName) => {
    deleteDoc(doc(db, collectionName, id))
      .then(() => {
        toast.success("Transaction succesfully deleted");
      })
      .catch((error) => toast.error(error));
  };

  return {
    addDocument,
    delDocument,
  };
};
