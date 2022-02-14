import "styled-components"

import type { TTheme } from "~/utils/theme"

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}
