import React from "react";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

interface Props {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  selectedAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNumber} out of {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={selectedAnswer?.correctAnswer === answer}
            userClicked={selectedAnswer?.answer === answer}
          >
            <button
              disabled={!!selectedAnswer}
              value={answer}
              onClick={callback}
            ></button>
            <p dangerouslySetInnerHTML={{ __html: answer }}>
            </p>
            <small></small>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
