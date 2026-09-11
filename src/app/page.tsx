import HubShell from "@/components/hub/HubShell";
import HomeContent from "@/components/hub/HomeContent";
import { projects, soonProjects } from "@/lib/projects";

export default function HomePage() {
  return (
    <HubShell>
      <HomeContent projects={projects} soonProjects={soonProjects} />
    </HubShell>
  );
}
