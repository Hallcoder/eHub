export default {
    title:'Products',
    name:'product',
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
       title:'Category',
       name:'productCategory',
       type:'string',
       validation: Rule => Rule.required()
      },
      {
        title:'Description',
        name:'productDescription',
        type:'string',
        validation : Rule => Rule.required()
      },
    ]
}
