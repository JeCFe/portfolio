import {
  Azure,
  CSharp,
  Cypress,
  Docker,
  Dotnet,
  Git,
  Jest,
  Js,
  Next,
  React,
  SQLServer,
  Tailwind,
  Ts,
  VSCode,
  XUnit,
} from "@/assets";
import { Glow } from "@codaworks/react-glow";
import { cva } from "class-variance-authority";

const logo = cva("w-24 h-24");

export function Proficiencies() {
  return (
    <Glow>
      <div className="flex w-full flex-col items-center justify-center space-y-12 bg-gradient-to-b from-slate-900 to-pink-900  py-12 glow:from-slate-700/50  glow:to-pink-500/50">
        <div className="text-5xl font-bold text-white md:text-7xl">
          Proficiencies
        </div>
        <div className="container grid w-full grid-cols-3 flex-row items-center justify-between justify-items-center gap-5 md:flex">
          <CSharp className={logo()} />
          <Dotnet className={logo()} />
          <Ts className={logo()} />
          <Js className={logo()} />
          <Next className={`${logo()} fill-white`} />
          <Cypress className={logo()} />
          <XUnit className={logo()} />
          <Jest className={logo()} /> <Docker className={logo()} />
          <Git className={logo()} />
          <React className={logo()} />
          <Tailwind className={logo()} />
          <SQLServer className={`${logo()} fill-white`} />
          <Azure className={logo()} />
          <VSCode className={logo()} />
        </div>
      </div>
    </Glow>
  );
}
