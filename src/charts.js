import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

class Charts extends Component {
    state = { 
      
        options:{
            chart:{
                background: '#f4f4f4',
                toolbar:{
                    show:true
                }
            },
            xaxis:{
                categories:[]
            },
            title:{
                text:"Sample Line Chart",
                align:'center',
                margin: 20,
                style:{
                    fontSize:'25px'
                }
            }
        },
        series: [
            {
              name: "views",
              data: []
            },
            {
                name:'time',
                data:[]
            }
          ]
       
     };

     async componentDidMount(){
        const response = axios.get("https://sokt.io/c/app/uia7y4nwWWzsu6yzwUVk/graph");
        const data = (await response).data;
        console.log(data);
        // this.setState({series:data.result}); //  has an array     
        // console.log(this.state.series);

       const arr = data.result;
    //    console.log(arr);
        const values = [];
        const values1 = [];
       arr.map((item)=>{
            values.push(item.views)
            values1.push(item.time)
            console.log(values)
            console.log(values1)
       })
       this.setState({
           series:[
            {
               name:'views',
               data : values
           },
           {
               name:'time',
               data: values1
           }


        ]
       })
       
              
     }
     
    render() { 
        return ( 
            <div>
                    <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    height = "450"
                    width="100%"
                />
               
            </div>
            
            
         );
    }
}
 
export default Charts;