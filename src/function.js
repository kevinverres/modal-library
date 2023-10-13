import React from 'react'

export const ModalFunction = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen)
  }
  return {isOpen, toggle};
}