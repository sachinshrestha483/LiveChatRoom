import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import ChatRoom from '../views/ChatRoom'
import {projectAuth, projectFirestore} from "../Firebase/config"


// authGuard 

const requireAuth =(to,from,next)=>{
let user= projectAuth.currentUser
console.log("Current User in Auth Guard is:"+user)
if(!user){
  next({name:'Welcome'})
}

next()
}



const requireNoAuth =(to,from,next)=>{// to and from passesd Autoo matically iby rthe vue
  let user= projectAuth.currentUser
  console.log("Current User in Auth Guard is:"+user)
  if(user){
    next({name:'ChatRoom'})
  }
  
  next()
  }


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter:requireNoAuth,
  },
  {
    path: '/chatRoom',
    name: 'ChatRoom',
    component: ChatRoom,
    beforeEnter:requireAuth
     
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
