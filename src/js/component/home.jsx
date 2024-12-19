import React from "react";
import Semaforo from "./Semaforo.jsx";
import './Home.css'

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center fondo">
			<div>
				<Semaforo/> 
			</div>
		</div>
		
	);
};

export default Home;
