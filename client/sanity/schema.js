import { about } from "./lib/schemaTypes/about";
import { services } from "./lib/schemaTypes/services";
import { home } from "./lib/schemaTypes/home";
import { socials } from "./lib/schemaTypes/socials";
import { players } from "./lib/schemaTypes/players";

export const schema = {
  types: [home, about, services, players, socials],
};
