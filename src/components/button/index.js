import React from "react";

import { Button} from "./styles";

function componentButton({children, ...props}) {
  return <Button {...props}>{children}</Button>

}

export default componentButton;