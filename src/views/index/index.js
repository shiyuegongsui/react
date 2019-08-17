import React, { Component, Fragment } from 'react';
import './index.scss';

import ListItem from '@components/listItem/listItem.js'


// 知识点1：JSX
// JSX就是Javascript和XML结合的一种格式。
// React发明了JSX，可以方便的利用HTML语法来创建虚拟DOM，
// 当遇到<，JSX就当作HTML解析，遇到{就当JavaScript解析.



// 知识点2:Fragment
// React要求必须在一个组件的最外层进行包裹。
// 但是你的布局就偏不需要这个最外层的标签的时候  可以使用    Fragment 




// 知识点3：class,for 避免冲突 需要避免（className  htmlFor） 
// 错误代码：<label class="demo" for="demo"></label>
// 正确代码：<label className="demo" htmlFor="demo"></label>




// 知识点4：组件命名规范 大写开头
// 浏览器原生的组件，比如div,span，是采用纯小写方式命名。
// 在JSX语法里，可以混杂原生组件和React组件，为了区分他们，
// 所有以首字母大写的标签才会被解析成React组件，否则会被当作原生组件处理




// 知识点5：父组件向子组件传值
//     <ListItem  list={this.state.list}/>




// 知识点6：子组件向父组件传递数据
//     如果子组件要调用父组件方法，其实和传递数据差不多，只要在组件调用时，
//     把方法传递给子组件就可以了,记得这里也要进行this的绑定，如果不绑定子组件是没办法找到这个父组件的方法的。
//     <ListItem  deleteItem={this.deleteItem.bind(this)}/> 




class App extends Component {
    constructor(props) {
        super(props);  //调用父类的构造函数，
        this.state = {
            inputValue: '', // input中的值
            list: ["我是测试啦1", "我是测试啦2"]    //服务列表
        }
    }
    componentWillMount() {
        console.log('1 componentWillMount----组件将要挂载到页面的时刻')
    }
    render() {
        console.log('2 render---组件挂载中.......')
        return (
            <Fragment>
                <input
                    value={this.state.inputValue}
                    onChange={this.inputChange.bind(this)}
                />
                <button onClick={this.addList.bind(this)}>增加服务</button>

                <ListItem
                    list={this.state.list}
                    deleteItem={this.deleteItem.bind(this)}
                />

                {/* <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={this.deleteItem.bind(this, index)}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul> */}
                <div>
                    <p>生命周期</p>
                    <img src={require('@/assets/images/React1901.png')} alt="生命周期" />
                </div>
            </Fragment>
        )
    }

    componentDidMount() {
        console.log('3 componentDidMount----组件挂载完成的时刻执行')
    }

    shouldComponentUpdate() {
        console.log('4 shouldComponentUpdate---组件发生改变前执行');
        //props 或者  state 发生改变都会执行。
        //  返回一个布尔值
        //  如果返回true的话 会继续往下执行 (componentWillUpdate=> render =>componentDidUpdate)
        //  如果返回false的话   不会继续渲染
        return true;
    }
    componentWillUpdate(){
        console.log('5 componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }
    componentDidUpdate(){
        console.log('6 componentDidUpdate----组件更新之后执行')
    }
    // 事件
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    //添加list
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        }, () => {
            this.setState({
                inputValue: ""
            })
        })
    }

    //删除
    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default App;