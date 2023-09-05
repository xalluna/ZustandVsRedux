import {
  MantineTheme,
  AppShell,
  Button,
  Container,
  Flex,
  Header,
  Input,
  Paper,
  Title,
} from "@mantine/core";
import { useZustandCounter } from "./zustand-stores/zustand-counter";
import {
  reduxDecrement,
  reduxIncrement,
  reduxIncrementByValue,
} from "./redux-stores/redux-store";
import { useCallback, useState } from "react";
import { useCounterDispatch, useCounterSelector } from "./redux-stores";
import { AppRoutes, routes } from "./routes/routes";

const App = () => {
  const styles = (theme: MantineTheme) => ({
    main: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  });

  return (
    <AppShell padding="md" header={<AppHeader />} styles={styles}>
      <Container>
        <AppRoutes />
      </Container>
    </AppShell>
  );
};

const AppHeader = () => {
  const [zustandCount] = useZustandCounter((state) => [state.count]);
  const reduxCounter = useCounterSelector((state) => state.count);

  return (
    <Header height={60} p="xs">
      <Flex justify="space-between">
        <>
          <Paper>zustand count: {zustandCount}</Paper>
          <Paper>redux count: {reduxCounter}</Paper>
        </>
        <Button component="a" href={routes.vendors.create}>
          Create Vendor
        </Button>
        <Button component="a" href={routes.codePlayground}>
          Code
        </Button>
      </Flex>
    </Header>
  );
};

export const Dashboard = () => {
  return (
    <>
      <Flex justify={"space-evenly"}>
        <ZustandCounter />
        <ReduxCounter />
      </Flex>
    </>
  );
};

const ZustandCounter = () => {
  const [increment, decrement, incrementByValue] = useZustandCounter(
    (state) => [state.increment, state.decrement, state.incrementByValue]
  );

  const [customValue, setCustomValue] = useState(0);

  return (
    <>
      <Flex direction="column" gap={15}>
        <Title>Zustand</Title>

        <Input
          type="number"
          onChange={(e: any) => setCustomValue(e.target.valueAsNumber)}
        />

        <Button.Group>
          <Button color="cyan" onClick={() => increment()}>
            +
          </Button>
          <Button
            variant="default"
            onClick={() => incrementByValue(customValue)}
          >
            count with custom value
          </Button>
          <Button color="cyan" onClick={() => decrement()}>
            -
          </Button>
        </Button.Group>
      </Flex>
    </>
  );
};

const ReduxCounter = () => {
  const [customValue, setCustomValue] = useState(0);
  const dispatch = useCounterDispatch();

  const handleIncrement = () => {
    dispatch(reduxIncrement());
  };

  const handleDecrement = () => {
    dispatch(reduxDecrement());
  };

  const handleIncrementByuCustomValue = useCallback(() => {
    dispatch(reduxIncrementByValue(customValue));
  }, [customValue, dispatch]);

  return (
    <>
      <Flex direction="column" gap={15}>
        <Title>Redux</Title>

        <Input
          type="number"
          onChange={(e) => setCustomValue(e.target.valueAsNumber)}
        />

        <Button.Group>
          <Button
            onClick={handleIncrement}
            style={{ backgroundColor: "#ba8fff" }}
          >
            +
          </Button>
          <Button variant="default" onClick={handleIncrementByuCustomValue}>
            count with custom value
          </Button>
          <Button
            onClick={handleDecrement}
            style={{ backgroundColor: "#ba8fff" }}
          >
            -
          </Button>
        </Button.Group>
      </Flex>
    </>
  );
};

export default App;
