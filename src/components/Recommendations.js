/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Col,Button } from "react-bootstrap";
import "../assets/style/Recommendations.css";
import bali from "../assets/image/content/balli-reccomend.jpg";
class Recommendations extends Component {
	render() {
		return (
			<Col xl={12} className="reccomend-card">
				<div>
					<img src={bali} className="reccomend-img"/>
				</div>
				<div className="reccomend-text">
					<h5>Rekomendasi Destinasi</h5>
					<h3>Wonderfull Bali</h3>
					<h6>The Best Place for A Beach Vocation</h6>
					<p>Siapa pun tak ada yang bisa menyangkal keindahan yang ditawarkan Pulau Dewata. 
						Baru-baru ini, Bali didapuk menjadi destinasi paling populer di dunia versi Tripadvisor Travellers’ Choice tahun 2021. 
						Tentu saja, bentangan alamnya yang indah berpadu sempurna dengan kearifan lokalnya yang istimewa menjadikan Bali sebagai 
						destinasi #DiIndonesiaAja yang patut Sobat kunjungi setidaknya sekali seumur hidup!
					</p>
					<Button variant="success">Read More</Button>
				</div>
			</Col>	
		)
	}
}

export default Recommendations;