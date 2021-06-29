import React from "react";

interface Props {
  team: string;
  award: string;
}
export const Award: React.FC<Props> = (props: Props) => {
  return (
    <div className="award">
      <h3>{props.team}</h3>
      <h5>{props.award}</h5>
    </div>
  );
};
