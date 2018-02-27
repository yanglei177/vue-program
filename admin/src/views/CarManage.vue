<template>
  <div>
    <div class="shadow">
      <form class="form-horizontal">
        <div class="form-group">
          <div class="col-sm-3">
            <label>车牌号：</label>
            <input type="text" class="" placeholder="请输入车牌号">
          </div>
          <div class="col-sm-3 col-sm-offset-1">
            <label>车主：</label>
            <input type="text" placeholder="请输入车主牌号">
          </div>
          <div class="col-sm-3 col-sm-offset-2">
            <label>品牌型号：</label>
            <input type="text" class="" placeholder="请输入品牌型号">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-3">
            <label>交强险到期日：</label>
            <input type="text" class="form-control form-date" placeholder="请选择日期">
          </div>
          <div class="col-sm-3 col-sm-offset-1">
            <label>商业险到期日：</label>
            <input type="text" class="form-control form-date" placeholder="请选择商业险日期">
          </div>
          <div class="col-sm-3 col-sm-offset-2">
            <label>初登日期：</label>
            <input type="text" class="form-control form-date" placeholder="请选择初登日期">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-3">
            <label>车辆状态：</label>
            <select class="form-control">
              <option>请选择车辆状态</option>
            </select>
          </div>
          <div class="col-sm-3 col-sm-offset-1">
            <label>业务员：</label>
            <select class="form-control">
              <option>请选择业务员</option>
            </select>
          </div>
          <div class="col-sm-3 col-sm-offset-2">
            <button class="btn btn-primary col-sm-offset-3" type="submit">搜索</button>
            <button class="btn btn-primary col-sm-offset-1" type="reset">重置</button>
          </div>
        </div>
      </form>
    </div>
    <div class="shadow mar_t_20">
      <div class="btnbox row">
        <div class="col-sm-4">
          <button class="btn btn-primary col-sm-offset-1" type="button">分配</button>
          <button class="btn btn-primary col-sm-offset-1" type="button">回收分配</button>
        </div>
      </div>
      <table class="table table-hover table-bordered">
        <tr>
          <th>
            <label>
              <input type="checkbox" name="clgl">
            </label>
          </th>
          <th>车牌号</th>
          <th>车主</th>
          <th>品牌型号</th>
          <th>初登日期</th>
          <th>交强险到期日</th>
          <th>商业险到期日</th>
          <th>状态</th>
          <th>业务员</th>
          <th>所属店铺</th>
        </tr>
        <tr>
          <td>
            <label>
              <input type="checkbox" name="clgl">
            </label>
          </td>
          <td>京A83756</td>
          <td>杨宇鹏</td>
          <td>奥迪FV7203TFVCF轿车</td>
          <td>2017-06-23</td>
          <td>2017-08-13</td>
          <td>2017-08-23</td>
          <td>脱保</td>
          <td>未分配</td>
          <td>北京保评科技有限公司</td>
        </tr>
        <tr>
          <td>
            <label>
              <input type="checkbox" name="clgl">
            </label>
          </td>
          <td>京A83756</td>
          <td>杨宇鹏</td>
          <td>奥迪FV7203TFVCF轿车</td>
          <td>2017-06-23</td>
          <td>2017-08-13</td>
          <td>2017-08-23</td>
          <td>脱保</td>
          <td>未分配</td>
          <td>北京保评科技有限公司</td>
        </tr>
        <tr>
          <td>
            <label>
              <input type="checkbox" name="clgl">
            </label>
          </td>
          <td>京A83756</td>
          <td>杨宇鹏</td>
          <td>奥迪FV7203TFVCF轿车</td>
          <td>2017-06-23</td>
          <td>2017-08-13</td>
          <td>2017-08-23</td>
          <td>脱保</td>
          <td>未分配</td>
          <td>北京保评科技有限公司</td>
        </tr>
        <tr>
          <td>
            <label>
              <input type="checkbox" name="clgl">
            </label>
          </td>
          <td>京A83756</td>
          <td>杨宇鹏</td>
          <td>奥迪FV7203TFVCF轿车</td>
          <td>2017-06-23</td>
          <td>2017-08-13</td>
          <td>2017-08-23</td>
          <td>脱保</td>
          <td>未分配</td>
          <td>北京保评科技有限公司</td>
        </tr>
        <tr>
          <td>
            <label>
              <input type="checkbox" name="clgl">
            </label>
          </td>
          <td>京A83756</td>
          <td>杨宇鹏</td>
          <td>奥迪FV7203TFVCF轿车</td>
          <td>2017-06-23</td>
          <td>2017-08-13</td>
          <td>2017-08-23</td>
          <td>脱保</td>
          <td>未分配</td>
          <td>北京保评科技有限公司</td>
        </tr>
        <tr>
          <td>
            <label>
              <input type="checkbox" name="clgl">
            </label>
          </td>
          <td>京A83756</td>
          <td>杨宇鹏</td>
          <td>奥迪FV7203TFVCF轿车</td>
          <td>2017-06-23</td>
          <td>2017-08-13</td>
          <td>2017-08-23</td>
          <td>脱保</td>
          <td>未分配</td>
          <td>北京保评科技有限公司</td>
        </tr>
      </table>
      <div class="pagerbox">
        当前显示1-10条记录<select class="form-control">
        <option>10</option>
        <option>20</option>
      </select>共85条数据
        <ul class="pager">
          <li class="previous"><a href="your/nice/url">«</a></li>
          <li><a href="your/nice/url">1</a></li>
          <li class="active"><a href="your/nice/url">2</a></li>
          <li><a href="your/nice/url">3</a></li>
          <li><a href="your/nice/url">4</a></li>
          <li><a href="your/nice/url">5</a></li>
          <li><a href="your/nice/url">...</a></li>
          <li class="next"><a href="your/nice/url">»</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created () {
//      this.initDate()
      $(function () {
        $('.form-date').val('23')
        new $.zui.Messager('这是一个浮动消息。', {
          icon: 'bell' // 定义消息图标
        }).show()
      })
    },
    methods: {
      initDate () {
        $('.form-date').datetimepicker({
          language: 'zh-CN',
          weekStart: 1,
          todayBtn: 1,
          autoclose: 1,
          todayHighlight: 1,
          startView: 2,
          minView: 2,
          forceParse: 0,
          format: 'yyyy-mm-dd'
        })
      }
    }
  }
</script>
<style type="text/css">
  .shadow {
    padding: 20px 20px 10px;
    overflow: hidden;
  }

  .shadow .form-control {
    width: 125px;
    display: inline-block;
  }

  .mar_t_20 {
    margin-top: 20px;
  }

  .btnbox {
    overflow: hidden;
    margin-bottom: 20px;
  }

  table td, table th {
    text-align: center;
  }

  table th {
    color: #fe5722;
  }

  .pagerbox {
    float: right;
    width: 590px;
  }

  .pager {
    vertical-align: middle;
    margin: 20px 0 20px 30px;
  }

  .pagerbox .form-control {
    display: inline-block;
    width: 10%;
    margin: 0 15px;
  }
</style>
