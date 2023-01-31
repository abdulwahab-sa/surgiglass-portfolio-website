import React from 'react';
import Myvideo from './../videos/surgiglass-intro.mp4';
import styled from 'styled-components';
import BigScreen from '../responsive';

const VideoContainer = styled.div`
	height: 70vh;
	width: 100%;
	position: relative;
	background: url(${Myvideo});
`;

const Video = styled.video`
	height: 100%;
	width: 100%;
	object-fit: cover;
	z-index: 0;
`;

const VideoOverlay = styled.div`
	height: 100%;
	width: 100%;
	background: #5a5a5a;
	opacity: 60%;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 1;
`;

const VideoInfoContainer = styled.div`
	z-index: 2;
	position: absolute;
	top: 0;
	//transform: translateY(-20%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 10px 20px;
	color: white;
	//border: 2px solid red;
`;
const VideoHeading = styled.h2`
	font-weight: 500;
	margin-bottom: 2rem;
	font-size: 1.5rem;
	${BigScreen({ fontSize: '2.2rem' })}
`;
const VideoStatement = styled.p`
	font-style: italic;
	${BigScreen({ fontSize: '1.4rem' })}
`;

function Videosection() {
	return (
		<>
			<VideoContainer>
				{<Video src={Myvideo} autoPlay muted loop />}
				<VideoOverlay></VideoOverlay>
				<VideoInfoContainer>
					<VideoHeading>
						Using Research, Innovation And Professional Experience To Provide Surgical Perfection All Over The World.
					</VideoHeading>
					<VideoStatement>
						We have a long tradition of manufacturing surgical instruments: Our mission has remained unchanged to the present day: to
						manufacture instruments of the highest quality.
					</VideoStatement>
				</VideoInfoContainer>
			</VideoContainer>
		</>
	);
}

export default Videosection;
