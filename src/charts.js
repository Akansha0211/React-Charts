import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Charts extends Component {
    state = { 
        options:{
            chart:{
                background: '#f4f4f4'
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
    render() { 
        return ( 
            <Chart
                options ={this.state.options}
                series={this.state.series}
                type="line"
                height = "450"
                width="100%"

            />
         );
    }
}
 
export default Charts;