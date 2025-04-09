import { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-l my-3 rounded-r-2xl  bg-zinc-900 border-blue-500 max-[896px]:rounded-2xl">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer py-4 px-4 text-[28px] max-[1000px]:text-[26px] max-[900px]:text-[24px] max-[800px]:text-[22px]  max-[700px]:text-[20px] max-[600px]:text-[18px] max-[500px]:text-[16px] max-[400px]:text-[14px]  bg-linear-to-r/srgb from-indigo-100 to-teal-200 bg-clip-text text-transparent   rounded "
            >
                {title}
            </div>
            {isOpen && (
                <div className="px-4 pb-4 text-gray-100 rounded text-4  max-[1000px]:text-[15px]  max-[800px]:text-[14px]   max-[600px]:text-[13px] max-[500px]:text-[12px] max-[400px]:text-[11px]">
                    {content}
                </div>
            )}
        </div>
    );
};

export default function App() {
    return (
        <div className="w-[61%] max-[896px]:mx-auto  max-[896px]:w-[90%]  mt-10">
            <Accordion
                title="1st one"
                content="Lorem ipsum odor amet, consectetuer adipiscing met vel  nostra aptent .Lorem ipsum odor amet, consectetuer elit. vel parturient nostra aptent. .Lorem ipsum odor amet, consectetuer  elit.   "
            />
            <Accordion
                title="2nd one"
                content="Lorem ipsum odor amet, consectetuer adipiscing met vel  nostra aptent .Lorem ipsum odor amet, consectetuer elit. vel parturient nostra aptent. .Lorem ipsum odor amet, consectetuer  elit.   "
            />
            <Accordion
                title="3rd one"
                content="Lorem ipsum odor amet, consectetuer adipiscing met vel  nostra aptent .Lorem ipsum odor amet, consectetuer elit. vel parturient nostra aptent. .Lorem ipsum odor amet, consectetuer  elit.   "
            />
        </div>
    );
}
