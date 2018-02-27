<template>
  <div>
    <div class="content">
      <div class="shadow">
        <h2><i class="icon icon-file-text-o"></i>店铺出单</h2>
        <div class="outerbox">
          <div class="backbox">
            <ul>
              <li>总出单数<span class="fr"><span class="num">88</span>单</span></li>
              <li>总保费金额<span class="fr"><span class="num">378430</span>元</span></li>
            </ul>
          </div>
          <div class="backbox blue">
            <ul>
              <li>本月出单数<span class="fr"><span class="num">12</span>单</span></li>
              <li>本月保费金额<span class="fr"><span class="num">378430</span>元</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="shadow">
        <h2><i class="icon icon-pie-chart"></i>店铺询价</h2>
        <div class="outerbox">
          <div class="askbox">
            <ul>
              <li>本月查询报价<span class="fr"><span class="num">27</span>单</span></li>
              <li>本月询价车牌数<span class="fr"><span class="num">30</span>个</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="shadow">
        <h2><i class="icon icon-window-alt"></i>店铺车辆</h2>
        <div class="outerbox">
          <div class="askbox">
            <ul>
              <li>总车辆<span class="fr"><span class="num">27</span>辆</span></li>
              <li>将到期车辆<span class="fr"><span class="num">30</span>辆</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="policy">
      <h2>当日政策</h2>
      <h3>The policy</h3>
      <div class="policylist">
        <div class="list_title">请选择城市<i></i></div>
        <el-menu default-active="2" class="el-menu-vertical-demo citymenu" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">北京市</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">朝阳区</el-menu-item>
              <el-menu-item index="1-2">海淀区</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">广东省</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">广州市</el-menu-item>
              <el-menu-item index="2-2">深圳市</el-menu-item>
            </el-menu-item-group>
          </el-submenu>       
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>
<style scoped rel="text/css">
  .aside .content{width: 765px;float: left;}      
  .shadow{overflow: hidden;padding:20px 25px 30px;margin:35px 0 20px;}
  .shadow:first-child{margin:0;}
  .content h2{font-size: 18px;color:#333;margin:0;font-weight: normal;}
  .content h2 i{font-size: 24px;color: #fe691b; margin-right: 15px;}
  .content .outerbox{margin:20px 18px 0; overflow:hidden;}
  .outerbox .backbox{background: url(~common/images/cd_bg1.jpg) repeat-y;height: 72px;border-radius:6px;width: 100%; margin-top:15px;}
  .outerbox .backbox.blue{background: url(~common/images/cd_bg2.jpg) repeat-y;}
  .backbox ul li{background:#fffaef;float: left; width:46%;margin:10px 1% 10px 2%;padding:5px 10px; color:#f2a43d; overflow:hidden;font-size:18px;line-height:40px;}
  .backbox.blue ul li{background:#f5fbff;}
  .backbox ul li .fr,.askbox ul li .fr{float: right;}
  .backbox ul li .fr .num,.askbox ul li .fr .num{font-size: 28px;color:#f78e04;line-height:40px; vertical-align: top;}
  .backbox.blue ul li{color:#84c4f5;}
  .backbox.blue ul li .fr .num{font-size: 28px;color:#73b9f3;}
  .askbox{overflow: hidden;margin-top: 15px;}
  .askbox ul li{background: url(~common/images/cd_bg3.jpg) repeat-y; width:47%;height: 70px;font-size: 18px;border-radius:6px;float: left;list-style: none;line-height: 70px;padding:0 15px;color:#ffeee1;}
  .askbox ul li:last-child{background: url(~common/images/cd_bg4.jpg) repeat-y;margin-left: 6%;}
  .askbox ul li .fr .num{color:#fff;vertical-align:-2px;}
  .aside .policy{width: auto;margin:0 0 15px 780px;}
  .policy h2,.policy h3{font-size: 28px;color: #2e323e;font-weight: bold;text-align: center;}
  .policy h3{font-size:16px;border-bottom:2px solid #fe691b;width: 100px; margin:0 auto;padding-bottom: 5px;}
  .policy .policylist{margin:15px 0;}
  .policylist .list_title{background:#fe5722;font-size:18px;color:#fff;text-indent: 15px;height: 50px;line-height: 50px;border-radius:6px;}
  .list_title i{width: 0;height: 0;border-left: 10px solid transparent;border-right: 10px solid transparent;border-bottom:12px solid #fff; float: right;margin:20px 10px 0 0;}  
  .citymenu{width:auto;}
  .citymenu .el-menu{height:250px;}
  .citymenu .tree-menu,.policy_text{border:1px solid #ccc;border-top: none;border-top-left-radius: 0;border-top-right-radius: 0;margin-top:-2px;height: 570px;background:#fffaf3;}
  .citymenu .tree-menu li{line-height: 40px;background: #fffaf3;border-bottom:1px solid #ccc;}
  .citymenu .tree-menu li .list-toggle{top:15px;}
  .citymenu .tree-menu li>a{color: #fe5722;font-size: 18px;text-indent: 15px;}
  .citymenu .tree-menu li>a:hover{background:#fffaf3;}
  .citymenu .tree-menu li ul{background:#fff;}
  .citymenu .tree-menu li ul li{background:#fff;margin-left: 55px;text-indent:0;}
  .citymenu .tree-menu li:last-child{border-bottom:none;}
  .policy_text{padding:15px;}
  .policy_text p{margin-bottom:10px;line-height: 24px;}
</style>
