   <div class="taskWinput search-div">
  <el-row class="row row1" type="flex">
    <el-col :span="6" class="search-item" :offset="0">
      <span class="keywordText">进件编号： </span>

    </el-col>
    <el-col :span="6" class="search-item">
      <span class="keywordText">客户名称：</span>

    </el-col>
    <el-col :span="6" class="search-item">
      <span class="keywordText">证件号码：</span>

    </el-col>
    <el-col :span="6" class="search-item">
      <span class="keywordText">产品名称：</span>

    </el-col>
  </el-row>
    <el-row class="row row2" type="flex">
    <el-col :span="6" class="search-item" :offset="0">
      <span class="keywordText">紧急程度： </span>

    </el-col>
    <el-col :span="6" class="search-item">
      <span class="keywordText">申请日期：</span>

    </el-col>
    <el-col :span="6" class="search-item">
      <span class="keywordText">本环节处理时间：</span>
      
    </el-col>
     <el-col :span="6" class="search-btn">
      <el-button class="btn query" type="primary" @click="Rsearch">查询</el-button>
      <el-button class="btn reset" @click="Rreset">重置</el-button>
    </el-col>
  </el-row>
</div>