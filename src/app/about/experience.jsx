import React from "react";

const ExperienceItem = ({ title, description, date, company, align }) => {
    return (
        <div className={`flex justify-between h-48 ${align === "left" ? "" : "flex-row-reverse"}`}>
            {/* LEFT */}
            <div className="w-2/5"> {/* Adjusted width to 2/5 */}
                {/* JOB TITLE */}
                <div className="bg-blue-50 p-3 font-semibold text-yellow-600 rounded-lg">
                    {title}
                </div>
                {/* JOB COMPANY */}
                <div className="mt-1 p-1 rounded border border-amber-200 text-sm font-bold w-fit">
                    {company}
                </div>
                {/* JOB DESC */}
                <div className="pt-2 px-1 text-gray-600 text-sm">{description}</div>
                {/* JOB DATE */}
                <div className="pt-2 text-gray-900 text-sm font-semibold">{date}</div>
            </div>
            {/* CENTER */}
            <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-800 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-500 bg-white -left-2"></div>
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-2/5 "></div> {/* Adjusted width to 2/5 */}
        </div>
    );

};

export default ExperienceItem;
