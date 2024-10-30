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


type Props = {
    onDeleteExpense?: (value: boolean) => void;
  };


const DeleteExpense = ({onDeleteExpense}: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: any) {
    onDeleteExpense?.(true);
    console.log("Hi");
  }
  return (
    <Container>
      <Center>
        <Heading fontWeight="bold" marginBottom="10px">
          Delete Expenses
        </Heading>
      </Center>
      <Text fontSize="sm" marginBottom="10px" fontWeight="bold" color="teal">
        Select all the transactions that need to be removed.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Button mt={4} colorPalette="red" loading={isSubmitting} type="submit">
          Delete
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

export default DeleteExpense;
