import { autoserialize } from 'cerialize';

export class Word {
  @autoserialize
  word: string;

  @autoserialize
  results: Result[];

  @autoserialize
  syllables: Syllables;

  @autoserialize
  pronunciation: Pronunciation;

  @autoserialize
  frequency: number;
}

export class Result {
  @autoserialize
  definition: string;

  @autoserialize
  partOfSpeech: string;

  @autoserialize
  synonyms: string[];

  @autoserialize
  typeOf: string[];

  @autoserialize
  examples: string[];
}

export class Syllables {
  @autoserialize
  count: number;

  @autoserialize
  list: string[];
}

export class Pronunciation {
  @autoserialize
  all: string;
}
