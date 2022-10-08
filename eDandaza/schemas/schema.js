// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
      {
        title:'Products',
        name:'products',
        type:'document',
        fields:[
          {
            title:'Product Name',
            name:'productName',
            type:'string',
            validation : Rule => Rule.required()
          },
          {
            title:'Price',
            name:'productPrice',
            type:'number',
            validation : Rule => Rule.required()
          },
          {
            title:'Image',
            name:'productImage',
            type:'image',
            validation : Rule => Rule.required()
          },
          {
            title:'Description',
            name:'productDescription',
            type:'string',
            validation : Rule => Rule.required()
          },
   
        ]
      }
  ]),
})