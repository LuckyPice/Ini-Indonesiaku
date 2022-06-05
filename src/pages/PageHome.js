import React, { Component } from "react";
import JumbotronHome from "components/JumbotronHome";
import "../assets/style/MainHome.css";
import destination from "data/Destination";

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
					{destination.map((value,  index)  => {
						return (
							<div className="destination-container" key={index}>
								<div className="destination-image">
									<img src={value.gambar} alt={value.nama} />
								</div>
								<div className="destination-text">
									<h3>{value.nama}</h3>
									<p>{value.deskripsi}</p>
								</div>
							</div>
						);
					})}
				</main>
			</div>
		);
	}
}

export default PageHome;