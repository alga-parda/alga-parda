import Main from "@/components/Main";

export default function Home() {

  return (
      <Main>
        <div className="absolute top-56 ml-64 flex flex-row">
          <div className="bg-cyan-700 h-[640px] w-[320px] hover:cursor-pointer">
            hello
          </div>

          <div className="grid grid-cols-2 ml-12 gap-10">
            <div className="w-[300px] h-[300px] bg-cyan-300 hover:cursor-pointer">1</div>
            <div className="w-[300px] h-[300px] bg-cyan-300 hover:cursor-pointer">2</div>
            <div className="w-[300px] h-[300px] bg-cyan-300 hover:cursor-pointer">3</div>
            <div className="w-[300px] h-[300px] bg-cyan-300 hover:cursor-pointer">4</div>
          </div>
        </div>
      </Main>
  );
}
