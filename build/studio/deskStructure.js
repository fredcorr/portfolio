import S from '@sanity/desk-tool/structure-builder'
import { MdHome, MdDeveloperBoard, MdAccountCircle } from 'react-icons/md'
import { BsGearWideConnected } from 'react-icons/bs'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['home', 'projects', 'about', 'settings'].includes(listItem.getId())

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
        S.listItem()
        .title('Settings')
        .icon(BsGearWideConnected)
        .schemaType('settings')
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings')
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
