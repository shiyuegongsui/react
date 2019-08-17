import React, { Component } from 'react';
import PropTypes from 'prop-types'



class ListItem extends Component {
    render() {
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