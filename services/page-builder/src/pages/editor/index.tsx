import React from "react";
import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayut";
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayut/Nav";
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayut/Body";
import { Button } from "@headless-web-builder/react-components-button";
import Link from "next/link";
import { getViewList, ViewListResponseData } from "@/src/apis/worker/getViewList";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ViewList } from "@/src/components/EditorPage/ViewList";

const EditorPage = ({ keys }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log('keys', keys);
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav>
        <Link href="/editor/new">
          <Button size="md" color="green">페이지 만들기</Button>
        </Link>
      </DesktopFirstNav>
      <DesktopFirstBody justify="center" background="gray">
        <ViewList viewList={keys} />
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export default EditorPage;

export const getServerSideProps: GetServerSideProps<ViewListResponseData> = async () => {
  const response = await getViewList();

  return { props: response };
}
