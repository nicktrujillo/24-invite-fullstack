import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { randomUserAsync, selectInvite, addToGoing, addToNotgoing } from './inviteSlice';
import styles from './Invite.module.css';
import axios from 'axios'

export function Invite() {
  const randomUser = useSelector(selectInvite);
  const dispatch = useDispatch();
  console.log(randomUser)
  const [goingNumber, setGoingNumber] = useState(0)
  const [notgoingNumber, setNotgoingNumber] = useState(0)

  useEffect(() => {
    dispatch(randomUserAsync());
  }, []);

  function handleGoing() {
    dispatch(addToGoing(randomUser))
    setGoingNumber(goingNumber + 1)
  }

  function handleNotgoing() {
    dispatch(addToNotgoing(randomUser))
    setNotgoingNumber(notgoingNumber + 1)
  }

  return (
    <div className={styles.pageFlex}>
           <div className={styles.count}>
               <p>Going: {goingNumber}</p>
               <p>Not going: {notgoingNumber}</p>
           </div>
           <div className={styles.userInfo}>
               <div className={styles.picflex}>
               <img className={styles.pic} src={randomUser.picture} />
               </div>
               <p><span className={styles.bold}>Name:</span> {randomUser.name}</p>
               <p><span className={styles.bold}>Phone:</span> {randomUser.phone}</p>
               <p><span className={styles.bold}>Email:</span> {randomUser.email}</p>
               <div className={styles.buttons}>
               <button className={styles.no} onClick={() => handleNotgoing()}>🚫</button>
               <button className={styles.yes}  onClick={() => handleGoing()}>✅</button>
               </div>
           </div>
    </div>
  );
}