import React from "react";
import styled from "styled-components";

const ResultTitle = styled.h1`
	font-size: 64px;
	font-weight: bold;
	margin: 8px 0px;
	text-align: center;
`;

const Score = styled.p`
	font-size: 192px;
	margin: 40px;
	text-align: center;
	color: ${(props) => props.theme.primaryColor100};
`;

const ResultSection = ({ convertedScore }) => (
	<>
		<ResultTitle>Your score is</ResultTitle>
		<Score>{convertedScore}</Score>
	</>
);
export default ResultSection;
