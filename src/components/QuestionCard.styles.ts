import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  background-color: white;
  padding: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: left;
  p {
    font-size: 1rem;
  }
  .result {
    text-align: center;
    font-size: 30px;
    filter: none;
  }
  .black {
    background-image: linear-gradient(
      43deg,
      #000000 0%,
      #797979 46%,
      #000000 100%
    );
    font-weight: 600 !important;
  }
  .red {
    background-image: linear-gradient(
      43deg,
      red 0%,
      #ff2505 46%,
      red 100%
    );
    font-weight: 600 !important;
  }
  .green {
    background-image: linear-gradient(43deg, #08aeea 0%, #08aeea 100%);
    font-weight: 600 !important;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  height: 50px;
  padding: 5px;

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 40px;
    height: 40px;
    float: left;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)"
        : !correct && userClicked
        ? "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)"
        : "linear-gradient(43deg, #000000 0%, #797979 46%, #a6a6a6 100%)"};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
  button:hover {
    background: ${({ userClicked }) =>
      !userClicked ? "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)" : null};
  }
  small {
    float: left;
    color: ${({ correct, userClicked }) =>
      correct ? "red" : !correct && userClicked ? "green" : "white"};
    margin: 14.5px;
  }

  p {
    float: left;
    margin: 15px;
  }
`;
