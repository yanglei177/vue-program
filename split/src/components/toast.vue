<template>
  
</template>

<script>
  export default {
    data() {
      return {};
    },
    props:{
      msg:{
        type: String,
        require: true
      },
      time: {
        type: Number,
        default: 3e3
      }
    },
    mounted:function(){
      // var mHtml = `<p class="toast">{{msg}}</p>`;
      let eHtml = document.createElement("p");
      eHtml.className = "toast";
      let tHtml = document.createTextNode('你好');
      eHtml.appendChild(tHtml);

      document.body.appendChild(eHtml);


      setTimeout(function() {
        document.querySelector('.toast').style.opacity = 1;
        document.querySelector('.toast').style.bottom = "50%";
      }, 30);
    },
    components: {}
  };

</script>

<style lang="css">
 .toast{
    background: rgba(0, 0, 0, 0.7);
    color: #FFF;
    padding: 0 .3rem;
    text-align: center;
    font-size: .24rem;
    line-height: .6rem;
    position: fixed;
    border-radius: .12rem;
    left: 50%;
    bottom: 50%;
    z-index: 99999;
    transform: translateX(-50%);
    transition: all .8s cubic-bezier(0, 0, 0, 1.1);
    overflow: hidden;
    pointer-events: none;
    box-shadow: 0 0 50px 0 rgba('72, 72, 72, 0.5');
    opacity: 0;
 }
  .toast._show{
    opacity: 1;
    bottom: 50%;
  }
  .toast.destroy{
    opacity: 0;
    bottom: 50%;
  }
</style>