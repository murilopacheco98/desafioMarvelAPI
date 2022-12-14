import styled from "styled-components";
import Asgard from "../../assets/img/Asgard.webp";

export const Container = styled.div`
  // font-family: Bangers, sans-serif;
  background-image: url(${Asgard});
  background-size: cover;
  flex-direction: column;
  background-repeat: no-repeat;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    height: auto;
    background-color: #060d15;
  }
`;

export const CardsSpace = styled.div`
  display: flex;
  max-width: 90%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const TitlePage = styled.h1`
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: red;
  color: wheat;
  font-size: 4.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 1024px) {
    margin-top: 1rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  @media (max-width: 667px) {
    margin-top: 1rem;
    text-align: center;
    margin-bottom: 0rem;
  }
`;