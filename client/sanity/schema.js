import { about } from "./lib/schemaTypes/about"
import { services } from "./lib/schemaTypes/services"
import { home } from "./lib/schemaTypes/home"
import { socials } from "./lib/schemaTypes/socials"


export const schema = {
  types: [about, services, home, socials],
}
