import { PageType, PageTypeNames } from "_types/sanity";
import Project from "_containers/Project/Project";
import Home from "_containers/HomePage/HomPage";
import About from "_containers/About/About";

const RenderContainer = (data: PageType) => {
  switch (data._type) {
    case PageTypeNames.HOME:
      return <Home {...data} />

    case PageTypeNames.PROJECT:
      return <Project {...data} />

    case PageTypeNames.ABOUT:
      return <About {...data} />

    default:
      return null
  }
}

export default RenderContainer