"use server";

import { allDomainEndings } from "./allEndings";

const trimDot = (term: string) => term.slice(1);

export type ValidEnding = {
  ending: string;
  termAsDomain: string;
};

const findValidEndingsByTerm = (term: string) => {
  return allDomainEndings.filter((currentEnding) => {
    const currentEndingNoDot = trimDot(currentEnding);
    const termEnding = term?.slice(term.length - currentEndingNoDot.length);

    if (term.length <= currentEndingNoDot.length) return false;

    return termEnding === currentEndingNoDot;
  });
};

const handle = async (formData: FormData) => {
  const inputTerm = formData.get("term")?.toString();

  if (!inputTerm) return;

  const validEndings = findValidEndingsByTerm(inputTerm);

  return validEndings.map((validEnding) => {
    return {
      ending: validEnding,
      termAsDomain:
        inputTerm?.slice(0, inputTerm.length - trimDot(validEnding).length) +
        validEnding,
    };
  });
};

export default handle;
