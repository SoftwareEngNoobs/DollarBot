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
  Table,
  ActionBarContent,
  ActionBarRoot,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
  createListCollection,
  Kbd,
  Box,
} from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { Checkbox } from "../components/ui/checkbox";
import { PasswordInput } from "../components/ui/password-input";
import { useState } from "react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../components/ui/select";
import React from "react";
import AddExpense from "./AddExpense";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [selection, setSelection] = useState<string[]>([]);

  const hasSelection = selection.length > 0;
  const indeterminate = hasSelection && selection.length < items.length;

  const rows = items.map((item) => (
    <Table.Row
      key={item.name}
      data-selected={selection.includes(item.name) ? "" : undefined}
    >
      <Table.Cell>
        <Checkbox
          top="1"
          aria-label="Select row"
          checked={selection.includes(item.name)}
          onCheckedChange={(changes) => {
            setSelection((prev) =>
              changes.checked
                ? [...prev, item.name]
                : selection.filter((name) => name !== item.name)
            );
          }}
        />
      </Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.category}</Table.Cell>
      <Table.Cell>${item.price}</Table.Cell>
    </Table.Row>
  ));

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
            Log Out
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
      <AbsoluteCenter
        alignContent="center"
        borderRadius="xl"
        axis="both"
        background="black"
      >
        <Flex overflow="hidden" borderRadius="xl" shadow="lg" padding="20px" divideX="2px" divideColor="#F2F0EF" divideStyle="dashed">
          <Flex flexDir="column">
            <Container color="white" background="black">
                <SelectRoot
                  collection={frameworks}
                  size="sm"
                  width="320px"
                  variant="subtle"
                  margin="0 0 15px 0"
                >
                  <SelectLabel fontWeight="bold">Action</SelectLabel>
                  <SelectTrigger>
                    <SelectValueText color="teal" placeholder="Select Action" />
                  </SelectTrigger>
                  <SelectContent>
                    {frameworks.items.map((movie) => (
                      <SelectItem color="teal" item={movie} key={movie.value}>
                        {movie.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
                {/* <Button variant="solid" background="teal">
                Update
                </Button> */}
            </Container>
            <Box divideY="2px" marginBottom="10px" width="97%" divideColor="#F2F0EF"><Box></Box><Box></Box></Box>
            <AddExpense />
          </Flex>
          <Table.Root borderRadius="xl" size="md">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader w="6">
                  <Checkbox
                    top="1"
                    aria-label="Select all rows"
                    checked={
                      indeterminate ? "indeterminate" : selection.length > 0
                    }
                    onCheckedChange={(changes) => {
                      setSelection(
                        changes.checked ? items.map((item) => item.name) : []
                      );
                    }}
                  />
                </Table.ColumnHeader>
                <Table.ColumnHeader fontWeight="extrabold">Product</Table.ColumnHeader>
                <Table.ColumnHeader fontWeight="extrabold">Category</Table.ColumnHeader>
                <Table.ColumnHeader fontWeight="extrabold">Price</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>{rows}</Table.Body>
          </Table.Root>
        </Flex>

        {/* <ActionBarRoot open={hasSelection}>
          <ActionBarContent>
          <ActionBarSelectionTrigger>
              {selection.length} selected
            </ActionBarSelectionTrigger>
            <ActionBarSeparator />
            <Button variant="outline" size="sm">
              Delete <Kbd>⌫</Kbd>
            </Button>
            <Button variant="outline" size="sm">
              Share <Kbd>T</Kbd>
            </Button>
          </ActionBarContent>
        </ActionBarRoot> */}
      </AbsoluteCenter>
    </div>
  );
};

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
];

const frameworks = createListCollection({
  items: [
    { label: "Add", value: "add" },
    { label: "Edit", value: "edit" },
    { label: "Delete", value: "delete" },
    { label: "View", value: "view" },
  ],
});

export default Home;
