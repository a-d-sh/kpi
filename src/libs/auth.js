// Third-party Imports
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),

  // ** Configure one or more authentication providers

  providers: [
    {
      id: 'hemis',
      name: 'Hemis',
      type: 'oauth',
      authorization: {
        url: 'https://hemis.uzswlu.uz/oauth/authorize',
        params: { scope: '' },
      },
      token: 'https://hemis.uzswlu.uz/oauth/access-token',
      userinfo:
        'https://hemis.uzswlu.uz/oauth/api/user?fields=id,uuid,type,name,login,picture,email,university_id,phone,specialty',
      profile(profile) {
        // console.log('profile', profile)

        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          uuid: profile.uuid,
          university_id: profile.university_id,
          type: profile.type,
          employee_id_number: profile.employee_id_number,
          specialty: profile.specialty,
          login: profile.login,
          name: profile.name,
          firstname: profile.firstname,
          surname: profile.surname,
          patronymic: profile.patronymic,
          birth_date: profile.birth_date,
          phone: profile.phone,
          picture: profile.picture,
          roles: profile.roles,
        };
      },
      clientId: process.env.HEMIS_CLIENT_ID,
      clientSecret: process.env.HEMIS_CLIENT_SECRET,
    },

    // ** ...add more providers here
  ],

  // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options
  session: {
    /*
     * Choose how you want to save the user session.
     * The default is `jwt`, an encrypted JWT (JWE) stored in the session cookie.
     * If you use an `adapter` however, NextAuth default it to `database` instead.
     * You can still force a JWT session by explicitly defining `jwt`.
     * When using `database`, the session cookie will only contain a `sessionToken` value,
     * which is used to look up the session in the database.
     * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured).
     * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.
     */
    strategy: 'jwt',

    // ** Seconds - How long until an idle session expires and is no longer valid
    maxAge: 30 * 24 * 60 * 60, // ** 30 days
  },

  // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options
  pages: {
    signIn: '/login',
  },

  // ** Please refer to https://next-auth.js.org/configuration/options#callbacks for more `callbacks` options
  callbacks: {
    /*
     * While using `jwt` as a strategy, `jwt()` callback will be called before
     * the `session()` callback. So we have to add custom parameters in `token`
     * via `jwt()` callback to make them accessible in the `session()` callback
     */
    async jwt({ token, user }) {
      // console.log('jwt', token, user)

      if (user) {
        /*
         * For adding custom parameters to user in session, we first need to add those parameters
         * in token which then will be available in the `session()` callback
         */
        token.name = user.name;
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        const basePath = process.env.BASEPATH || '';
        session.user.basePath = basePath;
        // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
        session.user.name = token.name;
        session.user.id = token.id;

        // return session;
      }

      return session;
    },
  },
};
