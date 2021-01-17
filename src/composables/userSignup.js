import { ref } from "vue";
import { projectAuth } from "../Firebase/config";

const error =ref(null);
const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    )

    if (!res) {
      throw new Error("Could Not Complete SignUp");
    }

    await res.user.updateProfile({displayName})
    error.value=null;
    return res;

  } catch (err) {
      console.log("err");
    console.log(err.message);
    
    error.value= err.message;


    console.log("error");
    
    console.log(error)

  }
};

const useSignup = () => {
  return { error, signup };
};


export default useSignup
