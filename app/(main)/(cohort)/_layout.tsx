// app/(main)/(cohort)/_layout.tsx

import { Stack } from "expo-router";

export default function CohortLayout() {
  return (
    <Stack>
      <Stack.Screen name="cohort" options={{ title: "" }} />
      <Stack.Screen name="cohort-details" options={{ title: "" }} />
      <Stack.Screen name="cohort_searching" options={{ title: "" }} />
    </Stack>
  );
}
