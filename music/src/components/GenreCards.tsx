import React from "react";

interface GenreCardProps {
  name: string;
}

const GenreCard: React.FC<GenreCardProps> = ({ name }) => {
  return (
    <div className="bg-purple-400 shadow-md rounded p-4 mb-4">
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

const GenreCards = () => {
  return (
    <div className="p-4">
      <GenreCard name="RnB" />
      <GenreCard name="Indie" />
      <GenreCard name="Rock" />
    </div>
  );
};

export default GenreCards;
