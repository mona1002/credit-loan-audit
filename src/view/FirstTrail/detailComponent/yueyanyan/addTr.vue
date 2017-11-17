<template>
	<div>
		{{json}}
	</div>
</template>
<script type="text/javascript">
import mySelect from '@/select'
	export default{
		data(){
			return{
				json:'',
				json1:'<tr>\
							<td><my-select></my-select></td>\
							<td><input type="text" name=""></td>\
							<td><input type="text" name=""></td>\
							<td><input type="text" name=""></td>\
							<td><input type="text" name=""></td>\
							<td><input type="text" name=""></td>\
							<td><input type="text" name=""></td>\
							<td><input type="text" name=""></td>\
							<td><input type="text" name=""></td>\
							<td><input type="text" name=""></td>\
							<td><input type="text" name=""></td>\
							<td><input type="text" name=""></td>\
						</tr>',
				if(flag==1){
					this.json=this.json1;
				}else if(flag==2){
					this.json=this.json2;
				}else if(flag==3){
					this.json=this.json3;
				}else if(flag==4){
					this.json=this.json4;
				}else if(flag==5){
					this.json=this.json5;
				}
			}
		}
	}
</script>