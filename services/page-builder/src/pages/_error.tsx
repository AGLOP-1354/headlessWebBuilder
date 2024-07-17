import { Flex, Heading } from "@headless-web-builder/react-components-layout";

const ErrorPage = () => (
  <div className="w-screen h-screen flx justify-center">
    <Flex className="pt-[200px]" direction="column" align="center">
      <Heading fontSize="2xl">Not Found</Heading>
    </Flex>
  </div>
)

export default ErrorPage;
