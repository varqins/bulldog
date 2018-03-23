import React from 'react';
export default class Edit extends React.Component{
	componentDidMount(){
		if(this.props.item && this.props.item.info.sex){
            let selSex= this.refs.selSex;
            for(let option in selSex.options){
                if(selSex.options[option].value==this.props.item.info.sex){
                    selSex.options[option].selected=true;
                }
			}
			let selStatus=this.refs.selStatus;
            for(let option in selStatus.options){
            	if(selStatus.options[option].value==this.props.item.info.status){
            		selStatus.options[option].selected=true;
				}
			}
		}

	}
    handleSub(e){
		let item={};
		let editTable=this.refs.editTable;
		let selSex=editTable.querySelector('#editSex');
		let selStatus=editTable.querySelector('#editStatus');

		item.name=editTable.getElementById('editName').value.trim();
		item.age=editTable.querySelector('#editAge').value.trim();
		item.sex=selSex.options[selSex.selectedIndex].value;
		item.status=selStatus.options[selStatus.selectedIndex].value;
		item.key=this.props.item.key;
		this.props.editItem(item);
		this.props.handleCancel(e);
	}
    handleCancel(e){
		this.props.handleCancel(e);
	}
    render(){
	  let item = this.props.item;
	  if(!item)
	    return null;
	  
	  return (
	      <div className="overLay">
		    <h4 style={{'text-align':'center'}}>点击'完成'保存修改,点击'关闭'放弃未保存修改并退出.</h4>
			<hr/>
		    <table ref="editTable">
			  <tbody>
			    <tr>
				  <th>姓名</th>
				  <td>
					  <input id='editName' type="text" defaultValue={item.info.name}/>
				  </td>
				</tr>
			    <tr>
				  <th>年龄</th>
				  <td>
					  <input id='editAge' type="text" defaultValue={item.info.age}/>
				  </td>
				</tr>
			    <tr>
				  <th>性别</th>
				  <td>
				    <select ref='selSex' id='editSex'>
                        <option value="男">男</option>
                        <option value="女">女</option>
					</select>
				  </td>
				</tr>
				<tr>
				  <th>职位</th>
                  <td>
				    <select ref="selStatus" id='editStatus'>
					  <option value="主公">主公</option>
					  <option value="忠臣">忠臣</option>
					  <option value="内奸">内奸</option>
					  <option value="反贼">反贼</option>
					</select>
				  </td>
				</tr>
			  </tbody>
			</table>
			<p ref='Dtips' className='tips'>修改成功</p>
			<p ref='DtipsUnDone' className='tips'>请录入完整的人员信息</p>
			<p ref='DtipsUnAge' className='tips'>请录入正确的年龄</p>
			<button onClick={this.handleSub.bind(this)}>保存</button>
			<button onClick={this.handleCancel.bind(this)}>关闭</button>
		  </div>
	  );
	}
}