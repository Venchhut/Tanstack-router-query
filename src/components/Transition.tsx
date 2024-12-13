import { Card, Grid, Group, Text, Badge, Paper, Stack } from "@mantine/core";

const RecentTransactions = () => {
  const transactions = [
    { name: "Light Co.", amount: 36, status: "Pending", statusColor: "gray" },
    { name: "Vera K.", amount: 85, status: "Money In", statusColor: "green" },
    { name: "Netflix", amount: -57, status: "Money Out", statusColor: "red" },
    { name: "Car Rental", amount: -72, status: "Pending", statusColor: "gray" },
  ];

  const test = transactions
    .filter((t) => t.status === "Pending")
    .map((item) => {
      return { item };
    });
  console.log(test);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card withBorder p={"md"} radius={"md"}>
        <Text fz={"xl"} fw={500} mb={"md"} ta={"start"}>
          Recent Transaction
        </Text>
        <Grid columns={2}>
          {transactions.map((transaction) => (
            <Grid.Col span={1}>
              <Paper withBorder p={"md"} radius={"md"} bg={""}>
                <Stack>
                  <Group justify="flex-start">
                    <Text>{transaction.name}</Text>
                    <Text c={transaction.amount > 0 ? "blue" : "red"}>
                      {transaction.amount}
                    </Text>
                  </Group>
                  <Badge
                    variant="light"
                    c={transaction.status == "Pending" ? "indigo" : "orange"}
                    p={"xs"}
                    radius={"sm"}
                  >
                    {transaction.status}
                  </Badge>
                </Stack>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Card>
    </div>
  );
};

export default RecentTransactions;
