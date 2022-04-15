import getUser from "../api/getUser";

export const withAuth = (getServerSideProps) => {
  return async (context) => {
    const user = await getUser();

    if (!user) {
      return {
        redirect: {
          destination: "/login",
          statusCode: 302,
        },
      };
    }
    context.user = user.name;

    return await getServerSideProps(context);
  };
};
