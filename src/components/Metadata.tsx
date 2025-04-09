import { APP_DESCRIPTION, APP_NAME } from "@/utils/constants";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

const Metadata = ({
  title,
  description = APP_DESCRIPTION,
  image,
  url,
}: Props) => (
  <>
    <title>{title ? `${title} ▪ ${APP_NAME}` : APP_NAME}</title>
    <meta
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      name="viewport"
    />
    {description && <meta content={description} name="description" />}
    {image && <meta content={image} property="og:image" />}
    {url && <meta content={url} property="og:url" />}
  </>
);

export default Metadata;
