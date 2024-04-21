import { Flex } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useIsMobile from "hooks/useIsMobile";
import useLanguage from "hooks/useLanguage";
import { useEffect, useState } from "react";

interface TodoItemInfoDatesProps {
  date: string;
  dueDate?: string;
  isFinished: boolean;
}

export default function TodoItemInfoDates({
  isFinished,
  dueDate,
  date,
}: TodoItemInfoDatesProps) {
  const [isOverDue, setIsOverDue] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const { language } = useLanguage();

  useEffect(() => {
    if (!dueDate) return;
    const date_ = new Date().getTime();
    const dueDate_ = new Date(dueDate).getTime();
    console.log(dueDate_ <= date_);
    setIsOverDue(dueDate_ <= date_);
  }, [dueDate]);

  return (
    <Flex
      alignItems={isMobile ? "flex-start" : "center"}
      gap={isMobile ? 0 : 3}
      flexDirection={isMobile ? "column" : "row"}
      className="text-gray-400 text-xs whitespace-nowrap"
    >
      <time dateTime={date}>{date}</time>
      {dueDate && (
        <span className={`${isOverDue && !isFinished ? "wavy" : ""}`}>
          <b>{labels[language.code].dueDate}</b>{" "}
          <time dateTime={dueDate}>{new Date(dueDate).toLocaleString()}</time>
        </span>
      )}
    </Flex>
  );
}
