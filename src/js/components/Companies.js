import React,{Component} from 'react';
import {Grommet,Box,DataTable,Meter,Text} from 'grommet';
import { connect } from 'react-redux';
import { getData_Companies } from '../actions';

const mapStateToProps = state => {
  return {
      companies: state.companies,
  };
};
function mapDispatchToProps(dispatch) {
  return {
      getData_Companies:()=>dispatch(getData_Companies())
  };
}

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});
 
const columns = [
  {
    property: 'name',
    header: <Text>Name with extra</Text>,
    primary: true,
    footer: 'Total'
  },
  {
    property: 'location',
    header: 'Location'
  },
  {
    property: 'date',
    header: 'Date',
    render: datum =>
      datum.date && new Date(datum.date).toLocaleDateString('en-US'),
    align: 'end'
  },
  {
    property: 'percent',
    header: 'Percent Complete',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ value: datum.percent }]}
          thickness='small'
          size='small'
        />
      </Box>
    )
  },
  {
    property: 'paid',
    header: 'Paid',
    render: datum => amountFormatter.format(datum.paid / 100),
    align: 'end',
    aggregate: 'sum',
    footer: { aggregate: true }
  }
];

const DATA = [
  {
    name: 'Alan',
    location: '',
    date: '',
    percent: 0,
    paid: 0
  },
  {
    name: 'Bryan',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 30,
    paid: 1234
  },
  {
    name: 'Chris',
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 2345
  },
  {
    name: 'Eric',
    location: 'Palo Alto',
    date: '2018-06-11',
    percent: 80,
    paid: 3456
  },
  {
    name: 'Doug',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 60,
    paid: 1234
  },
  {
    name: 'Jet',
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 3456
  },
  {
    name: 'Michael',
    location: 'Boise',
    date: '2018-06-11',
    percent: 50,
    paid: 1234
  },
  {
    name: 'Tracy',
    location: 'San Francisco',
    date: '2018-06-10',
    percent: 10,
    paid: 2345
  }
];

class Companies extends Component{
  constructor(props){
    super(props);
    this.state={ companies:[]}
  }
  componentDidMount() {
    this.props.getData_Companies();
}

  render(){
    const { companies }=this.props;
    return(
    <Box align='center' pad='large' background="blue">
      <DataTable columns={columns} data={companies} />
    </Box>    
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Companies);