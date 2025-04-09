import InfoDisplayArea from "@/components/InfoDisplayArea";
import { getChangelog } from "@/features/pc/applications/Changelog/functions";
import { useQuery } from "@tanstack/react-query";

const Changelog = () => {
  const {
    data: changelogData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["changelog"],
    queryFn: getChangelog,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading changelog</div>;
  if (!changelogData) return null;

  return <InfoDisplayArea content={changelogData} />;
};

export default Changelog;
