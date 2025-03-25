import { Icon, IconSize } from "@/types/icons";
import { getIconSource } from "@/utils/functions";
import { useMemo } from "react";

interface UseIconProps {
  name: string;
  size: IconSize;
  variants?: Partial<Record<IconSize, string>>;
  extension?: Icon["extension"];
}

interface UseIconResult {
  src: string | null;
  isLoading: boolean;
  error: Error | null;
}

const useIcon = ({
  name,
  size,
  variants,
  extension,
}: UseIconProps): UseIconResult => {
  const result = useMemo(() => {
    try {
      const iconSrc = getIconSource({ name, size, variants, extension });
      return { src: iconSrc, isLoading: false, error: null };
    } catch (err) {
      return { src: null, isLoading: false, error: err as Error };
    }
  }, [name, size, variants, extension]);

  return result;
};

export default useIcon;
