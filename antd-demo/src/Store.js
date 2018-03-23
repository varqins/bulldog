class Item{
    constructor(item) {
        this.info={};
        this.info.name=item.name;
        this.info.age=item.age;
        this.info.status=item.status;
        this.info.sex=item.sex;
        ++Item.key;
        this.key = Item.key;
    }

}
Item.key=0;
export default class Store {
    constructor() {
        this.allStore = [];
        if(Store.rawData && Store.rawData.length!=0){
            Store.rawData.forEach(
                item=>{
                    this.allStore.push(new Item(item));
                }
            )
        }
        this.store=this.allStore;
    }
    removeItem(key){
        let newStore=this.store.filter(item=>{
            return item.key!=key;
        })
        this.store=newStore;
        return this;
    }
    editItem(item){
        let tempStore=this.removeItem(item.key);
        let newItem=new Item(item);
        newItem.key=item.key;
        tempStore.store.push(newItem);
        this.store=tempStore.store;
        return this;
    }
    addItem(item){
        let newItem=new Item(item);
        this.allStore.push(newItem);
        this.store=this.allStore;
        return this;
    }
}

Store.rawData= [{ sex: '男', age: 18, name: '曹操', status: '主公'},
    { sex: '男', age: 19, name: '郭嘉', status: '忠臣'},
    { sex: '男', age: 23, name: '张辽', status: '忠臣'},
    { sex: '男', age: 18, name: '诸葛亮', status: '反贼'},
    { sex: '女', age: 22, name: '孙尚香', status: '反贼'},
    { sex: '女', age: 41, name: '吴国太', status: '反贼'},
    { sex: '男', age: 12, name: '典韦', status: '忠臣'},
    { sex: '男', age: 33, name: '夏侯惇', status: '忠臣'},
    { sex: '女', age: 50, name: '张春华', status: '反贼'},
    { sex: '男', age: 12, name: '孙权', status: '反贼'},
    { sex: '男', age: 22, name: '庞统', status: '内奸'}]