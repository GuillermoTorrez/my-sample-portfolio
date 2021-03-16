import Layout from './components/Layout'
import Error from './_error'

const Github = (props) => {
       
   if (props.statusCode) {
       return <Error statusCode = {props.statusCode} />
   }
     return (
     <Layout footer={false} dark>
        <div class="row">
             <div className="col-md-4 offset-md-4">
             <div className="card card-body text-center">
             <h1>{props.user.name}</h1>
             <img src={props.user.avatar_url} alt=""/>
             <p>{props.user.bio}</p>
             <a target="_blank" className="btn btn-outline-secondary" href={props.user.html_url}>Go to my Github</a>  
             </div>            
             </div>   
        </div>
     </Layout>
     )
};

export async function getServerSideProps() {

   const res = await fetch('https://api.github.com/users/guillermotorrez')
   
   const data = await res.json();

   const statusCode = res.status > 200 ? res.status : false;

   console.log(res.status);
    
   return {
     props: {
        user: data,
        statusCode
     }
   }
}


export default Github;
 