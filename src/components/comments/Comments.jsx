import Link from 'next/link'
import styles from './comment.module.css'
import Image from 'next/image';

const Comments = () => {

    const status = "authenticated";
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Comments</h1>
          {status === "authenticated" ? (
            <div className={styles.write}>
              {/* Content for authenticated users */}
              <textarea className={styles.input} placeholder='write a comment...'></textarea>
              <button className={styles.button}>Send</button>
            </div>
          ) : (
            <Link href="/login">
              <a className={styles.loginLink}>Login to Write a Comment</a>
            </Link>
          )}
          <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" 
                    alt='' 
                    width={50}
                    height={50}
                    className={styles.image} 
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Jane Doe</span>
                        <span className={styles.date}>31.12.2023</span>
                    </div>
                    <p className={styles.desc}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt. 
                    </p>
                </div>
            </div>
          </div>
        </div>
      );
    }

export default Comments;