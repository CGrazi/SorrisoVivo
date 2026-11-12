import type { ComponentType } from "react";
import IndexPage from "@/pages/Index";
import EspecialidadesPage from "@/pages/Especialidades";
import CorpoClinicoPage from "@/pages/CorpoClinico";
import AgendarPage from "@/pages/Agendar";

/** Every page of the site. The menu (src/content/site.ts) links to these paths. */
export const routes: { path: string; name: string; Page: ComponentType }[] = [
  { path: "/", name: "Sorriso Vivo", Page: IndexPage },
  { path: "/especialidades", name: "Serviços", Page: EspecialidadesPage },
  { path: "/corpo-clinico", name: "Corpo clínico", Page: CorpoClinicoPage },
  { path: "/agendar", name: "Agendar", Page: AgendarPage },
];
