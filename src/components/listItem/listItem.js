import React, { Component } from 'react';
import PropTypes from 'prop-types'



class ListItem extends Component {

    render() {
        console.log("我子组件渲染啦");
        return (
            <ul>
                {
                    this.props.list.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={this.deleteItem.bind(this, index)}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }


    // 防止频繁无用渲染render
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.list !== this.props.list) {
            return true
        } else {
            return false
        }
    }

    deleteItem(index) {
        this.props.deleteItem(index);
    }
}

//props 数据类型校验
ListItem.propTypes = {
    list: PropTypes.array,
    deleteItem: PropTypes.func,
}


export default ListItem