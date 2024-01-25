import Menu from '@/components/menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>What is Lorem Ipsum?</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt='' fill className={styles.avatar} />   
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>Jane Doe</span>
                        <span className={styles.date}>31.12.2023</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with 
                    the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.
                    </p>

                    <h3>Where does it come from?</h3>

                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply 
                    random text. It has roots in a piece of classical Latin 
                    literature from 45 BC, making it over 2000 years old. 
                    Richard McClintock, a Latin professor at Hampden-Sydney 
                    College in Virginia, looked up one of the more obscure 
                    Latin words, consectetur, from a Lorem Ipsum passage, 
                    and going through the cites of the word in classical 
                    literature, discovered the undoubtable source. 
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
                    "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                    by Cicero, written in 45 BC. This book is a treatise on the 
                    theory of ethics, very popular during the Renaissance. 
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
                    comes from a line in section 1.10.32.

                    </p>
                </div>
                <div className={styles.comment}>
                    <Comments />
                </div>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default SinglePage