import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ModalBody,
} from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import usePassCodeLogic from "hooks/usePassCodeLogic";
import DisablePassCode from "./DisablePassCode";

export default function PassCodeScreenBody() {
  const { language } = useLanguage();
  const { submit, isValid, changeValue, error, value } = usePassCodeLogic();

  return (
    <ModalBody>
      <form className="flex flex-col gap-6" onSubmit={submit}>
        <FormControl isInvalid={!isValid}>
          <FormLabel>{labels[language.code].passCode}</FormLabel>
          <Input
            letterSpacing={2}
            textAlign="center"
            fontFamily="monospace"
            maxLength={4}
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            onInvalid={(e) => {
              e.preventDefault();
            }}
            value={value}
            onInput={changeValue}
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
        <Flex flexDirection="column" gap={1}>
          <Button type="submit" variant="solid" colorScheme="blue">
            {labels[language.code].check}
          </Button>
          <DisablePassCode />
        </Flex>
      </form>
    </ModalBody>
  );
}
