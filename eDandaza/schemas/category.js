export default {
    title:'Categories',
    name:'category',
    type:'document',
    fields:[
      {
        title:'Category Name',
        name:'categoryName',
        type:'string',
        validation : Rule => Rule.required()
      },
      {
        title:'Image',
        name:'categoryImage',
        type:'image',
        validation : Rule => Rule.required()
      },
      {
        title:'Description',
        name:'categoryDescription',
        type:'string',
        validation : Rule => Rule.required()
      },
    ]
}
