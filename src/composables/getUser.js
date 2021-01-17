import {isReactive, ref} from 'vue';
import {projectAuth} from '../Firebase/config'// check status of is user logn logout  auth state change


const user=ref(projectAuth.currentUser);// set use auth status condition here

//  parameter passed of current user logged in oprev now open handles it..


// calls every time  user auth status changed
projectAuth.onAuthStateChanged(_user=>{

console.log("user State change . Current Use is:",_user)
user.value= _user;



}
)

const getUser=()=>{
    return {user}
}


export default getUser;