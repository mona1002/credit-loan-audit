<template>
  <div>
    <div style="margin-bottom: 20px;">
      <el-button size="small" @click="addTab(editableTabs2)">
        add tab
      </el-button>
    </div>
    <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab"  @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in editableTabs2" :key="item.name" :label="item.title" :name="item.name">
        {{item.content}}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
          handleClick(tab, event) {
        console.log(tab, event);
        console.log(this.tabIndex )
      },
      addTab(targetName) {
          console.log(targetName)
        let newTabName = ++this.tabIndex + '';
       targetName.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        // this.editableTabsValue2 = newTabName;
          console.log(targetName)
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }

</script>
