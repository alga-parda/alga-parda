import Main from "@/components/Main";

export default function Home() {

  return (
      <Main>
        <div className="absolute top-56 ml-64 pb-16 flex flex-row">
          <div className="bg-cyan-700 h-[640px] w-[320px]">
            hello
          </div>

          <div className="grid grid-cols-2 ml-12 gap-10">
            <div className="w-[300px] h-[300px] bg-cyan-300">1</div>
            <div className="w-[300px] h-[300px] bg-cyan-300">2</div>
            <div className="w-[300px] h-[300px] bg-cyan-300">3</div>
            <div className="w-[300px] h-[300px] bg-cyan-300">4</div>
          </div>
        </div>
      </Main>
  );
}
