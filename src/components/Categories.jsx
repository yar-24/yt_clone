import styled from "styled-components";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { tablet } from "../responsive";
import components from "../components/components.css";

const Container = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  left: 18%;
  background-color: #191a1b;
  color: white;
  ${tablet({ display: "flex", left: "6%", marginTop: "10px" })}
`;

const Wrapper = styled.div``;

const Item = styled.div`
  display: flex;
  align-items: flex-end;
  width: 80px;
  height: 100%;
  color: white;
  border-radius: 40%;
  background: linear-gradient(100deg, #191b1c 0%, rgb(0, 0, 0, 0.8) 100%);
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 76%;
  cursor: pointer;
  ${tablet({ left: "85%", width: "10%" })}
`;

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
        <Item>
          <ArrowForwardIos style={{width:"15px"}}/>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Categories;
