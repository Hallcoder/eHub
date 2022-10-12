import sanityClient from '@sanity/client';
import ImageUrlBuilder  from "@sanity/image-url";
export const client = sanityClient({
    projectId: "gh8jlhht",
    dataset: "production",
    apiVersion: 1,
    token:
      "skmaNHDkHW2IJm5vBl7SHnnG9Xmh4I8WlZXDNb2gjSrWMYrc14quhXVV7v3R686l6FqhpPxGHkrkROLFfh8i1J2XXU9TOxASs8Yg1RS6ybQkfZVyWiaRYsjOIxy1WfiLcKjihuLrgyZnFVFKhCJWFrBy60V0QY7eziyER2CywUhxUlqAZlBY",
    useCdn: false,
  });
  
  const builder = ImageUrlBuilder(client);
 export function buildImage(source){
    return builder.image(source);
  }