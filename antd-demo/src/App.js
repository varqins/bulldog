import './App.css';
import React from 'react';

import Header from './Header.js';
import ItemPanel from './ItemPanel.js';
import Footer from './Footer.js';
import Store from './Store.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            store:new Store

        }
    }
    removeItem(key){
        //对状态进行修改
        this.setState({
            store:this.state.store.removeItem(key)
        });
    };
    editItem(item){
        this.setState({
            store:this.state.store.editItem(item)
        });
    }
    render(){
        return (
            <div>
                <Header/>
                <ItemPanel items={this.state.store.store} removeItem={this.removeItem.bind(this)} editItem={this.editItem.bind(this)}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
