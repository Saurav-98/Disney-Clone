import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <DetailContainer>
      <Background>
        <img src="/images/movie-detail.jpg" alt="movie poster" />
      </Background>
      <ImageTitle>
        <img src="/images/movie-detail-banner-a.jpg" alt="banner" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="play icon black" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="play icon black" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="images/group-icon.png" alt="group icon" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 • 7m • Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        A Chinese-Canadian woman suffering from empty nest syndrome gets a
        second shot at motherhood when one of her handmade dumplings comes
        alive.
      </Description>
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  margin-top: 24px;
  margin-left: 20px;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  margin-right: 22px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  cursor: pointer;
  letter-spacing: 1.8px;
  transition: all 0.25s ease;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  margin-right: 20px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-top: 26px;
  min-height: 20px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
