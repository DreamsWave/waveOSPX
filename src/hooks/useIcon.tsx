import { Icon, IconSize } from "@/types/icons";
import { getIconSource } from "@/utils/functions";
import { useEffect, useState } from "react";

interface UseIconProps {
  name: Icon["name"];
  size: IconSize;
  extension?: Icon["extension"];
}

interface UseIconResult {
  src: string | null;
  isLoading: boolean;
  error: Error | null;
}

export const useIcon = ({
  name,
  size,
  extension,
}: UseIconProps): UseIconResult => {
  const [state, setState] = useState<UseIconResult>({
    src: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const loadIcon = async () => {
      try {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));

        const iconSrc = await getIconSource({ name, size, extension });

        if (isMounted) {
          setState({
            src: iconSrc,
            isLoading: false,
            error: null,
          });
        }
      } catch (err) {
        if (isMounted) {
          setState({
            src: null,
            isLoading: false,
            error: err as Error,
          });
        }
      }
    };

    loadIcon();

    return () => {
      isMounted = false;
    };
  }, [name, size, extension]);

  return state;
};
