import ShowEndings from "./etc/ShowEndings";
import { allDomainEndings } from "./etc/allEndings";
import { redirect } from "next/navigation";

export type ValidEnding = {
  ending: string;
  termAsDomain: string;
};

type State = {
  domains: ValidEnding[];
  formSubmitted: boolean;
};

const state: State = {
  domains: [],
  formSubmitted: false,
};

const trimDot = (end: string) => end.slice(1);

const findValidEndingsByTerm = (term: string) => {
  return allDomainEndings.filter((currentEnding) => {
    const currentEndingNoDot = trimDot(currentEnding);

    const termEnding = term?.slice(term.length - currentEndingNoDot.length);

    return termEnding === currentEndingNoDot;
  });
};

const handle = async (formData: FormData) => {
  "use server";
  const inputTerm = formData.get("term")?.toString();

  if (!inputTerm) return;

  const validEndings = findValidEndingsByTerm(inputTerm);

  const formatted = validEndings.map((validEnding) => {
    return {
      ending: validEnding,
      termAsDomain:
        inputTerm?.slice(0, inputTerm.length - trimDot(validEnding).length) +
        validEnding,
    };
  });

  state.domains = [...formatted];
  state.formSubmitted = true;
  redirect("/");
};

export default function Home() {
  return (
    <>
      <form
        action={handle}
        className="flex flex-col w-full gap-4 py-12 text-left"
      >
        <h2 className="text-2xl font-normal">Enter Your Term</h2>
        <input
          type="text"
          placeholder="canitdomain"
          name="term"
          id=""
          className="px-6 py-3 text-lg font-normal rounded-lg text-fog-100 bg-fog-800"
        />
        <button
          // type="submit"
          className="p-2 text-lg font-semibold transition-all duration-300 border rounded-lg text-fog-900 border-rose-500 bg-rose-500 hover:bg-rose-950 hover:text-fog-50"
        >
          Submit
        </button>
      </form>
      {state.formSubmitted && <ShowEndings endings={state.domains} />}
    </>
  );
}
