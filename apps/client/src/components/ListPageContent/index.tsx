'use client';

import { redirect } from 'next/navigation';

import styled from '@emotion/styled';

import { useGetPostList } from 'api/client';

import { categoryQueryString } from 'common';

import { PaginationController } from 'ui';

import type { CategoryType } from 'types';

import Category from './Category';
import GalleryList from './GalleryList';
import PostList from './PostList';
import Title from './Title';

interface ListPageContentProps {
  category: CategoryType;
  searchParams: { pageNumber: string };
}

export const PAGE_SIZE = 12;

const ListPageContent: React.FC<ListPageContentProps> = ({
  category,
  searchParams,
}) => {
  /** 1 ~ totalPages */
  const pageNumber = Number(searchParams.pageNumber ?? 1);

  const { data, isError } = useGetPostList(
    categoryQueryString[category],
    pageNumber,
    PAGE_SIZE
  );

  if (isError) {
    redirect(`/list/${category}`);
  }

  return (
    <Content>
      <Category categoryParam={category} />
      <Title category={category} />
      {categoryQueryString[category] === 'EVENT_GALLERY' ? (
        <GalleryList postList={data?.postList || []} />
      ) : (
        <PostList
          postList={data?.postList || []}
          totalElements={data?.totalElements ?? 0}
          pageNumber={pageNumber}
        />
      )}
      <PaginationController
        pageNumber={pageNumber}
        totalPages={data?.totalPages ?? 0}
      />
    </Content>
  );
};

export default ListPageContent;

const Content = styled.div`
  width: 77.5rem;
  margin: 0 auto;
  padding: 5rem 0 7.5rem;

  @media ${({ theme }) => theme.breakPoint['1440']} {
    width: calc(100vw - 7.5rem);
  }
`;