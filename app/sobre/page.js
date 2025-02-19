import Main from "@/components/Main";

export const metadata = {
    title: "alga parda · sobre"
}

export default function Sobre() {
    return (
        <Main>
            <div className="absolute top-56 max-w-screen-xl ml-36 overflow-x-scroll">
                <div className="flex gap-10 whitespace-nowrap px-4">
                    <div className="bg-cyan-700 h-[640px] w-[300px] flex-shrink-0"></div>
                    <div className="bg-cyan-700 h-[640px] w-[300px] flex-shrink-0"></div>
                    <div className="bg-cyan-700 h-[640px] w-[300px] flex-shrink-0"></div>
                    <div className="bg-cyan-700 h-[640px] w-[300px] flex-shrink-0"></div>
                    <div className="bg-cyan-700 h-[640px] w-[300px] flex-shrink-0"></div>
                    <div className="bg-cyan-700 h-[640px] w-[300px] flex-shrink-0"></div>
                </div>
            </div>
        </Main>
    );
}
