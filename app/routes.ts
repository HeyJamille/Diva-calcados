// routes.ts
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/pages/home.tsx"),
  route("/produtos/langeries", "routes/pages/langeries.tsx"),

] satisfies RouteConfig;
