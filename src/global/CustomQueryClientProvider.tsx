import { QueryClient, QueryClientProvider, QueryCache } from '@tanstack/react-query';
import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';

const CustomQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const { openToast } = useToast();

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        console.error(error);

        const message = query.meta?.errorMessage;
        if (!message) return;

        openToast(
          <ToastPop>
            <div>{message}</div>
          </ToastPop>
        );
      }
    })
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default CustomQueryClientProvider;
