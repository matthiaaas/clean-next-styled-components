import styled from "styled-components"

import { subscribePopup } from "@/utils/popup"

const Popup = subscribePopup("popup:newsletter", () => {
  console.log("rendered popup")

  return <Wrapper>hello</Wrapper>
})

export default Popup

const Wrapper = styled.div``
