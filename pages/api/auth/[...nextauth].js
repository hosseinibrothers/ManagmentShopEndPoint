import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'

const providers = [
    CredentialsProvider({
        name: 'Credentials',
        // authorize: async (credentials) => {
        //     const user = await axios.post('https://myapi.com/login',
        //         {
        //             user: {
        //                 password: credentials.password,
        //                 email: credentials.email
        //             }
        //         },
        //         {
        //             headers: {
        //                 accept: '*/*',
        //                 'Content-Type': 'application/json'
        //             }
        //         })
        //
        //     if (user) {
        //         return user
        //     } else {
        //         return null
        //     }
        // },
        async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

            if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
            } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null

                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
        }
    })
]

const callbacks = {
    // Getting the JWT token from API response
    async jwt(token, user) {
        if (user) {
            token.accessToken = user.token
        }

        return token
    },

    async session(session, token) {
        session.accessToken = token.accessToken
        return session
    }
}

const options = {
    providers,
    callbacks
}

export default (req, res) => NextAuth(req, res, options)
