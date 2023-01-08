import React, { Suspense } from "react"
import Preloader from "./Preloader"

export const SuspenseWrapper = ({component}) => {
  return <Suspense fallback={<Preloader />}>
    { component }
  </Suspense>
}