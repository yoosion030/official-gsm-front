import { useQuery } from '@tanstack/react-query';

import type { UnapproveListType } from 'api/admin';
import { get, approveQueryKeys, approveUrl } from 'api/admin';

export const useGetUnapproveList = () =>
  useQuery(approveQueryKeys.getUnapproveList(), () =>
    get<UnapproveListType[]>(approveUrl.unapproveList())
  );
