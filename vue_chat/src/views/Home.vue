<template >
 <Navbar :data="navbar"/>
   <!-- content -->
   <div class="w-full h-fit  flex justify-center pt-10">
      <input type="text" v-model="username" class="w-48 h-10 rounded shadow-md px-2 m-2" placeholder="Username"/>
      <input type="text" v-model="room" class="w-48 h-10 rounded shadow-md px-2 m-2" placeholder="Room"/>
   </div>
   <div class="w-full flex justify-center pt-10">
    <button v-on:click="joinRoom()"  class="w-28 h-10 rounded-xl bg-green-600 text-white px-3 py-2">Join Room Chat</button>

   </div>


</template>
<script>
import {io} from 'socket.io-client'
import Navbar from '../components/Navbar.vue'
export default {
    name: 'home',
    components: {Navbar},
    data() {
        return {
            username:'',
            room:'',
            navbar:'Sample App Chat'
     
        }
    },
    methods: {
        
        joinRoom() {
            localStorage.setItem('username',this.username)
            localStorage.setItem('room',this.room)
            this.$router.push(
                {name:'room'}
                )
        }
    
    },
    created: function() {
       
    },
    mounted: () => {
        
    },
    updated: function() {
        console.log('data update', this.subject)
    }
    
}

</script>