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
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

type Props = {
    onEditExpense?: (value: boolean) => void;
  };

const EditExpense = ({onEditExpense}: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    onEditExpense?.(true);
    console.log("Hi");
  }
  return (
    <Container>
      <Center>
        <Heading fontWeight="bold" marginBottom="10px">
          Edit Expenses
        </Heading>
      </Center>
      <Text fontSize="sm" marginBottom="10px" fontWeight="bold" color="teal">
        Select one transaction from the table to edit.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize="sm" fontWeight="medium" marginBottom="2px">
          Edit Date
        </Text>
        {/* <Input
          id="description"
          marginBottom="10px"
          placeholder="Enter Description"
          {...register("description", {
            required: "This is required",
            minLength: { value: 3, message: "Minimum length should be 3" },
          })}
        /> */}
        <DatePicker size="large" style={{"width":"100%", "marginBottom":"10px"}} />
        <Text fontSize="sm" fontWeight="medium" marginBottom="2px">
          Edit Category
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
          Edit Expense Value
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
          Edit
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

export default EditExpense;
