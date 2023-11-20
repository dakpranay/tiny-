import React from 'react'
import styles from '../styles/User.module.css'

export default function User() {
    return (
        <div className={styles.userWrapper}>
            <div className={styles.ImageWrapper}>
                <div className={styles.userImageBlock}>
                    <img src='1.jpg' alt="UP" />
                </div>
                <div className={styles.userDetails}>
                    <h3>Pranay Dak💎✅</h3>
                    <div className={styles.userFollowersWrapper}>
                        <div>
                            <button>6442</button>
                            <p>Followers</p>
                        </div>
                        <div>
                            <button>400</button>
                            <p>Following</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.userPersonal}>
                <p>Co-founder & CEO at Terribly Tiny Tales</p>
                <a href="https://www.instagram.com" target='_blank'>https://www.instagram.com</a>
                <div>
                    <div>⭐ 125</div>
                    <div>👍 12</div>
                    <div>👁️ 57.8K</div>
                    <div>💖 26.0K</div>
                </div>
            </div>
        </div>
    )
}
