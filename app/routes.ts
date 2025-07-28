// routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/pages/home.tsx"),
  route("/produtos/lingeries", "routes/pages/lingeries.tsx"),
  route("/produtos/sandalias", "routes/pages/sandalias.tsx"),
  route("/produtos/roupas-bebe", "routes/pages/roupas-bebe.tsx"),
  route("/produtos/bolsas", "routes/pages/bolsas.tsx"),

] satisfies RouteConfig;
