import React from 'react';
import Confirm from './Confirm'

export default class Item extends React.Component{
	handlerDel(){
		this.props.removeItem(this.props.item.key);
	}
	
	render(){
		return (
			  <tr style={{'cursor': 'pointer'}}>
				<td className='itemTd'>{this.props.item.info.name}</td>
				<td className='itemTd'>{this.props.item.info.age}</td>
				<td className='itemTd'>{this.props.item.info.status}</td>
				<td className='itemTd'>{this.props.item.info.sex}</td>
				<td className='itemTd'>
					<div>
                        <div style={{'position':'relative','left':'50%','margin-left':'-60px','width':'120px','height':'35px'}}>
                            <div style={{'float':'left'}}>
                                <Confirm _key={this.props.item.info.name} item={this.props.item} editItem={this.props.editItem}/>
                            </div>
                            <div style={{'float':'left'}}>
                                <a className="itemBtn" onClick={this.handlerDel.bind(this)}>删除</a>
                            </div>
                        </div>
					</div>
				</td>
			  </tr>
		);
	}
}