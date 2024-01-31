import styles from './postPage.module.css'
import ViewUserButton from '../components/Posts/ViewUserButton';
import CardList from '../components/Posts/CardList';

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url, {
    cache: 'no-store'
  });

  // cron job
  // const response = await fetch(base_url, {
  //   next: {revalidate: 3600}
  // });

  const posts: IPosts[] = await response.json()

  return (
    <>
    <p>{new Date().toLocaleTimeString()}</p>
      <h1 className={styles.redBg}>Posts Page</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <i>{post.title}</i>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId}/>
          </CardList>
        )
      })}
    </>
  )
}

export default Posts