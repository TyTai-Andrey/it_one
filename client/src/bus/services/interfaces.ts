export type ServiceModel = {
  id: string;
  name: string;
  price: number;
  content: string;
};

export type WithHandlers<T> = {
  onSuccess?: (data?: any) => void;
  onError?: () => void;
} & T;
