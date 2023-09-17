import GogoleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import { FirestoreAdapter } from "@auth/firebase-adapter";

import {
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
} from "@/utils/environments";
import { cert } from "firebase-admin/app";

export const options: any = {
  // Configure one or more authentication providers
  providers: [
    GogoleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),

    // ...add more providers here
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: FIREBASE_PROJECT_ID,
      clientEmail: FIREBASE_CLIENT_EMAIL,
      privateKey: FIREBASE_PRIVATE_KEY,
    }),
  }),
};
