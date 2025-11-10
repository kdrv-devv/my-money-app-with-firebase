// react imports
import { useEffect, useRef, useState } from "react";
// firebase imports
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useCollections = (cname, _q) => {
  const q = useRef(_q).current;

  const [data, setData] = useState(null);
  useEffect(() => {
    let ref = collection(db, cname);
    if (q) {
      ref = query(collection(db, cname), where(...q));
    }

    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      let res = [];
      querySnapshot.forEach((doc) => {
        res.push({ id: doc.id, ...doc.data() });
      });
      setData(res);
    });

    return () => unsubscribe();
  }, [cname, q]);
  return { data };
};
