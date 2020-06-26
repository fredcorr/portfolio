// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import projects from './documents/projects';
import about from './documents/about';
import home from './documents/home';

// Then import object types
import single_column from './objects/single_column';
import creative_step from './objects/creative_step';
import singleSkill from './objects/singleSkill';
import image_text from './objects/image_text';
import skillSet from './objects/skillSet';
import seo from './objects/seo.js';
import cta from './objects/cta';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    creative_step,
    single_column,
    singleSkill,
    image_text,
    projects,
    skillSet,
    about,
    seo,
    cta,
    home
  ])
})
