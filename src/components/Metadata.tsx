import { Helmet } from "react-helmet-async";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

const Metadata = ({ title, description = "waveOSPX", image, url }: Props) => (
  <Helmet>
    <title>{title ? `${title} ▪ ` : ""}waveOSPX</title>
    <meta
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      name="viewport"
    />
    {description && <meta content={description} name="description" />}
    {image && <meta content={image} property="og:image" />}
    {url && <meta content={url} property="og:url" />}
  </Helmet>
);

export default Metadata;
