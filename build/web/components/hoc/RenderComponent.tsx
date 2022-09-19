import ImageComponent from '_organism/ImageComponent/ImageComponent'
import { Components, ComponentsTypeName } from '_types/sanity'
import ImageTextBox from '_organism/ImageTextBox/ImageTextBox'
import TextColumn from '_organism/TextColumn/TextColumn'
import Slider from '_organism/Slider/Slider'

const RenderComponet = (data: Components) => {
  switch (data._type) {
    case ComponentsTypeName.IMAGE_TEXT:
      return <ImageTextBox {...data} />

    case ComponentsTypeName.TEXT_MODULE:
      return <TextColumn {...data} />

    case ComponentsTypeName.IMAGE:
      return <ImageComponent {...data} />

    case ComponentsTypeName.SLIDER:
      return <Slider {...data} />

    default:
      return null
  }
}

export default RenderComponet
