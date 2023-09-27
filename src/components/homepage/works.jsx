import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./cfb-logo.png"
								alt="codeforboston"
								className="work-image"
							/>
							<div className="work-title">Code for Boston</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">August 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/qakub6in9irfgc3yksde"
								alt="Toast"
								className="work-image"
							/>
							<div className="work-title">Toast</div>
							<div className="work-subtitle">
								Software Engineer Co-op
							</div>
							<div className="work-duration">January 2022 - June 2022</div>
						</div>

						<div className="work">
							<img
								src="./sandbox-icon.png"
								alt="Sandbox"
								className="work-image"
							/>
							<div className="work-title">Toast</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">September 2021 - January 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
