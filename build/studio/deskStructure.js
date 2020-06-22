import S from '@sanity/desk-tool/structure-builder'
import { MdHome, MdDeveloperBoard, MdAccountCircle } from 'react-icons/lib/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['home', 'projects', 'about'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .icon(MdHome)
        .child(
          S.editor()
            .id('home')
            .schemaType('home')
            .documentId('home')
        ),
      S.listItem()
        .title('Projects')
        .icon(MdDeveloperBoard)
        .schemaType('projects')
        .child(S.documentTypeList('projects').title('Project')),
      S.listItem()
        .title('About')
        .icon(MdAccountCircle)
        .schemaType('about')
        .child(
          S.editor()
            .id('about')
            .schemaType('about')
            .documentId('about')
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
