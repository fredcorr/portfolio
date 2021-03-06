// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import settings from './documents/settings';
import projects from './documents/projects';
import about from './documents/about';
import home from './documents/home';

// Then import object types
import content_builder from './objects/content_builder';
import portable_text from './objects/portable_text';
import text_module from './objects/textModule';
import image_text from './objects/image_text';
import skillSet from './objects/skillSet';
import slider from './objects/slider';
import seo from './objects/seo.js';
import img from './objects/img';
import cta from './objects/cta';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    content_builder,
    portable_text,
    text_module,
    image_text,
    projects,
    skillSet,
    settings,
    slider,
    about,
    img,
    seo,
    cta,
    home
  ])
})
