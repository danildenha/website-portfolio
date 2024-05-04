import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
      {skill}
    </div>
  );
};

export default SkillItem;
