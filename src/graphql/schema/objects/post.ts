import { nonNull, objectType, stringArg } from 'nexus'
import { v4 } from 'uuid'

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
    t.nonNull.list.field('allPosts', {
      type: 'Post',
      resolve(_root, _args, ctx) {
        return ctx.db.posts
      }
    })
  }
})

export const PostMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createPost', {
      type: 'Post',
      args: {
        title: nonNull(stringArg()),
        body: nonNull(stringArg())
      },
      resolve(_root, args, ctx) {
        const newPost = {
          id: v4(),
          title: args.title,
          body: args.body,
          archive: false
        }
        ctx.db.posts.push(newPost)
        return newPost
      }
    })
  }
})
