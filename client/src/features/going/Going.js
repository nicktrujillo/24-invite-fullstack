import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { goingAsync, selectGoing, displayGoing } from './goingSlice';
import styles from './Going.module.css';
import axios from 'axios'

export function Going() {
  const going = useSelector(selectGoing);
  const dispatch = useDispatch();
  console.log(going)

  useEffect(() => {
    dispatch(goingAsync());
  }, [going]);

  return (
    <div>
        <h1 className={styles.title}>Going</h1>
           <div className={styles.pageflex}>  
            {going.map(user => (
                <div className={styles.userInfo}>
                <img src={user.picture} />
               <p>Name: {user.name}</p>
               <p>Phone: {user.phone}</p>
               <p>Email: {user.email}</p>
                </div>
            ))}
           </div>
    </div>
  );
}