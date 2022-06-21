export const keywordsStringToArray = (keywordsString: string): string[] => {
  const keywordDelimiter = new RegExp(' *[,;] *');
  return keywordsString.split(keywordDelimiter);
};

export const getFirstNKeywords = (keywordsString: string, n: number): string[] => {
  return keywordsStringToArray(keywordsString).slice(0, 2);
};
