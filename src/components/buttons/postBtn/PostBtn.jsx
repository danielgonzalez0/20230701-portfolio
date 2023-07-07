// import React, { useState } from 'react';
// import data from '../../../assets/data/portfolio.json';
// import { addDoc, collection } from 'firebase/firestore';
// import { auth, db, provider } from '../../../utils/firebase-config';
// import { signInWithPopup, signOut } from 'firebase/auth';

// const PostBtn = () => {
//   const [isAuth, setIsAuth] = useState(false);

//   const signInWithGoogle = () => {
//     console.log(auth, provider);
//     signInWithPopup(auth, provider).then((res) => {
//       setIsAuth(true);
//       console.log("I'm connceted");
//       console.log(res);
//     });
//   };

//   const signOutUser = () => {
//     signOut(auth).then(() => {
//       setIsAuth(false);
//       console.log('im sign out');
//     });
//   };

//   //ref a la collection de la bdd
//   const projectsCollectionRef = collection(db, 'projects');
//   const createPost = async () => {
//     console.log(data);
//     await addDoc(projectsCollectionRef, { data });
//   };
//   return (
//     <>
//       {!isAuth ? (
//         <button onClick={signInWithGoogle}>sign in with google</button>
//       ) : (
//         <button onClick={signOutUser}>logout with google</button>
//       )}
//       <button onClick={createPost}>Post to firebase</button>;
//     </>
//   );
// };

// export default PostBtn;
