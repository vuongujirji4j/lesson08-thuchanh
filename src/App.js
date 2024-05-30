import React, { Component } from 'react'
import PvvListTasks from './component/PvvListTasks';
import PvvTaskAdd from './component/PvvTaskAdd';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products :[
        { pvv_taskId:1,pvv_taskName:"Học lập trình frontend", pvv_level:"Small" },
        { pvv_taskId:2, pvv_taskName:"Học lập trình reactjs",pvv_level:"Medium"},
        { pvv_taskId:3, pvv_taskName:"Lập trình với Frontend - Reactjs",pvv_level:"High"},
        { pvv_taskId:4, pvv_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",pvv_level:"Small"},
      
      ]
    }
  }
  pvvHandldSumit=(param)=>{
    console.log("App:",param);
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
     
      <div className='container border mt-5'>
      <h1>pvv-2210900085</h1>
      <hr/>
      <PvvListTasks renderProducts={this.state.products}/>
      <hr/>
      <PvvTaskAdd onSummit={this.pvvHandldSumit}/>
     
      </div>
    )
  }
}
