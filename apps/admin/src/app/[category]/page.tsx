'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import styled from '@emotion/styled';

import {
  Category,
  Header,
  Banner,
  PostList,
  PostListHeader,
  GalleryList,
  PaginationController,
} from 'admin/components';

import { useGetPostList } from 'api/client';

const categoryParamsArray = ['', 'newsletter', 'gallery'] as const;

const categoryQueryString = {
  newsletter: 'FAMILY_NEWSLETTER',
  gallery: 'EVENT_GALLERY',
} as const;

type CategoryParamsType = keyof typeof categoryQueryString;

interface ListPageProps {
  params: { category: CategoryParamsType };
}

export default function ListPage({ params: { category } }: ListPageProps) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const pageNumber = Number(searchParams.get('pageNumber') ?? '1');

  const { data } = useGetPostList(
    categoryQueryString[category],
    pageNumber - 1
  );

  if (!categoryParamsArray.includes(category)) {
    replace('/');
  }

  if (Number.isNaN(pageNumber) || pageNumber < 1) {
    replace(`/${category}`);
  }

  return (
    <>
      <Header />
      <Banner />
      <ContentWrapper>
        <Category category={category} />
        <PostListHeader category={category} marginTop='3rem' />
        {category === 'gallery' ? (
          <GalleryList postList={data?.postList ?? []} />
        ) : (
          <PostList postList={data?.postList ?? []} />
        )}
        {(data?.totalPages ?? 0) > 1 && (
          <PaginationController
            pageNumber={pageNumber}
            totalPages={data?.totalPages ?? 0}
          />
        )}
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2.5rem;
  padding-bottom: 5rem;
`;

// it's not working in client component

// export function generateStaticParams() {
//   return [{ category: "newsletter" }, { category: "gallery" }];
// }

// export const dynamicParams = false;
