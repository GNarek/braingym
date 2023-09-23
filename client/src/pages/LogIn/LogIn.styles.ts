import styled from "styled-components";
import { colors } from "styles";

const color1 = "#ceeefd";
const color2 = "#60bdc4";

export const LogInStyled = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;

  .background-wrapper {
    height: 200%;
    width: 150%;
    position: absolute;
    top: -50%;
    left: -25%;
    z-index: -1;
    background: repeating-linear-gradient(
      -45deg,
      ${color1} 0%,
      ${color1} 20%,
      ${color2} 20%,
      ${color2} 40%,
      ${color1} 40%,
      ${color1} 60%,
      ${color2} 60%,
      ${color2} 80%,
      ${color1} 80%,
      ${color1} 100%
    );
  }

  .photos-wrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    z-index: -1;

    img {
      width: 25%;
      max-width: 300px;
    }
  }

  .log-in-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .welcome {
        font-size: 5vw;
        margin-top: -24%;
        margin-bottom: 24%;

        span {
          &:nth-child(1) {
            color: ${colors.secondary};
          }

          &:nth-child(2) {
            color: ${colors.rose};
          }

          &:nth-child(3) {
            color: ${colors.yellow};
          }

          &:nth-child(4) {
            color: ${colors.red};
          }

          &:nth-child(5) {
            color: ${colors.green};
          }

          &:nth-child(6) {
            color: ${colors.red};
          }
        }
      }
    }
  }
`;