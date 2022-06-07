import React, { Component } from "react";
import JumbotronHome from "components/JumbotronHome";
import "../assets/style/MainHome.css";
import destination from "data/Destination";
import { Container,Row,Col } from 'react-bootstrap'
import Recommendations from "components/Recommendations";

class PageHome extends Component {
	render () {
		return (
			<div>
				<JumbotronHome />
				<main>
					<article className="text-destination">
						<h2>Destinasi Pilihan</h2>
						<p>Temukan keindahan Indonesia dengan mengunjungi destinasi pilihan</p>
					</article>
					<Container>
						<Row>
							{destination.map((value,  index)  => {
								return (
									<Col>
									<div className="destination-container" key={index + 1}>
										<div className="destination-image">
											<img src={value.gambar} alt={value.nama} />
											<h3 className="destination-text">{value.nama}</h3>	
										</div>
									</div>
									</Col>
								);
							})}
						</Row>
						<Row>
							<Recommendations/>
						</Row>
					</Container>
				</main>
			</div>
		);
	}
}

export default PageHome;