import { objectType } from 'nexus'

import { extendType } from 'nexus'

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.string('id')
    t.string('title')
    t.string('body')
    t.boolean('archive')
  }
})

export const PostQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('drafts', {
      type: 'Post',
      resolve() {
        return [{ id: '890814bf-f603-490f-8727-32f23bea21c8', title: 'AAA', body: 'BBB', archive: false }]
      }
    })
  }
})
