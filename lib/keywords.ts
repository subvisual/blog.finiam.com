export const keywordsStringToArray = (keywordsString: string): string[] => {
  const keywordDelimiter = / *[,;] */;

  return keywordsString.split(keywordDelimiter);
};

export const getFirstNKeywords = (keywordsString: string): string[] =>
  keywordsStringToArray(keywordsString).slice(0, 2);
