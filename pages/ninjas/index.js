import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return {
    props: { posts: data },
  }
}

const Ninjas = ({ posts }) => {
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <Link href={'/ninjas/' + post.id} key={post.id}>
          <a className={styles.single}>
            <h3>{post.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Ninjas
