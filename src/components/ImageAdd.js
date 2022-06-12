import React from 'react';
import { auth, storage } from '../firebase';
import { useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
const ImageAdd = () => {
  const [image, setImage] = useState(null);

  const addFoto = () => {
    if (!image) return;

    // make reference to image
    const imageRef = ref(storage, `${auth.lastNotifiedUid}/folder2/${Math.random() + image.name}`);

    // upload image takes 2 arguments reference and image
    uploadBytes(imageRef, image)
      .then((data) => {
        // get URL
        getDownloadURL(data.ref).then((url) => {
          //   put url to state
          setImage(url);
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <h1 style={{ fontWeigt: 'bold', fontSize: '2rem', marginBottom: '2rem' }}>
        add img component
      </h1>
      <input type='file' onChange={(e) => setImage(e.target.files[0])} />
      <input type="text" value="folder2" />
      <button
        onClick={addFoto}
        style={{ backgroundColor: 'black', color: '#ffff', padding: '1rem' }}
      >
        add img
      </button>

      <img width='200' style={{ margin: '0 auto' }} src={image} alt='' />
    </div>
  );
};

export default ImageAdd;
