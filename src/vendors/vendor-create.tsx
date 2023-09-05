import {
  Button,
  Divider,
  Flex,
  Paper,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Vendor } from "../common/types";
import { useState } from "react";

const initialValues: Vendor = {
  name: "",
  inventory: [],
};

export const VendorCreate = () => {
  const [vendor, setVendor] = useState<Vendor>();
  const [, setForce] = useState(false);

  const form = useForm({
    initialValues,
  });

  const handleSubmit = (values: Vendor) => {
    setVendor({ ...values });
  };

  return (
    <Flex gap={20} direction="column">
      <Flex align={"flex-end"} gap={5}>
        <Title size="25">Vendor</Title>
        <Title size="25">|</Title>
        <Text c="dimmed">Create</Text>
      </Flex>

      <Paper title="Vendor | Create" style={{ padding: "5px 25px 20px" }}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Flex direction="column" gap={15}>
            <Flex>
              <TextInput
                withAsterisk
                label="Name"
                placeholder="Name"
                {...form.getInputProps("name")}
              />
            </Flex>
            <Divider />

            <Title size="15">Fruit Inventory</Title>

            {form.values.inventory.length > 0 && (
              <Table highlightOnHover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th />
                  </tr>
                </thead>

                <tbody>
                  {form.values.inventory.map((_, i) => (
                    <tr key={i}>
                      <td>
                        <TextInput
                          withAsterisk
                          placeholder="Name"
                          {...form.getInputProps(`inventory.${i}.name`)}
                        />
                      </td>
                      <td>
                        <TextInput
                          withAsterisk
                          placeholder="Quantity"
                          type="number"
                          {...form.getInputProps(`inventory.${i}.quantity`)}
                        />
                      </td>
                      <td>
                        <Button
                          type="button"
                          onClick={() => {
                            form.values.inventory.splice(i, 1);
                            setForce((state) => !state);
                          }}
                          color="red"
                          variant="outline"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}

            <Flex gap={15}>
              <Button
                type="button"
                onClick={() => {
                  form.values.inventory.push({
                    name: "",
                    quantity: undefined,
                  });
                  setForce((state) => !state);
                }}
              >
                New Item
              </Button>

              <Button type="submit">Submit</Button>
            </Flex>
          </Flex>
        </form>
      </Paper>

      {vendor && (
        <Paper title="Vendor" style={{ padding: "5px 25px 20px" }}>
          <Flex direction="column" gap={20}>
            <Flex>
              <Title>{vendor.name}</Title>
            </Flex>

            <Divider />

            <Flex>
              <Title order={3}>Items</Title>
            </Flex>

            <Table striped highlightOnHover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>

              <tbody>
                {form.values.inventory.map((item) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Flex>
        </Paper>
      )}
    </Flex>
  );
};
