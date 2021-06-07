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
                categories:[
                    'Tamil Nadu',
                    'Gujarat',
                    'Punjab',
                    'UttarPradesh',
                    'Delhi',
                    'Haryana'
                ]
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
        series:[{
            name: 'Population',
            data:[
                53478393,
                53483282,
                7992742,
                768292814,
                83728133,
                76271903
            ]
        }],
        
     }

    async componentDidMount(){
        const url ="https://sokt.io/c/app/uia7y4nwWWzsu6yzwUVk/graph";
        const response = await axios.get(url);
        const data = await response.data;
        
    }

    render() { 
        return ( 
            // <Chart
            //     options ={this.state.options}
            //     series={this.state.series}
            //     type="line"
            //     height = "450"
            //     width="100%"

            // />
            <div>
                <h1>Hello</h1>
            </div>
         );
    }
}
 
export default Charts;