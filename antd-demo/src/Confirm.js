import { Modal, Button } from 'antd';
import React from 'react';
import Edit from './Edit';

export default class Confirm extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>修改</Button>
                <Modal
                    visible={this.state.visible}
                >
                    <div style={{'height':'180px'}}>
                        <Edit item={this.props.item} handleCancel={this.handleCancel.bind(this)} editItem={this.props.editItem}/>
                    </div>
                </Modal>
            </div>
        );
    }
}