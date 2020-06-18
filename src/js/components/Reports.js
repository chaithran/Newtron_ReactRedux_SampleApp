import React, { Component } from 'react';
import { Grommet, Box, DataTable, Meter, Text } from 'grommet';
import { connect } from 'react-redux';
import { DoughnutChart } from 'grommet-controls/chartjs';

const mapStateToProps = state => {
    return {
        companies: state.companies,
    };
};
// function mapDispatchToProps(dispatch) {
//     return {
//         getData_Companies:()=>dispatch(getData_Companies())
//     };
//   }


class Reports extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { companies } = this.props;
        return (
            <Box align='center' pad='large' background="grey">
                <DoughnutChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                            {
                                label: "Dataset 1",
                                data: [-93, 45, 35, -33, 8, 88, -62],
                            }
                        ],
                    }}
                    options={{
                        legend: {
                            display: false,
                        },
                        themedData: true,
                    }}
                />    </Box>
        );
    }
}

export default (Reports);