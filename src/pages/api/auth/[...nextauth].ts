import NextAuth, { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'


// https://grafbase.com/guides/how-to-build-a-real-time-chat-app-with-nextjs-graphql-and-server-sent-events

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
}

export default NextAuth(authOptions)
