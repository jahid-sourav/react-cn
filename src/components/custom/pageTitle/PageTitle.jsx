import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

function PageTitle({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${title} • Jahidul Islam`}</title>
      </Helmet>
    </HelmetProvider>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
