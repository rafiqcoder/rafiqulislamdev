import { createClient } from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
let projectId = "qomearep";
let dataset = 'production'
let token =
    "sk9KfHRihRuMHxD5SIUOVyqzJ9pXPMOGPT2R2V1xcmdr03nAjcfrmXqVEYsbOi64lmhCOxIC9NnR03jiis95S68zGM2e605Sibrlk7dnEedDtxQMVe6csGRcWln2iKZqNkelhj58ql3hYTRn2P1R3aAnWkJrpRstXOD20vfEicAB6vs1bGsK";
let query = `*[_type == "page"]{
  pageBuilder[]{
    _type == "hero" => {
      _type,
      heading,
      tagline,
      image
    },
  },
}`; 


export const client = createClient({
    projectId: 'qomearep',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-11-11', // use current date (YYYY-MM-DD) to target the latest API version
    token:"sk9KfHRihRuMHxD5SIUOVyqzJ9pXPMOGPT2R2V1xcmdr03nAjcfrmXqVEYsbOi64lmhCOxIC9NnR03jiis95S68zGM2e605Sibrlk7dnEedDtxQMVe6csGRcWln2iKZqNkelhj58ql3hYTRn2P1R3aAnWkJrpRstXOD20vfEicAB6vs1bGsK"
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
    const posts = await client.fetch('*[_type == "page"]')
    return posts
}

// export async function createPost(post: Post) {
//     const result = client.create(post)
//     return result
// }

// export async function updateDocumentTitle(_id,title) {
//     const result = client.patch(_id).set({ title })
//     return result
// }