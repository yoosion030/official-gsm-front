import { useQuery } from '@tanstack/react-query';

import type { PostCategoryType, PostListType } from 'api/client';
import { get, postQueryKeys, postUrl } from 'api/client';

export const useGetPostList = (
  category: PostCategoryType,
  pageNumber: number
) =>
  useQuery(
    postQueryKeys.getPostList(category, pageNumber),
    () => get<PostListType>(postUrl.postList(category, pageNumber)),
    {
      cacheTime: Infinity,
      staleTime: Infinity,
      keepPreviousData: true,
    }
  );
