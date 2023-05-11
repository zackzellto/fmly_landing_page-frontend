import React, { useState } from "react";

interface CollapsibleCardProps {
  title: string;
  content: string;
  backgroundColor: string;
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
  title,
  content,
  backgroundColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      onClick={toggleOpen}
      className={`cursor-pointer transform transition hover:scale-110 w-[73%] border max-w-md mx-auto rounded-xl shadow-2xl overflow-hidden md:max-w-2xl m-4 bg-${backgroundColor}`}
    >
      <div className="md:flex">
        <div className="p-8">
          <div className=" text-3xl text-center font-bold text-white">
            {title}
          </div>
          {isOpen && <p className="mt-2 text-gray-500">{content}</p>}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleCard;
