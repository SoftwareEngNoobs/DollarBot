import { Button } from "../components/ui/button";
import {
  Card,
  Container,
  AbsoluteCenter,
  HStack,
  Input,
  Stack,
  Center,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { PasswordInput } from "../components/ui/password-input";
import { useState } from "react";

const Signup = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Container>
        <Flex justifyContent="flex-start" color="black">
          <Text
            color="teal"
            textStyle="3xl"
            fontWeight="bold"
            margin="12px 90px 0 0"
          >
            Dollar Bot
          </Text>
          <Link
            color="black"
            textStyle="lg"
            href="/"
            fontWeight="medium"
            margin="18px 35px 0 0"
          >
            Sign In
          </Link>
          <Link
            color="black"
            textStyle="lg"
            fontWeight="medium"
            margin="18px 35px 0 0"
          >
            About
          </Link>
          <Link
            color="black"
            textStyle="lg"
            fontWeight="medium"
            margin="18px 35px 0 0"
          >
            Help
          </Link>
        </Flex>
      </Container>
      <AbsoluteCenter alignContent="center" axis="both">
        <Card.Root maxW="sm" margin="0 100" colorPalette="teal" shadow="lg">
          <Card.Header>
            <Card.Title>Sign up</Card.Title>
            <Card.Description>
              Fill in the form below to create an account
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack gap="4" w="full">
              <Field label="Email">
                <Input />
              </Field>
              <Field label="Password">
                <PasswordInput visible={visible} onVisibleChange={setVisible} />
              </Field>
              <Link href="/signin" colorScheme="teal" fontSize="sm" fontWeight="medium">Already Have An Account?</Link>
            </Stack>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button variant="outline">Cancel</Button>
            <Button variant="solid">Sign in</Button>
          </Card.Footer>
        </Card.Root>
      </AbsoluteCenter>
    </div>
  );
};

export default Signup;
