import React,{Component} from 'react'
import { Button,message } from 'antd'

import './style/App.css'

class App extends Component{

    render(){
        return (
            <Button type="primary" onClick={() => message.success("点击成功！")}>App</Button>
        )
    }
}

export default App