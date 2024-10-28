import React from "react";
import {
  Center,
  Container,
  createListCollection,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import { FaDollarSign } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input";

const AddExpense = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    console.log("Hi");
  }
  return (
    <Container>
      <Center>
        <Heading fontWeight="bold" marginBottom="15px">
          Add Expenses
        </Heading>
      </Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize="sm" fontWeight="medium" marginBottom="2px">
          Description
        </Text>
        <Input
          id="description"
          marginBottom="10px"
          placeholder="Enter Description"
          {...register("description", {
            required: "This is required",
            minLength: { value: 3, message: "Minimum length should be 3" },
          })}
        />
        <Text fontSize="sm" fontWeight="medium" marginBottom="2px">
          Category
        </Text>
        <Input
          id="category"
          marginBottom="10px"
          placeholder="Enter Category"
          {...register("category", {
            required: "This is required",
            minLength: { value: 3, message: "Minimum length should be 3" },
          })}
        />
        <Text fontSize="sm" fontWeight="medium" marginBottom="2px">
          Expense Value
        </Text>
        <Flex flexDir="row">
          <SelectRoot
            collection={frameworks}
            size="md"
            width="65px"
            variant="subtle"
            margin="0 5px 0px 0"
            defaultValue={["dollar"]}
          >
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
          {/* <Input
            id="expenseValue"
            size="sm"
            placeholder="Enter Expense Value"
          /> */}
          <NumberInputRoot
            size="md"
            defaultValue="0"
            marginBottom="10px"
            min={0}
            max={50}
            height="100%"
          >
            <NumberInputField
              {...register("expenseValue", {
                required: "This is required",
              })}
            />
          </NumberInputRoot>
        </Flex>
        <Button mt={4} colorScheme="teal" loading={isSubmitting} type="submit">
          Add
        </Button>
      </form>
    </Container>
  );
};

const frameworks = createListCollection({
  items: [
    {
      label: (
        <Icon>
          <FaDollarSign />
        </Icon>
      ),
      value: "dollar",
    },
    {
      label: (
        <Icon>
          <FaEuroSign />
        </Icon>
      ),
      value: "euro",
    },
    {
      label: (
        <Icon>
          <FaIndianRupeeSign />
        </Icon>
      ),
      value: "rupee",
    },
  ],
});

export default AddExpense;
