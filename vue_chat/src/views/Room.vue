<template>
   <div class="w-full h-screen overflow-hidden bg-slate-800">
    <Navbar :data="'room '+room"/>
    <div class="w-full  h-[100%] bg-slate-700">
        <div class="w-[100%] h-[85%]  flex">
   
          <div class="w-[80%] h-[100%]">
            <div class="w-full h-[90%] overflow-y-scroll flex flex-col">
                <div v-for=" receive  in receives " v-bind:key="receive.author">
                    <div  v-bind:class="(receive.author === username)?'w-fit h-fit rounded-full  bg-white ml-10  flex-row-reverse mt-[5%] float-right mr-10':'w-fit  h-fit rounded-full  bg-white mt-10 ml-10 flex'">
                   <div v-bind:class="(receive.author === username )?'hidden bg-slate-900 w-fit text-white px-2 py-2 rounded-2xl':'block bg-slate-900 w-fit text-white px-2 py-2 rounded-2xl'">{{ (receive.author === username)? '': receive.author }}</div>  
                   <h1 class="px-3 py-3 w-fit">{{ receive.message }}</h1>
                </div>
                <p v-bind:class="(receive.author === username)?'w-fit mt-[11%] ml-[5%] font-thin text-white text-xs float-right':'w-fit mt-10 ml-10 font-thin text-white text-xs'">
                   {{ receive.time }}

                </p>
                </div>
         
              
              

               
            </div>
            <div class="w-full h-[7%] flex">
              <input
                type="text"
                v-model="message"
                class="w-[90%] h-[100%] pl-3  outline-none border-transparent focus:outline-none
            focus:border-transparent"
              />
              <button v-on:click="sendMessage()" class="w-[10%] bg-green-800 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-full h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
    

          <div class="w-[20%] h-[100%] bg-white flex flex-col">
            <div class="bg-blue-950 w-full h-16 flex justify-center pt-3 shadow-inner shadow-slate-950">
                <h1 class="text-white font-extrabold">Online People</h1>
            </div>

            <div class="w-full h-full  overflow-y-scroll">
           <!-- { userlist.map((user,index)=> {
            return <div key={index}  class=" bg-white  shadow-lg p-3 my-2 flex flex-row font-medium text-green-900">
                <div class={user.online?" bg-green-600 h-2 w-2 mt-3 rounded-full":'bg-red-600 h-2 w-2 mt-3 rounded-full'}></div>
                  <p class="ml-2"> {user.username}</p>
               </div>
           })} -->
            </div>

            <div class="bg-blue-950 w-full h-16 flex justify-center pt-3 shadow-inner shadow-slate-950">
            
            </div>

          </div>
        </div>
 
        <div class="w-full h-[15%] flex pt-3 text-white justify-center bg-slate-900 shadow-lg">
          &copy; Muhammad Husen
        </div>
    </div>
   </div>


</template>
<script>
import {io} from 'socket.io-client'
import Navbar from '../components/Navbar.vue';
let socket = ''

export default {
    name:'room',
    props: ['data'],
    components: {Navbar},
    data() {
        return {
            username:'',
            room:'',
            message:'',
            receives:[],
     

        }
    },
    methods: {
        sendMessage() {
            
            let pesan = {
                message:this.message,
                room:this.room,
                author: this.username,
                time:  new Date(Date.now()).getHours() +
            ':'+
            new Date(Date.now()).getMinutes()
            }
            socket.emit('sendMessage',pesan)
     
            this.receives.push(pesan)
            this.message =''
        }
    },
    mounted() {
       socket.on('receive_message',(pesan)=> {
  
          this.receives.push(pesan) 
          console.log(pesan)
       })
    
    },
    updated: function () {
       
    },
    created: function() {
    this.username = localStorage.getItem('username')   
    this.room = localStorage.getItem('room') 
     socket= io.connect('http://localhost:8020');
    let data = {
        data:this.username,
        room:this.room
    }
    socket.emit('join_room', data)

    }
}
</script>
