import Layout from "./components/Layout";
import {posts} from "../profile";
import Link from 'next/link'

console.log(posts);

const PostCard = ({post}) => (
  <div className="col-md-4 p-3">
    <div className="card h-100">
      <div className="overflow">
        <img src={post.imageURL} className="card-img-top"
        style={{width:'100%', height:'100%'}}/>
      </div>
      <div className="card-body">
        <h4>{post.title}</h4>
        <p>{post.content}</p>
        <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
        <button className="btn btn-light">
             Read
        </button>
        </Link>
      </div>
    </div>
  </div>
);

const Blog = () => (
  <Layout footer={false} title="My Blog" dark>
    <div className="row" >
      {posts.map((e, id) => (
        <PostCard post={e} key={id}/>
      ))}
    </div>
  </Layout>
);

export default Blog;
