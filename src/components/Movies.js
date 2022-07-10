import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <MoviesContainer>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMyfYecoIsc_td1T3S3cr7MMhBOLRCqtUf-3HQ8Jv5eZSx0V4nt7xCOXfezt38MNuFAs&usqp=CAU"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMyfYecoIsc_td1T3S3cr7MMhBOLRCqtUf-3HQ8Jv5eZSx0V4nt7xCOXfezt38MNuFAs&usqp=CAU"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMyfYecoIsc_td1T3S3cr7MMhBOLRCqtUf-3HQ8Jv5eZSx0V4nt7xCOXfezt38MNuFAs&usqp=CAU"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMyfYecoIsc_td1T3S3cr7MMhBOLRCqtUf-3HQ8Jv5eZSx0V4nt7xCOXfezt38MNuFAs&usqp=CAU"
            alt=""
          />
        </Wrap>
      </Content>
    </MoviesContainer>
  );
};

export default Movies;

const MoviesContainer = styled.div``;
const Content = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
    border-radius: 5px;
  }

  &:hover {
    transform: scale(1.02);
    border-color: white;
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 38px 22px -10px;
  }
`;
