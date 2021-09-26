import styled from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import components from "../components/components.css";

const Container = styled.div`
  height: 50px;
  width: 100%;
  left: 18%;
  background-color: #191a1b;
  color: white;
  position: fixed;
`;

const Wrapper = styled.div``;

const ContainerCategory = styled.div`
  display: flex;
  transform: translateX(0px);
  position: relative;
`;

const Category = styled.div`
  font-size: 17px;
  margin: 10px;
  padding: 20px;
  padding-top: 5px;
  text-align: center;
  cursor: pointer;
`;


const Categories = () => {
  return (
    <Container>
      <Wrapper>
        <ArrowBackIos
          className="sliderArrow"
          style={{ left: 0, width: 15 }}
        />
        <ContainerCategory>
          <Category>Semua</Category>
          <Category>Viral</Category>
          <Category>Film</Category>
          <Category>Trailer</Category>
          <Category>Comedi</Category>
          <Category>Tranding</Category>
          <Category>React</Category>
          <Category>Chil</Category>
          <Category>Senja</Category>
          <Category>Terbenam</Category>
          <Category>IT</Category>
          <Category>music</Category>
          <Category>music</Category>
        </ContainerCategory>
        <ArrowForwardIos
          className="sliderArrow"
          style={{ right: "18%", width: 15 }}
        />
      </Wrapper>
    </Container>
  );
};

export default Categories;
