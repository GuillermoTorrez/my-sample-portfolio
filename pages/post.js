import Layout from "./components/Layout";
import { useRouter } from "next/router";
import { posts } from "../profile";

const Post = () => {

  const router = useRouter();

  const currentPost = posts.filter(
    (e) => e.title === router.query.title
  )[0];

  console.log(currentPost);

  return (
    <Layout footer={false} title={currentPost.title}>
    <div className="text-center">
        <img src={currentPost.imageURL} alt="" className="img-fluid" style={{width:'50%', height:'50%'}}/>
        <p>{currentPost.content}</p>
    </div>     
    </Layout>
  );
};

export default Post;
