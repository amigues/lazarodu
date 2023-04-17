import React, { Dispatch, SetStateAction, useState } from "react";
import { Pagina1 } from "./src/screens/Pagina1"
import { Pagina2 } from "./src/screens/Pagina2"

export interface Ipage{
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)
  return (
    <>
      {page == 1 ? <Pagina1 setPageI={setPage}/> : <Pagina2 setPageI={setPage}/>}
    </>
  );
}
