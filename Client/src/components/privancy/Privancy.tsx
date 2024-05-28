import { Stack, Heading, Text } from "@chakra-ui/react";

export const Privacy = () => (
  <Stack
    h="100vh"
    p="4"
    spacing="4"
    bg="gray.100"
    align="center"
    justify="center"
    bgColor="#080124"
  >
    <Heading color="white">Privacy Policy</Heading>
    <Text color="white">
      Your privacy is important to us. This privacy policy explains the personal
      data we process, how we process it, and for what purposes.
    </Text>
    <Text color="white">
      We collect data to provide the best car rental services to all our users.
      This data includes name, email, rental details, and usage patterns.
    </Text>
    <Text color="white">
      We are committed to ensuring that your information is secure. To prevent
      unauthorized access or disclosure, we have put in place suitable physical,
      electronic, and managerial procedures to safeguard and secure the
      information we collect online.
    </Text>
    <Text color="white">
      If you have any questions about our privacy practices, please contact us
      at privacy@carrentalapp.com.
    </Text>
  </Stack>
);

export const Help = () => (
  <Stack
    h="100vh"
    p="4"
    spacing="4"
    bg="gray.100"
    align="center"
    justify="center"
    bgColor="#080124"
  >
    <Heading color="white">Help & Support</Heading>
    <Text color="white">
      Welcome to the Help & Support section. Here you can find answers to
      frequently asked questions and get in touch with our support team.
    </Text>
    <Text color="white">
      If you encounter any issues or have any questions, please check our FAQ
      section first. If you cannot find the answer you are looking for, feel
      free to contact us.
    </Text>
    <Text color="white">
      You can reach our support team at support@carrentalapp.com or call us at
      (123) 456-7890. We are available from 9 AM to 6 PM, Monday to Friday.
    </Text>
    <Text color="white">
      Thank you for using our service. We are here to help you!
    </Text>
  </Stack>
);

export const Policy = () => (
  <Stack
    h="100vh"
    p="4"
    spacing="4"
    bg="gray.100"
    align="center"
    justify="center"
    bgColor="#080124"
  >
    <Heading color="white">Terms & Conditions</Heading>
    <Text color="white">
      Welcome to our Terms & Conditions section. By using our car rental
      services, you agree to comply with and be bound by the following terms and
      conditions.
    </Text>
    <Text color="white">
      Use of our website and services is subject to the following terms: You may
      not use our site for any illegal or unauthorized purpose. You must not
      transmit any worms or viruses or any code of a destructive nature.
    </Text>
    <Text color="white">
      All rentals are subject to availability and may be subject to further
      terms and conditions. Prices are subject to change without notice.
    </Text>
    <Text color="white">
      We reserve the right to terminate your use of the Service or any related
      website for violating any of the prohibited uses.
    </Text>
    <Text color="white">
      If you have any questions regarding our terms and conditions, please
      contact us at policy@carrentalapp.com.
    </Text>
  </Stack>
);
