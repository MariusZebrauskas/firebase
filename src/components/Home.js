import React from 'react';
import { collection, addDoc, doc, setDoc, Timestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import ImageAdd from './ImageAdd';
const Home = ({ user }) => {
  const addData = async () => {
    console.log('adding data to firetore');
    try {
      const docData = {
        stringExample: 'Hello world!',
        booleanExample: true,
        numberExample: 3.14159265,
        dateExample: Timestamp.fromDate(new Date('December 10, 1815')),
        arrayExample: [5, true, 'hello'],
        nullExample: null,
        objectExample: {
          a: 5,
          b: {
            nested: 'foo',
          },
        },
      };
      await setDoc(doc(db, 'cities', 'LA'), docData);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <>
      <h1 style={{ marginTop: '10rem', fontSize: '2rem' }}>
        welsome to home {user ? user.email : ''}
      </h1>
      <button onClick={addData} style={{ marginTop: '5rem', fontSize: '2rem' }}>
        add data
      </button>
      <br/>
      <br/>
      <br/>
      {auth.lastNotifiedUid && <ImageAdd />}
      
    </>
  );
};

export default Home;
