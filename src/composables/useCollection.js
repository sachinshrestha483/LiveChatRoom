import { ref } from "vue";
import { projectAuth, projectFirestore } from "../Firebase/config";



const useCollection =(collection)=>{
    const error= ref(null)// inside this functon because for each component new error we need..

    const adDoc= async(doc)=>{
// reset the error
error.value=null;

try{
    await projectFirestore.collection(collection).add(doc)
}
catch(err){
    console.log(err.message)
    error.value="Could Not Send The Mesage"

}
    }

return {error,adDoc}
}


export default useCollection