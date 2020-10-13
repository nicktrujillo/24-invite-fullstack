import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { notgoingAsync, selectNotgoing, displayNotgoing } from './notgoingSlice';
import styles from './Notgoing.module.css';
import axios from 'axios'

export function Notgoing() {
  const notgoing = useSelector(selectNotgoing);
  const dispatch = useDispatch();
  console.log(notgoing)

  useEffect(() => {
    dispatch(notgoingAsync());
  }, [notgoing]);

  return (
    <div>
        <h1 className={styles.title}>Not Going</h1>
        <div className={styles.pageflex}>  
            {notgoing.map(user => (
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