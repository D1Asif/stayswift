import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Credentials from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./database/mongoClientPromise"
import { userModel } from "./models/user-model"
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt'
    },
    providers: [
        Google,
        Facebook,
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                if (credentials === null) return null;

                try {
                    const user = await userModel.findOne({email: credentials?.email});

                    if (user) {
                        const isMatch = await bcrypt.compare(credentials.password, user.password)
                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Email or password mismatch");
                        }
                    } else {
                        throw new Error("User not found")
                    }
                } catch(err) {
                    throw err;
                }
            }
        })
    ],
})