# modal-library-kv

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/modal-library-kv.svg)](https://www.npmjs.com/package/modal-library-kv) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install modal-library-kv
```

## Usage

```jsx
import React from 'react'

import { Modal } from 'modal-library-kv'
import 'modal-library-kv/dist/index.css'
import { useEffect, useState } from "react";

export default function Component() {
  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    if (openModal) {
      window.addEventListener('click', () => setOpenModal(false));
      return () => window.removeEventListener('click', () => setOpenModal(false));
    }
  });
  return (
    <>
      {openModal ? <Modal /> : null}
    </>
  )
}
```

## License

MIT © [kevinverres](https://github.com/kevinverres)
