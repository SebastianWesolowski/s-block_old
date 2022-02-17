# SLink

## Require

import Link from 'next/link'

## Usage

```tsx
import { SLink } from "s-block";

<SLink path={"/"} label={"Home"} />;
```

if the link pass to an external website source, use `target: "_blank",`

```jsx
<SLink path={"/"} label={"Home"} target={"_blank"} />
```

component return `a` element without nextJS routing:

````html
<a href="/" target="_blank" rel="noopener" class="css-12y6593"
  ><span
    class="MuiTypography-root MuiTypography-body2 css-rmdgqv-MuiTypography-root"
    >Home</span
  ></a
>```

<!-- ## TOOD

- [ ] ...
  - [ ] ...
  - [ ] ...
- [ ] ... -->
````
