import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth, provider } from '../firebase';

const Register = ({ setUser }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirm = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirm.current.value)
      return alert('Pasword do not match');
    // register user
    try {
      let user = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordConfirm.current.value
        ).then((data) => {
          console.log('data:', data)
          setUser({
                email:data.user.email,
                token:data.user.accessToken,
                photo:data.user.photo
              })
        }).catch((err) => {
          console.log(err.message);
        })
       
      // if(user) {
      //   setUser({
      //     email:user.user.email,
      //     token:user.user.accessToken,
      //     photo:user.user.photo
      //   })
      // }
    } catch (e) {
      console.log(e.message);
    }
  };

  const googleLogin = async () => {
    console.log('google login');
    try {
      let user = await signInWithPopup(auth, provider);
      console.log('user:', user)
      // console.log('user reg:', user.user.email)
      // console.log('user reg:', user.user.photoURL)
      // console.log('user reg:', user.user.accessToken)
      if(user) {
        setUser({
          email:user.user.email,
          token:user.user.accessToken,
          photo:user.user.photoURL
        })
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <div className='min-h-full flex mt-20 flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <img
          className='mx-auto h-12 w-auto'
          src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
          alt='Workflow'
        />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Register your account
        </h2>
      </div>

      <div className='mt-8 sm:mx-auto  sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form
            style={{ margin: '0 auto' }}
            className='space-y-6 max-w-sm '
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email address
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  ref={emailRef}
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  ref={passwordRef}
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Repeat Password
              </label>
              <div className='mt-1'>
                <input
                  ref={passwordConfirm}
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Register
              </button>
            </div>
          </form>
          <button
            onClick={googleLogin}
            className='w-full mt-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
