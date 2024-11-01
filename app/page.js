import Main from "@/components/Main";

export default function Home() {
  return (
      <Main>
        <div className="absolute top-52 pb-16 flex flex-row">
          <div className="bg-cyan-700 h-[676px] w-[300px]">
            hellooooo
          </div>

          <div className="grid grid-cols-2 ml-6 gap-4">
            <div className="w-[330px] h-[330px] bg-cyan-300">1</div>
            <div className="w-[330px] h-[330px] bg-cyan-300">2</div>
            <div className="w-[330px] h-[330px] bg-cyan-300">3</div>
            <div className="w-[330px] h-[330px] bg-cyan-300">4</div>
          </div>
        </div>
      </Main>
  );
}
