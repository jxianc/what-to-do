import { Button, HStack, Spacer } from "@chakra-ui/react";
import { InferGetServerSidePropsType } from "next";
import NextLink from "next/link";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Activity } from "../components/Activity";
import { BrowserHead } from "../components/BrowserHead";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { DataType } from "../utils/DataType";

const random = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Container>
      <BrowserHead title="Random" />
      <Header />
      <Activity data={data} />
      <HStack mt={10}>
        <NextLink href="/">
          <Button shadow="md" leftIcon={<BsChevronLeft />}>
            Back
          </Button>
        </NextLink>
        <Spacer />
        <NextLink href="/random">
          <Button shadow="md" colorScheme="teal">
            Another activity
          </Button>
        </NextLink>
      </HStack>
    </Container>
  );
};

export default random;

export async function getServerSideProps() {
  const req = await fetch("http://www.boredapi.com/api/activity/", {
    method: "GET",
  });
  const data: DataType = await req.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
