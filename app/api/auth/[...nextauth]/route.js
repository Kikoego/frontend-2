import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials : {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials, req) {
               
                
                const reqData = {
                    username: credentials.username,
                    password: credentials.password,
                    client_id: process.env.CLIENT_ID,
                    scope: "openid profile offline_access learning_api",
                    grant_type: "password"
                }
                
                let formBody = []
                for (let property in reqData) {
                    let encodedKey = encodeURIComponent(property)
                    let encodedValue = encodeURIComponent(reqData[property])
                    formBody.push(encodedKey + "=" + encodedValue)
                }

                const formBodyStr = formBody.join("&")
             
                // const res = axios.post(process.env.IDENTITY_BASE_URL + "connect/token", {
                //     body: formBodyStr,
                //     headers: {
                //         "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                //     },
                // })

                
                const res = await fetch(process.env.IDENTITY_BASE_URL + "connect/token", {
                    method: "POST",
                    body: formBodyStr,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                    },
                })
               
                // .then(function (res) {
                //     return res;
                // })

                // .catch(function (error) {
                //     console.log(error)
                //     return null;
                // })

                const response = await res.json()
                if (res.ok && response) {
                    console.log(res)
                    return response
                }
                else{
                    console.log(res.error)
                }

                return null
            },
        }),
    ],
    secret: process.env.SECRET,

    session : {
        strategy: "jwt",
    },

    jwt : {
        secret: process.env.SECRET,
    },

    // pages: {
    //     signIn: '/User/SignIn',
    // },

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (user?.access_token) {
              account.access_token = user.access_token 
            }
            if (user?.refresh_token) {
              account.refresh_token = user.refresh_token
            }
            return true
          },
          
          async jwt({ token, user, account, profile, isNewUser }) {
            if (account?.access_token) {
              token.access_token = account?.access_token
            }
      
            if (account?.refresh_token) {
              token.refresh_token = account?.refresh_token
            }
            return token
          },
        //   session: ({ session, token }) =>{
        //     if (token){
        //         session.user.username = token.username;
        //         session.user.id=token.id
        //     }
        //     return session;
        //   }
    }
})

export {handler as GET, handler as POST}