import { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-l my-3 rounded-r-lg  bg-zinc-900 border-blue-500">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer py-4 px-4 text-[28px] ffont-bold bg-linear-to-r/srgb from-indigo-100 to-teal-200 bg-clip-text text-transparent   rounded "
            >
                {title}
            </div>
            {isOpen && (
                <div className="px-4 pb-4 text-gray-100 rounded text-4 ">
                    {content}
                </div>
            )}
        </div>
    );
};

export default function App() {
    return (
        <div className="max-w-[614px]  mt-10">
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
