import Markdown from "@/components/Markdown";
import { getTodo } from "@/features/pc/applications/todo/functions";
import { useQuery } from "@tanstack/react-query";

const TODO = () => {
  const {
    data: todo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todo"],
    queryFn: getTodo,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading todo list</div>;
  if (!todo) return null;

  return <Markdown content={todo} />;
};

export default TODO;
