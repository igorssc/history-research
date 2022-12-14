import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface VoteDescriptionCardProps {
  name: string;
  vote: "inFavor" | "against" | "noOpinion";
  date: Date;
  description: string;
}

// vote: "Contra" | "A favor" | "Não sei";
export const VoteDescriptionCard = ({
  name,
  date,
  vote,
  description,
}: VoteDescriptionCardProps) => {
  return (
    <div className="bg-black/70 hover:bg-black transition-colors flex flex-col rounded-xl p-4 md:p-7">
      <div className="flex flex-row justify-between items-center">
        <strong className="text-lg text-green-500 capitalize">
          {name.toLowerCase()}
        </strong>
        <span className="text-sm capitalize hidden md:block text-green-600 ">
          {format(date, "E' • 'd' de 'MMMM' de 'yyyy' • 'k'h'mm", {
            locale: ptBR,
          })}
        </span>
        <span className="text-xs capitalize block md:hidden text-green-600 ">
          {format(date, "d'/'MM'/'yyyy", {
            locale: ptBR,
          })}
        </span>
      </div>
      <span className="text-base my-2 text-green-600">
        {vote === "inFavor"
          ? "A favor"
          : vote === "against"
          ? "Contra"
          : vote === "noOpinion" && "Não sei"}
      </span>
      <div
        className="mt-5 text-justify text-sm"
        dangerouslySetInnerHTML={{ __html: description.replace("\n", "<br/>") }}
      ></div>
    </div>
  );
};
