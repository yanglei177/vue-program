<template>
  <div>
    <div class="shadow">      
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="ruleForm" :inline ="true">
        <el-row>
          <el-col :span="8">
            <el-form-item label="车牌号：" prop="carNo">
              <el-input v-model="ruleForm.carNo" placeholder="请输入车牌号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="车主：" prop="carOwner">
              <el-input v-model="ruleForm.carOwner" placeholder="请输入车主姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="品牌型号：" prop="carBrand">
              <el-input v-model="ruleForm.carBrand" placeholder="请输入品牌型号"></el-input>
            </el-form-item>
          </el-col>
        </el-row>  
        <el-row>
          <el-col :span="8">
            <el-form-item label="交强险到期日：" prop="insuranceDate">
              <el-input v-model="ruleForm.insuranceDate" placeholder="请选择交强险到期日"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="商业险到期日：" prop="commercialDate">
              <el-input v-model="ruleForm.commercialDate" placeholder="请选择商业险到期日"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="初登日期：" prop="startDate">
              <el-input v-model="ruleForm.startDate" placeholder="请选择初登日期"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="车辆状态：" prop="carStatus">
              <el-select v-model="ruleForm.carStatus">
                <el-option label="请选择车辆状态" value=""></el-option>
                <el-option label="完成" value="shanghai"></el-option>
                <el-option label="失败" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="业务员" prop="salesman">
              <el-select v-model="ruleForm.salesman">
                <el-option label="请选择业务员" value=""></el-option>
                <el-option label="大鹏" value="shanghai"></el-option>
                <el-option label="无敌" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-col>
        </el-row>        
      </el-form>
      
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
    data() {
      return {
        ruleForm: {
          carNo: '',
          carOwner: '',
          carBrand: ''
        },
        rules: {
          carNo: [
            { required: true, message: '请输入车牌号', trigger: 'blur' },
            { min: 7, max: 7, message: '请输入正确车牌号', trigger: 'blur' }
          ],
          carOwner: [
            { required: true, message: '请输入车主姓名', trigger: 'blur' }
          ],
          carBrand: [
            { required: true, message: '请输入品牌型号', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style type="text/css">
  .shadow {padding: 20px 20px 10px;overflow: hidden;}
</style>
