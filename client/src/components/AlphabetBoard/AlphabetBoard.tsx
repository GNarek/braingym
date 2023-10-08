import { letters as armenianLetters } from "shared/constants/alphabet/armenian";
import { TLetter } from "shared/types";
import { useCubeSizes } from "./AlphabetBoard.hooks";
import { AlphabetBoardStyled } from "./AlphabetBoard.styles";

export type TBoardSize = "small" | "large";

type TProps = {
  onClick?: (letterKey: string) => any;
  selectedLetters?: string[];
  size?: TBoardSize;
  letters?: TLetter[];
};

export const AlphabetBoard: React.FC<TProps> = (props) => {
  const {
    onClick,
    selectedLetters = [],
    size = "large",
    letters = armenianLetters,
  } = props;
  const sizes = useCubeSizes(size, letters);

  return (
    <AlphabetBoardStyled
      size={size}
      sizes={sizes}
      className="grid-container letters-container"
    >
      {letters.map((letter) => (
        <div
          key={letter.key}
          className={`grid-item letter letter-${letter.key} ${
            selectedLetters.includes(letter.key) ? "selected" : ""
          }`}
          onClick={onClick?.(letter.key)}
        >
          {letter.value.uppercase} {letter.value.lowercase}
        </div>
      ))}
    </AlphabetBoardStyled>
  );
};
