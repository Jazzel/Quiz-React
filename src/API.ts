export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export enum Type {
  MULTIPLE = "multiple",
  BOOLEAN = "boolean",
}

export enum Encoding {
  DEFAULT = "default",
  URLLEGACY = "urlLegacy",
  URL3986 = "url3986",
  BASE64 = "base64",
}

const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: string,
  type: string,
  category: number,
) => {
  let URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;
  if (category !== 0) {
    URL += `&category=${category}`
  }
  const data = await (await fetch(URL)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};

export const fetchQuizCategories = async () => {
  const data = await fetch("https://opentdb.com/api_category.php");
  const { trivia_categories } = await data.json();
  const categories: Categories[] = trivia_categories;

  return categories;
};