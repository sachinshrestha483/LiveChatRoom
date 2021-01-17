import { ref, watchEffect } from "vue";
import { projectAuth, projectFirestore } from "../Firebase/config";


const getCollection=(collection)=>{
const documents=ref(null);
const error= ref(null); // error local because for different collection we have different error so no different error

let collectionRef= projectFirestore.collection(collection)
.orderBy('createdAt')


// To Unsuscribe from snapshot we need to store it in the constant as it return a function as we call that function it unsuscribe from it

const unSub=collectionRef.onSnapshot((snap)=>{
    console.log("snap shot listner ")
let results =[];
snap.docs.forEach(
    doc=>{
      doc.data().createdAt&&results.push({...doc.data(),id:doc.id})
      // to avoid local version  snapshot used  
      // for time stamp it needs to reach to the server.. 
      // when use time stamp need to do this  so we wait for server res posne befrore lcal response
    }
)
documents.value=results;
console.log("Results")
console.log(results)
error.value=null;

},(err)=>{
    console.log(err.message)
    documents.value=null
    error.value="could not fetch Data"
});

// *****onInvalidate******* on when component unmount..// so when component unmount 
// we unsuscribe from it as 
// if we dont do it and when component again get mount it again gets suscribe to the snap shot and now to calls to snap shot is useless and as he unmount and unmount the amont of subscribe to snap shot by one user gets increased by so much....so it costs us a lot.. 
// thats not a good thing to happen

watchEffect((onInvalidate)=>{
// whaen compont unmount we just unsubs cribe from  listner
onInvalidate(()=>{

    console.log("Unsuscribe from Listner")
    unSub();
    // this function gets called automatically when it gets unmounted


})
})

return {documents,error}

}

export default getCollection