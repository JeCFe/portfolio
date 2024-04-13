import { projectData } from "@/data";
import { Anchor, Pill, Timeline } from "@jecfe/react-design-system";
import { TimelineItem } from "@jecfe/react-design-system/dist/cjs/components/timeline";
import { NavArrow } from "..";
import { Glow, GlowCapture } from "@codaworks/react-glow";

export function Projects() {
  const renderableContent: TimelineItem[] = projectData.map(
    (project): TimelineItem => ({
      children: (
        <div className="w-full">
          <div className="flex w-full flex-wrap space-x-3 pb-2">
            {project.pills.map((pill, index) => (
              <Pill
                size="medium"
                type="info"
                key={`${project.subheading}-${pill}-${index}`}
              >
                {pill}
              </Pill>
            ))}
          </div>

          <h3 className="text-xl font-bold">{project.heading}</h3>
          <h4 className="text-lg">{project.subheading}</h4>
          <div className="space-y-4">
            <p>{project.body}</p>
            {project.hrefs.map((href, index) => (
              <Anchor
                key={`${project.subheading}-${href.name}-${index}`}
                href={href.href}
                target="_blank"
              >
                {href.name}
              </Anchor>
            ))}
          </div>
        </div>
      ),
    }),
  );
  return (
    <GlowCapture>
      <Glow>
        <div
          className="min-h-screen w-full bg-pink-900 text-white"
          id="projects"
        >
          <NavArrow direction="up" id="home" />
          <div className="flex w-full flex-col items-center justify-center pb-40 pt-20 font-bold">
            <h1 className="flex w-full items-center justify-center pb-12 text-center text-5xl md:text-7xl">
              Projects
            </h1>
            <div className="flex w-1/2 text-center text-2xl font-light">
              {`I have worked on numerours projects over the years, here are some that are available via my Github.`}
            </div>
          </div>

          <Timeline lineColour="black" items={renderableContent} />
        </div>
      </Glow>
    </GlowCapture>
  );
}