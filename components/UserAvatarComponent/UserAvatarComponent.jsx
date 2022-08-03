import React from 'react'
import styles from './UserAvatarComponent.module.css';
import Image from 'next/image';

function UserAvatarComponent({ userAvatarUrl, userName }) {
  return (
    <div className={styles.userContainer}>
      <div className={styles.userAvatar} >
        <Image src={userAvatarUrl} layout='fill' alt="user avatar"></Image>
      </div>
      <div className={styles.userName}>
        {userName}
      </div>
    </div>
  )
}

export default UserAvatarComponent