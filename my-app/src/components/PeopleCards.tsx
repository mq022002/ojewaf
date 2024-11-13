import React from "react";

interface PersonCardProps {
  name: string;
  age: number;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, age }) => {
  return (
    <div className="bg-blue-500 p-4 rounded shadow-md m-2">
      <div className="text-sm font-bold">{name}</div>
      <div className="text-sm">Age: {age}</div>
    </div>
  );
};

const PeopleCards = () => {
  return (
    <div className="p-4">
      <PersonCard name="Alice" age={30} />
      <PersonCard name="Bob" age={25} />
      <PersonCard name="Charlie" age={20} />
    </div>
  );
};

export default PeopleCards;
