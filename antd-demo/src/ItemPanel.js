import React from 'react';
import Item from './Item.js';
export default class ItemPanel extends React.Component{
    constructor(props){
        super(props);
    }
	render(){
	    let items = [];
	    if(this.props.items && this.props.items.length!=0){
            this.props.items.forEach((item,index) => {
                items.push(<Item item={item} index={index} key={item.key} removeItem={this.props.removeItem} editItem={this.props.editItem}/>);
            });
		}else{
            items.push(<tr><th colSpan="5" className="tempEmpty">暂无用户</th></tr>);
        }
		return (
		  <table className='itemPanel'>
		    <thead>
			    <th className='itemTd'>姓名</th>
				<th className='itemTd'>年龄</th>
				<th className='itemTd'>职位</th>
				<th className='itemTd'>性别</th>
				<th className='itemTd'>操作</th>
			</thead>
		    <tbody>{items}</tbody>
		  </table>
		);
	}
}