<template>
  <div class="loading_shade">
    <div class="loading_box">
      <div class="loading"></div>
      <p class="loading_text">努力加载中...</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    }
  };

</script>

<style lang="stylus">
  .loading_shade
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    .loading_box 
      padding: 30px;
      box-sizing: border-box;
      .loading
        width: 100px;
        height: 100px;
        margin: 0 auto;
        background-color: #ff4a00;
        border-radius: 100%;
        -webkit-animation: load_scaleout 1s infinite ease-in-out;
        animation: load_scaleout 1s infinite ease-in-out;
      .loading_text
        text-align: center;
        color: #fff;
        font-size: 0.26rem;

    @keyframes load_scaleout
      0% 
        -webkit-transform: scale(0);
      100%
        -webkit-transform: scale(1);
        opacity: 0;
    @keyframes load_scaleout 
      0% 
        transform: scale(0.1);
      100% 
        transform: scale(1.5);
        opacity: 0;

    .loading_oneline_box
      font-size: 0.12rem;
      color: #FFF;
      text-align: center;
    .loading_oneline 
      display: inline-block;
      height: 0.1rem;
      width: 0.1rem;
      border-radius: 100%;
      margin: 0.02rem;
      margin-right: 0.1rem;
      border: 0.02rem solid #FFF;
      border-bottom-color: transparent;
      vertical-align: middle;
      -webkit-animation: rotate 0.75s linear infinite;
      animation: rotate 0.75s linear infinite;
    @keyframes rotate
      0%
        -webkit-transform: rotate(0deg);
      50% 
        -webkit-transform: rotate(180deg);
      100% 
        -webkit-transform: rotate(360deg);
    @keyframes rotate 
      0% 
        transform: rotate(0deg);
      50% 
        transform: rotate(180deg);
      100% 
        transform: rotate(360deg);
</style>
