import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)
  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    console.log(links)
  }, [page, location, links])
  return (
    <aside ref={container} className={`${isSubMenu ? "submenu show" : "submenu"}`}>
      <h4>{page}</h4>
      <div className={`${links.length > 4} ? submenu-center col-4 : submenu-center col-${links.length}`}>
          {links.map((link,index) => {
              const {url,icon,label} = link
              return(
                  <a key={index} href={url}>
                      {icon}
                      {label}
                  </a>
              )
          })}
      </div>
    </aside>
  );
}

export default Submenu
