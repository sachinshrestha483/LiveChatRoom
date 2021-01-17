import { ref } from "vue";
import { projectAuth } from "../Firebase/config";

const error = ref(null);

const login = async (email, password) => {
  // every time set the error to null  so next value  in composable get ok there or current value to beerased.....
  error.value = null;
  // making it null again so that  if user try again it dont get re inititalse it come s here againwith the previous value...

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    // no true false for error text
    console.log(res);
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = "Incorrect Login";
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
