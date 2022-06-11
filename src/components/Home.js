import React from 'react';

const Home = ({user}) => {
  return (
    <>
      <h1 style={{ marginTop: '10rem', fontSize: '2rem' }}>welsome to home {user ? user.email: ""}</h1>
      
    </>
  );
};

export default Home;
