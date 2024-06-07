import styled from "styled-components";
import imgPath from "../image/1.png";
const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#f3edc4, #ffffde, #f3edc4);
  background-color: #ffffde;
  display :flex;
  justi
`;
const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
const Main = () => {
  return (
    <>
      <MainContainer>
        <Image src={imgPath} alt="페코쨩"></Image>
      </MainContainer>
    </>
  );
};
export default Main;
