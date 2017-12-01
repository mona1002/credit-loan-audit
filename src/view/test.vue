<template>


</template>
<script>
  export default {
    mounted() {

      this.ajax("/roleMgr/getRolesByPage", {
        roleCode: this.roleCode,
        roleName_la: this.roleName_la
      }).then(res => {
      console.log(res);
    });

  }
  }

</script>
<style>


</style>
