<template>
  <div class="welcome container">
    <h2>Welcome Login Or Signup Here</h2>

    <div v-if="showLogin">
      <LoginForm @login='enterChat' />
      <button v-on:click="showLogin = !showLogin">SignUp</button>
    </div>

    <div v-else>
      <SignUpForm @signUp='enterChat' />
      <button v-on:click="showLogin = !showLogin">Login</button>
    </div>
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/loginForm";
import { ref } from "vue";
import {useRouter} from"vue-router"
export default {
  components: { SignUpForm, LoginForm },

  setup(props,context) {

const router= useRouter();
    //function can used in the setup pfunction withoirt these
    // what to do after the login and signup sucessfully emit te custom
    // event from signup and login ciomponrnt and listen them in the  Welcome Component

    const showLogin = ref(true);

const enterChat=()=>{
router.push({name:'ChatRoom'})
}


    return { showLogin,enterChat };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>