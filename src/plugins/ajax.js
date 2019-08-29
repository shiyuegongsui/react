import React from "react";

console.log(React);


//将ajax挂载到全局中
React.Component.prototype.$ajax = function () {
    console.log(1);
}