
function generateRandomNames(names: Array<String>): Array<String> {
  let lengthOfAllNames:number=names.length
  if (lengthOfAllNames<=0) return []
  if(lengthOfAllNames<=5)return names
  let LIST_LENGTH:number=5
  let result:String[] = new Array(LIST_LENGTH);
  let taken = new Array(lengthOfAllNames);
  while (LIST_LENGTH--) {
    let current = Math.floor(Math.random() * names.length);
    result[LIST_LENGTH] = names[(current in taken ? taken[current] : current)];
    taken[current] = --lengthOfAllNames in taken ? taken[lengthOfAllNames] : lengthOfAllNames;
}
return result;
}

export const namesService = {
  generateRandomNames,
};

export interface RandomNamesApi {
  randomNames: typeof namesService;
}
