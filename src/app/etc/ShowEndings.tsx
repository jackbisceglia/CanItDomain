import { ValidEnding } from "./handle";

const ShowEndings = ({ endings }: { endings: ValidEnding[] }) => {
  const titleContent = endings.length
    ? "Valid Domain Endings"
    : "No Domain Endings Found";
  const textColor = endings.length ? "text-fog-400" : "text-rose-400";

  return (
    <>
      <h2
        className={`${textColor} text-xl sm:text-2xl mb-2 underline underline-offset-4 font-extrabold`}
      >
        {titleContent}
      </h2>

      {endings.map((ending, idx) => (
        <div className="text-lg sm:text-xl" key={idx}>
          <p>
            <span className="font-extrabold">{ending.termAsDomain}</span> using
            the <span className="font-extrabold">{ending.ending}</span> ending
          </p>
        </div>
      ))}
    </>
  );
};

export default ShowEndings;
