<template>
  <div id="messageForm">
      <p>{{error}}</p>
<textarea
placeholder="Type a message"
v-model="message"

>

    </textarea>
<button v-on:click="handleEnter">Submit</button>
<br>
<br>
<br>

</div>


  
</template>



<script>
import { ref } from 'vue';
import getUser from '../composables/getUser';
import useCollection from '../composables/useCollection';

import { timestamp } from '../Firebase/config';
export default {
setup(){
    const message = ref('');
const {user} = getUser();
const {adDoc,error}=useCollection('messages')
    const handleEnter= async ()=>{

        const chat={
            message:message.value,
             name:user.value.displayName,
             createdAt:timestamp()

        }

await adDoc(chat);

if(!error.value){
        message.value=""

}

        console.log(chat);

    }

    return {handleEnter,message,error}
}
}
</script>

<style scoped>

#messageForm {
    margin: 10px;
  }

textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }


</style>