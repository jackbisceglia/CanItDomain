"use client";

import handle, { ValidEnding } from "./etc/handle";

import ShowEndings from "./etc/ShowEndings";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useState } from "react";

const Form = ({
  serverAction,
}: {
  serverAction: (formData: FormData) => Promise<void>;
}) => {
  const [input, setInput] = useState<string>("");

  return (
    <form
      action={async (formData: FormData) => {
        await serverAction(formData);
        setInput("");
      }}
      className="flex flex-col w-full gap-4 py-12 text-left"
    >
      <h2 className="text-xl font-normal sm:text-2xl">Enter Your Term</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="domain name here"
        name="term"
        id=""
        className="px-6 py-3 text-base font-normal rounded-lg sm:text-lg text-fog-100 bg-fog-800"
      />
      <button
        disabled={!input.length}
        type="submit"
        className="p-2 text-base font-semibold transition-all duration-300 border rounded-lg sm:text-lg disabled:cursor-not-allowed disabled:hover:bg-rose-500 disabled:hover:text-fog-900 text-fog-900 border-rose-500 bg-rose-500 hover:bg-rose-950 hover:text-fog-50"
      >
        Submit
      </button>
    </form>
  );
};

export default function Home() {
  const [domainEndings, setDomainEndings] = useState<ValidEnding[]>([]);
  const [hasBeenFetched, setHasBeenFetched] = useState<boolean>(false);

  const handleWrapper = async (formData: FormData) => {
    const data = await handle(formData);

    if (!data) return;
    if (!hasBeenFetched) setHasBeenFetched(true);
    if (!formData.get("term")) return;

    setDomainEndings(data);
  };

  return (
    <>
      <Form serverAction={handleWrapper} />
      {hasBeenFetched && <ShowEndings endings={domainEndings} />}
    </>
  );
}
