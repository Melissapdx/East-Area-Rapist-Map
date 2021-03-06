import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class YearsNav extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			years:[
				1976,
	            1977,
	            1978,
	            1979,
	            1980,
	            1981,
	            1982,
	            1983,
	            1984,
	            1985,
	            1986
			],
			activeYear:null
		}

	}
	clickYear(year,e) {
		e.preventDefault();
		this.setState({
			activeYear: year,
		});
		this.props.yearDidChange(year);
		
	}
	render(){
		const activeYear = this.state.activeYear;
		const listItems = this.state.years.map((year) =>
				<li>
					<a
						href="#"
						className={(this.state.activeYear == year) ? "year-selected" : null}
						onClick={this.clickYear.bind(this,year)}>
						{year}
					</a>
				</li>
			);
		
		return (
			<ul className="years">
				<h2>Years</h2>
				<h3>{}</h3>
				{listItems}
			</ul>
		);
	}
}

export default YearsNav;