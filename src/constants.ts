// Regex adapted from https://stackoverflow.com/a/5553924
export const WHOLE_SENTENCE =
  /[^.!?\s][^.!?]*(?:[.!?](?!['"]?\s|$)[^.!?]*)*[.!?]?['"]?(?=\s|$)/gm;

/**
 * Captures the prefix (including space) for bullet lists, numbered lists
 * and checklists
 */
export const LIST_CHARACTER_REGEX = /^\s*(-|\+|\*|\d+\.|>) (\[.\] )?$/;
export const CLAUSE_DELIMITER_REGEX = /[,;:—]/
export const COMMA_DELIMITED_CLAUSE = /,.+?,/
