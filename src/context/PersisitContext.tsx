"use client";
import React, { useContext, createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { Auth } from "@/firebase/firebase";
import UseAuthStore from "../app/store/store";
import { db } from "@/firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import Loading from "@/utils/Loading";
interface DocumentData {
  displayName: string;
  email: string;
  photoURL: string;
  // etc
}

interface PersistInt {
  GenLoad?: boolean;
  setGenLoad?: React.Dispatch<React.SetStateAction<boolean>>;
  UserData?: DocumentData,
  setUserData?: React.Dispatch<React.SetStateAction<DocumentData>>;
}

const PersistContext = createContext<PersistInt | undefined>(undefined);

export const PersistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const { user } = UseAuthStore();
  const [GenLoad, setGenLoad] = useState(true);
  const [UserData, setUserData] = useState<DocumentData | undefined>(undefined);

  useEffect(() => {
    // const uid =user && user.uid
    const unsubscribe = onAuthStateChanged(Auth, async (user) => {
      if (navigator.onLine) {
         if(user){

           const UserDocRef = doc(db, `users/${user?.uid}`);
           const docSnapshot = await getDoc(UserDocRef);
          console.log("UserDocRef context", UserDocRef);
           if (docSnapshot.exists()) {
     
             const UserInfo = docSnapshot.data();
             const { displayName, email,photoURL } = UserInfo as DocumentData;
             console.log("UserInfo in context", UserInfo);
   
             setUserData({ displayName, email, photoURL });
             setGenLoad(false);
           }
         }
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // if(!GenLoad){
  //   return  <Loading />
  // }

  return (
    <PersistContext.Provider value={{ UserData, GenLoad }}>
      {children}
    </PersistContext.Provider>
  );
};


export const usePersist =()=>{
  const Persist = PersistContext;
  if(!Persist){
    throw new Error('you cant persist your user')
  }
  return useContext(Persist) 
}