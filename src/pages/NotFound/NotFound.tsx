import { FC } from "react";

import { Helmet } from "react-helmet-async";

interface NotFoundProps {
  link?: string;
}

const NotFound: FC<NotFoundProps> = ({ link }) => (
  <>
    <Helmet title="Page Not Found" />
    <h1>Not Found</h1>
  </>
);

export default NotFound;
